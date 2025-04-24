import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlphaNumDirective } from './directives/alpha-num.directive';

@Component({
  selector: 'app-angular-features',
  imports: [CommonModule,AlphaNumDirective],
  templateUrl: './angular-features.component.html',
  styleUrl: './angular-features.component.scss'
})
export class AngularFeaturesComponent {
  //Items array
  items:string[] = ['Mango','Orange','Apple'];
  noItemsArray: string [] = [];
  changeBlock: string = '';
  switchCondition: string = '';
  showCodePreview: boolean = false;
  imgCodePreview: string = '';

  showHidePopUp(type: string):void {
    this.imgCodePreview = type;
    this.showCodePreview = !this.showCodePreview;
  }
}
