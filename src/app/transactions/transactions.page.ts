import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';  
import { TopUpPage } from '../top-up/top-up.page';  

@Component({
  selector: 'transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
}) 
export class TransactionsPage {  
  constructor(public modalCtrl: ModalController) {}  
  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: TopUpPage,
      cssClass: 'my-modal'
    });  
    return await modal.present();  
  }  
}  