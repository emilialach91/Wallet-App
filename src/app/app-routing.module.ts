import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.Transactions)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./top-up/top-up.module').then( m => m.TopUp)
  },
  {
    path: 'outgoing-transfer',
    loadChildren: () => import('./outgoing-transfer/outgoing-transfer.module').then( m => m.OutgoingTransfer)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
