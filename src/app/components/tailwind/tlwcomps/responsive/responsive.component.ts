import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive',
  imports: [],
  templateUrl: './responsive.component.html',
  styleUrl: './responsive.component.scss'
})
export class ResponsiveComponent implements OnInit{
  currentWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.currentWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
  }
}
