import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TransactionsPage } from './transactions.page';
import { TransactionsModule } from './transactions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsModule
  ],
  declarations: [TransactionsPage]
})
export class Transactions {}
