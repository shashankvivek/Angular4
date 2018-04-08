import { Component, AfterViewInit, ViewChildren, QueryList, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './ViewExample/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(AlertComponent) alertCompList: QueryList<AlertComponent>;
  @ViewChild('alert1Tag') alertComp: AlertComponent;
  // The native DOM element
  @ViewChildren(AlertComponent, {read : ElementRef}) alertCompDOMRefList: QueryList<AlertComponent>;
  // You need this token when you need to create templates or components dynamically
  @ViewChildren(AlertComponent, {read : ViewContainerRef}) alertCompContainerList: QueryList<AlertComponent>;

  ngAfterViewInit() {
    this.alertCompList.forEach( instance => console.log(instance))
    console.log('============================');
    console.log(this.alertComp);
    console.log('============================');
    this.alertCompDOMRefList.forEach( dom => (console.log(dom)));
    console.log('============================');
    this.alertCompContainerList.forEach(container => console.log(container));
  }

}
