import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutgoingTransferPage } from './outgoing-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: OutgoingTransferPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutgoingTransferModule {}
