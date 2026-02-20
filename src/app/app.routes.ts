import { Routes } from '@angular/router';
import { WalletStatusComponent } from './components/wallet-status/wallet-status.component';

export const routes: Routes = [
  // ... autres routes
  {
    path: 'dashboard/wallet-status',
    loadComponent: () => import('./components/wallet-status/wallet-status.component').then(m => m.WalletStatusComponent)
  }
];