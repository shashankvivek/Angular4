import { Component, OnInit } from '@angular/core';
import { UserSvc } from '../../guard-svc/user.svc';

@Component({
  selector: 'admin1-view',
  templateUrl: './admin-view.component.html'
})
export class AdminViewComponent implements OnInit {

  name: string;
  constructor(private userSvc: UserSvc) { }

  ngOnInit() {
    this.name = this.userSvc.getUser();
  }

}
