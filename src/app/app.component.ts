import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  this.platform.ready().then(() => {
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();
});
}
