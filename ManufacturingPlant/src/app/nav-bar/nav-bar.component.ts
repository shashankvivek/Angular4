import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { LoginSvc } from '../auth/login.svc';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // NavData: any[];
  constructor(private loginSvc: LoginSvc){}

  logout() {
    this.loginSvc.logout();
  }

  // ngOnInit() {
  //   // this.navSvc.getNavBarList()
  //   //   .subscribe(nav => {this.NavData = nav});
  // }

}
