import { Component, OnInit } from '@angular/core';  
import { ModalController} from '@ionic/angular';  
  
@Component({
  selector: 'top-up',
  templateUrl: 'top-up.page.html',
  styleUrls: ['top-up.page.scss'],
})
export class TopUpPage implements OnInit {  
  
  constructor(public modalCtrl: ModalController) {}  
  
  ngOnInit() {  
  }  
  dismiss() {  
    this.modalCtrl.dismiss();  
  } 

}  