import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-features',
  imports: [CommonModule],
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
