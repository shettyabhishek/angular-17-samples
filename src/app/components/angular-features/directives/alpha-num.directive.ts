import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphaNum]'
})
export class AlphaNumDirective {
  constructor(private el: ElementRef) {}
  numberPresent: boolean = false;
  alphabetPresent: boolean = false;

  //@HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent){
  @HostListener('input') onInPut(event: KeyboardEvent){
    let inputStr: string = '';
    if(this.el.nativeElement.value.length >= 5){
      this.el.nativeElement.value = this.el.nativeElement.value.substring(0,5)
      inputStr = this.el.nativeElement.value;
    } else {
      this.numberPresent = false;
      this.alphabetPresent = false;
      this.el.nativeElement.parentElement.querySelector('.alpha-num-error').style.display = 'block';
      return
    }

    //Check if the string is alpha numeric
    const allChars = [...inputStr];
    allChars.every((char) => {
      if(char){
        if(parseInt(char,10) >= 0){
          this.numberPresent = true;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
          this.alphabetPresent = true;
        }
      }
      return true;
    })

    if(this.alphabetPresent && this.numberPresent) {
      this.el.nativeElement.parentElement.querySelector('.alpha-num-error').style.display = 'none';
    }
  }

}
