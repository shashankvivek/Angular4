import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { UserSvc } from "./user.svc";

@Injectable()
export class AuthChildrenGuardSvc implements CanActivateChild {

    constructor(public userSvc: UserSvc, private router: Router) { }

    canActivateChild(): boolean {
        console.log(this.userSvc.getUser())
        if (!this.userSvc.validUser()) {
            this.router.navigate(['']);
        }
        return true;
    }
}