import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl : 'alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() type: string;
  constructor() { }

  alert(){
    alert(this.type);
  }

  
}
