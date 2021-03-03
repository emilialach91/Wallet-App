import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
})
export class TransactionsPage{

  transactions: any;
  transactionsByDate: any;
 
  constructor(private router: Router, private datepipe: DatePipe, private _location: Location) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.transactions = this.router.getCurrentNavigation().extras.state.transactions;

      this.transactions.forEach(transaction =>  {
        transaction.dateCreated = datepipe.transform(transaction.dateCreated, 'EE MMM d y')
     });

      this.transactionsByDate = this.groupData(this.transactions, 'dateCreated')
    }
  }

  openTransactionWithState(id, topUp) {

    if (topUp === true) {
      let navigationExtras: NavigationExtras = {
        state: {
          transaction: this.transactions.find(transaction => transaction.id === id)
        }
      };
      this.router.navigate(['top-up'], navigationExtras);
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          transaction: this.transactions.find(transaction => transaction.id === id)
        }
      };
      this.router.navigate(['outgoing-transfer'], navigationExtras);
    }
  }

  groupData(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  backClicked() {
    this._location.back();
  }
}



