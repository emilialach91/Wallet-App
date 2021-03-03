import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
})
export class TransactionsPage{

  transactions: any;
 
  constructor(private router: Router, private datepipe: DatePipe) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.transactions = this.router.getCurrentNavigation().extras.state.transactions;

      this.transactions.forEach(transaction =>  {
        transaction.dateCreated = datepipe.transform(transaction.dateCreated, 'EE MMM d y')
     });

      this.transactions = this.groupData(this.transactions, 'dateCreated')
    }
  }

  groupData(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  ionViewWillEnter() {
    console.log('dataaa', this.transactions)
  }
}