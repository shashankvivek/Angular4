import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html'
})
export class ChildCompComponent implements OnInit,OnChanges {

  @Input() value1: string;
  @Input() value2: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
    
            console.log(curVal);
            console.log(prevVal);
         }
  }

  ngOnInit() {
  }

}
