import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-three',
  imports: [],
  templateUrl: './sample-three.component.html',
  styleUrl: './sample-three.component.scss'
})
export class SampleThreeComponent implements OnInit{
  private _currentMode = localStorage.getItem('color-theme');

  ngOnInit(): void {
    if(this._currentMode && this._currentMode === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('color-theme','dark');
    }
  }

  //Method to switch the display mode
  switchMode(){
    if(this._currentMode === 'dark'){
      document.documentElement.removeAttribute('data-theme');
      localStorage.removeItem('color-theme');
      this._currentMode = '';
    }
    else{
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('color-theme','dark');
      this._currentMode = 'dark';
    }
  }
}
