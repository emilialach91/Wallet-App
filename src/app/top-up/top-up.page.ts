import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'top-up',
  templateUrl: 'top-up.page.html',
  styleUrls: ['top-up.page.scss'],
})
export class TopUpPage{

  data: any;
 
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.transaction;
    }
  }

  ionViewWillEnter() {
    console.log('trans', this.data)
  }
}