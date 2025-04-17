import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

//Material imports
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MyTest } from './classes/my-test';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[CommonModule,RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule,MatListModule,RouterLink]
})

export class AppComponent implements OnInit{
  showFiller = true;

  ngOnInit():void {
    //Instantiating a class that uses a sample decorator called myDecorator
    const myTestClass:MyTest = new MyTest();
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@ some data from the decorator ",myTestClass)
  }
}
