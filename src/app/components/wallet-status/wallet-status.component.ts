import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppContextService } from '../../context/app-context.service';

@Component({
  selector: 'app-wallet-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-status.component.html',
  styleUrls: ['./wallet-status.component.scss']
})
export class WalletStatusComponent implements OnInit, OnDestroy {
  isConnected: boolean = false;
  walletAddress: string = '';
  truncatedAddress: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private appContext: AppContextService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.appContext.walletState$.subscribe(state => {
        this.isConnected = state.isConnected;
        this.walletAddress = state.address || '';
        this.updateTruncatedAddress();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateTruncatedAddress(): void {
    if (this.walletAddress && this.walletAddress.length > 10) {
      this.truncatedAddress = `${this.walletAddress.substring(0, 6)}...${this.walletAddress.substring(this.walletAddress.length - 4)}`;
    } else {
      this.truncatedAddress = this.walletAddress;
    }
  }

  connectWallet(): void {
    this.appContext.connectWallet();
  }
}