import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sample-two',
  imports: [CommonModule],
  templateUrl: './sample-two.component.html',
  styleUrl: './sample-two.component.scss'
})
export class SampleTwoComponent {
  showHamburgerMenu: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: string; }; }){
    this.showHamburgerMenu = false;
  }

  /** function for toggling class and managing show and hiding of menu (hamburger menu)*/
  showHideMenu(){
    this.showHamburgerMenu = !this.showHamburgerMenu;
  }
}
