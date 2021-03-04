import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'outgoing-transfer',
  templateUrl: 'outgoing-transfer.page.html',
  styleUrls: ['outgoing-transfer.page.scss'],
})

export class OutgoingTransferPage{

  data: any;

  constructor(private router: Router, private _location: Location) {

    // Getting data from parrent

    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.transaction;
    }
  }

  // Routing back

  backClicked() {
    this._location.back();
  }
}
