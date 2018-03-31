import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginSvc{

    user: string;
    pwd: string;

    constructor(private router: Router){}

    doLogin(name: string, pwd: string){
        this.user = name;
        this.pwd = pwd;
        this.router.navigate(['/home']);
    }
    validateLogin(): boolean {
        return (this.user === 'test' && this.pwd === 'test');
    }

    logout(){
        this.user = '';
        this.pwd = '';
        this.router.navigate(['/login']);
    }
}