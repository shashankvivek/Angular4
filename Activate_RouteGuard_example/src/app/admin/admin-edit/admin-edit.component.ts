import { Component, OnInit } from '@angular/core';
import { UserSvc } from '../../guard-svc/user.svc';

@Component({
  selector: 'admin1-edit',
  templateUrl: './admin-edit.component.html',
})
export class AdminEditComponent implements OnInit {

  name: string;
  constructor(private userSvc: UserSvc) { }

  ngOnInit() {
    this.name = this.userSvc.getUser();
  }
}
