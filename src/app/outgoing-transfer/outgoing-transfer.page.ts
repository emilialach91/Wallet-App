import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'outgoing-transfer',
  templateUrl: 'outgoing-transfer.page.html',
  styleUrls: ['outgoing-transfer.page.scss'],
})

export class OutgoingTransferPage{

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
