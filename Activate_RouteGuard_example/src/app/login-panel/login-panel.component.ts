import { Component, OnInit } from '@angular/core';
import { UserSvc } from '../guard-svc/user.svc';
import { Router } from '@angular/router';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  constructor(private userSvc: UserSvc,private router: Router) { }

  ngOnInit() {
  }

  toAdmin1() {
    this.userSvc.setUser('Admin1');
    this.router.navigate(['/admin1']);
  }

  toAdmin2(){
    this.userSvc.setUser('Admin2');
    this.router.navigate(['/admin2']);
  }

}
