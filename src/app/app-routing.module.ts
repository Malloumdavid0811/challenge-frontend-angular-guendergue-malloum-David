import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletStatusComponent } from './components/wallet-status/wallet-status.component';

const routes: Routes = [
  // ... autres routes
  {
    path: 'dashboard/wallet-status',
    component: WalletStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }