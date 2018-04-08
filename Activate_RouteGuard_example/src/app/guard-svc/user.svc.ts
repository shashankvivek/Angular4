import { Injectable } from "@angular/core";

@Injectable()
export class UserSvc {
    private user: string = '';

    setUser(user: string) {
        this.user = user;
    }

    getUser(){
        return this.user;
    }

    validUser(): boolean{
        return (this.user !== '');
    }

    logout() {
        alert('Note! We are not redirecting to any page for the sake of example');
        this.user = '';
    }
}