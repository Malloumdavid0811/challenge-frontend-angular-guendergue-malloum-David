import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class AppContextService {
  private walletState = new BehaviorSubject<WalletState>({
    isConnected: false,
    address: null,
    chainId: null
  });

  walletState$: Observable<WalletState> = this.walletState.asObservable();

  constructor() {
    // Simuler la vérification initiale du wallet
    this.checkWalletConnection();
  }

  private checkWalletConnection(): void {
    // Logique pour vérifier si un wallet est déjà connecté
    // À adapter selon votre implémentation existante
    const savedWallet = localStorage.getItem('walletConnected');
    if (savedWallet === 'true') {
      this.setWalletConnected(true, '0x1234567890123456789012345678901234567890');
    }
  }

  setWalletConnected(connected: boolean, address: string | null = null): void {
    this.walletState.next({
      isConnected: connected,
      address: address,
      chainId: connected ? 1 : null
    });
    
    if (connected && address) {
      localStorage.setItem('walletConnected', 'true');
    } else {
      localStorage.removeItem('walletConnected');
    }
  }

  connectWallet(): void {
    // Logique de connexion du wallet
    // Simuler une connexion pour l'exemple
    this.setWalletConnected(true, '0x1234567890123456789012345678901234567890');
  }

  disconnectWallet(): void {
    this.setWalletConnected(false);
  }
}