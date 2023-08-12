import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWebsite';
  // By default light mode
  bodyStyle: any = {
    'background-color': 'rgb(46, 46, 59);'
  }

  makeNightMode() {
    this.bodyStyle = {
      'background-color': '#fdf6ed;'
    }
  }
}
