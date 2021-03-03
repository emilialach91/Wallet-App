import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'top-up',
  templateUrl: 'top-up.page.html',
  styleUrls: ['top-up.page.scss'],
})
export class TopUpPage{

  data: any;

  constructor(private router: Router, private _location: Location) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.transaction;
    }
  }

  ionViewWillEnter() {
  }
  
  backClicked() {
    this._location.back();
  }
}