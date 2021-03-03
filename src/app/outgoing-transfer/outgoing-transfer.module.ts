import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { Routes, RouterModule } from '@angular/router';  
  
import { IonicModule } from '@ionic/angular';  

import { OutgoingTransferPage } from './outgoing-transfer.page';  

const routes: Routes = [  
  {  
    path: '',  
    component: OutgoingTransferPage 
  }  
];

@NgModule({  
  imports: [  
    CommonModule,  
    FormsModule,  
    IonicModule,  
    RouterModule.forChild(routes)  
  ],  
  declarations: [OutgoingTransferPage]  
})  
export class OutgoingTransfer {}

