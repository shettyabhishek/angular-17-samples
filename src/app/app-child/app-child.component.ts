import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.scss',
  standalone: true
})

export class AppChildComponent implements OnInit, AfterViewInit{
  @Input() lblText: string = '';

  ngOnInit(): void {
    console.log("ng onInit from the child component");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit from the child component");
  }
}
