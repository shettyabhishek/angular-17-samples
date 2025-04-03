import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})

export class HighlightDirective implements OnInit{

  @Input() lblText: string = "";

  //Adding host binding to play with the properties
  @HostBinding('style.color') textClr: string = 'blue';

  @HostListener('mouseover') onMouseOver(){
    return this.textClr = 'brown'
  }

  @HostListener('mouseleave') onMouseleave(){
    return this.textClr = 'blue'
  }

  constructor() { }
  ngOnInit(): void {
    console.log("Directive intantiated has access to label text which is -", this.lblText);
  }
}
