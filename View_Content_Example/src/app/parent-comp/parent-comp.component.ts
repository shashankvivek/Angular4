import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-comp',
  templateUrl: './parent-comp.component.html'
})
export class ParentCompComponent {

  value1: string = 'Some string Value from Parent Component ';
  value2_obj: any = { prop1: 'Property1', prop2: 'Property2'};
  constructor() { }

  changeVal1(){
    this.value1 = "New Val1";
  }

  changeVal2(){
    alert('check console log, nothing has happened ! No Onchanges Event triggered as there was no change in ref of obj')
    this.value2_obj.prop1 = "New Property 1";
  }

  changeVal2ObjRef(){
    this.value2_obj = {prop1: 'NEw Property Reference' };
  }
  

}
