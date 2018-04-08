import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserSvc } from "./user.svc";

@Injectable()
export class AuthGuardSvc implements CanActivate {

    constructor(public userSvc: UserSvc, private router: Router) { }

    canActivate(): boolean {
        if (!this.userSvc.validUser()) {
            this.router.navigate(['']);
        }
        return true;
    }
}