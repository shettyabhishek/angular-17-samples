import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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

  constructor(){
    //implementing an effect
    effect((onCleanup)=>{
      onCleanup(()=>{
        //trigger some clean up activities / garbage collection
        //this comes into play only when manualCleanup: true. Default value is false
        //Angular does auto clean up of effect
      })
      console.log("@@@ Effect @@@ -The signal value updated, its latest value",this.counterSignal())
    },{manualCleanup: true})
  }
  //implemented through signal
  counterSignal: WritableSignal<number> = signal<number>(0);
  translations: WritableSignal<{name: string,age: number}> = signal<{name: string,age: number}>({name: 'Test user',age: 10});
  //below method updates a signal which holds an numeric (primitive data)
  increment():WritableSignal<number>{
    console.log("Incremented");
    this.counterSignal.set(this.counterSignal()+1);
    return this.counterSignal;
  }
  //below method updates a signal which holds an object value
  changeUser():WritableSignal<{}>{
    this.translations.update((item)=>({...item,name:'John Doe',age: 25}));
    return this.translations;
  }
  //a computed signal
  derivedCounterSignal = computed(()=>{
    console.log("The compute method is triggered");
    return this.counterSignal() * 10;
  })


  showHidePopUp(type: string):void {
    this.imgCodePreview = type;
    this.showCodePreview = !this.showCodePreview;
  }
}
