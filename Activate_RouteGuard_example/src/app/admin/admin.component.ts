import { Component, OnInit } from '@angular/core';
import { UserSvc } from '../guard-svc/user.svc';

@Component({
  selector: 'admin1',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private userSvc: UserSvc) { }


  logout() {
    this.userSvc.logout();
  }

}
