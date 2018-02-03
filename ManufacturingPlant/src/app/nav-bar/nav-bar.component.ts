import { Component, OnInit } from '@angular/core';
import { NavSvc } from 'app/nav-bar/nav-svc';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  NavData: any[];
  constructor(public navSvc: NavSvc){}

  ngOnInit() {
    this.navSvc.getNavBarList()
      .subscribe(nav => {this.NavData = nav});
  }

}
