import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  option = {
    slidesPerView: 3.5,
    loop: false,
    spaceBetween: 5,
    freeMode: true,
  }
}
