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

      // Getting data from parent (Home Page)
      if (this.router.getCurrentNavigation().extras.state) {
        this.transactions = this.router.getCurrentNavigation().extras.state.transactions;
      }

      // Add transformed date to data

      this.transactions.forEach(transaction =>  {
        transaction.dateCreatedTransformed = datepipe.transform(transaction.dateCreated, 'EE MMM d y')
     });

    //  Group data by transformed date

      this.transactionsByDate = this.groupData(this.transactions, 'dateCreatedTransformed')
    }
  }

  // Routing to specific transaction depending on id and type of transaction (with passing data)

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

  // Helper for grouping data

  groupData(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  // Routing back

  backClicked() {
    this._location.back();
  }
}



