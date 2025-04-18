import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    'class': 'home-component',
    '[style.backgroundColor]': "'lightgray'",
    '(click)': 'onClick()',
    'role': 'button',
    '[attr.aria-label]': "'Home component'"
  }
})
export class HomeComponent {
  //Click event function
  onClick(){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@ doing nothing - click on home component @@@@@@@@@@@@@@@@@@@@@@@");
  }
}
