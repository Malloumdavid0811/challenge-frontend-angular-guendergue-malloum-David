import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  title = 'challenge-frontend-angular-guendergue-malloum-David';
  isConnected: boolean = false;
  walletAddress: string | null = null;

  get truncatedAddress(): string {
    if (!this.walletAddress) return '';
    return this.walletAddress.substring(0, 6) + '...' + this.walletAddress.substring(this.walletAddress.length - 4);
  }

  connectWallet() {
    // Simuler une connexion de portefeuille
    this.isConnected = true;
    this.walletAddress = '0x742d35Cc6634C0532925a3b844Bc5f5aDb9c9b7b';
    console.log('Wallet connected');
  }
}
