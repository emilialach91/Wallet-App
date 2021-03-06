import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  balance: any;
  transactions: any;
  suggestions: any;

  constructor(public http: HttpClient, private router: Router) {}

  // Fetching data on load

  ionViewWillEnter() {
    
      this.http
        .get('https://7f9065f949ced63703b704d9dd14f7a8.m.pipedream.net')
        .subscribe((data)=>{
          this.data = data
          this.balance = data["wallet"].balance
          this.transactions = data["transactions"]
          this.suggestions = data["pay_with_etn"].suggestions
        })
    }

    // Routing to all transactions (with passing data)

    openTransactionsWithState() {
      let navigationExtras: NavigationExtras = {
        state: {
          transactions: this.transactions
        }
      };
      this.router.navigate(['transactions'], navigationExtras);
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

  // slider options

  option = {
    slidesPerView: 3.5,
    loop: false,
    spaceBetween: 10,
    freeMode: true,
  }
}
