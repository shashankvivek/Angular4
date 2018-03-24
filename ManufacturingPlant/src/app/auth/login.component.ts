import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginSvc } from "./login.svc";


@Component({
    templateUrl : 'login.html'
})

export class LoginComponent {
    rForm: FormGroup;
    constructor(private fb: FormBuilder,private loginSvc: LoginSvc){
        this.rForm = fb.group({
            'email' : [null, Validators.required],
            'pwd' : [null, Validators.compose([Validators.required,Validators.minLength(3)])]
        });
    }

    loginUser(formData: any){
        this.loginSvc.doLogin(formData.email,formData.pwd);
    }
}