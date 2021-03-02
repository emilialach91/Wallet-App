import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OutgoingTransferPage } from './outgoing-transfer.page';
import { OutgoingTransferModule } from './outgoing-transfer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutgoingTransferModule
  ],
  declarations: [OutgoingTransferPage]
})
export class OutgoingTransfer {}
