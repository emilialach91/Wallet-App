import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TopUpPage } from './top-up.page';
import { TopUpModule } from './top-up-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopUpModule
  ],
  declarations: [TopUpPage]
})
export class TopUp {}
