import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginSvc } from "./login.svc";

@Injectable()
export class AuthGuardSvc implements CanActivate {
    constructor(private loginSvc: LoginSvc, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.loginSvc.validateLogin()){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}