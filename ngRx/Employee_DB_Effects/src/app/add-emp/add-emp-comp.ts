import { Component } from "@angular/core";
import { IEmployee, emptyEmp } from "app/models/emp.model";
import { OnInit } from "@angular/core";
import { EmployeeService } from "app/emp.svc";
import { Store } from "@ngrx/store";
import * as AllEmpActions from 'app/action/emp.action';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'add-emp',
    templateUrl: './add-emp.html'
})

export class AddEmpComponent implements OnInit {

    emp: IEmployee = emptyEmp;
    success : boolean = false;
    saved_success$ : Observable<IEmployee>;

    constructor(private empSvc: EmployeeService,private store: Store<any> ) {
        this.store.select('post')
            .subscribe(res =>{
                this.success = res.success;
                this.emp = { id: 0, first_name: '', email: '', last_name: '' };
            })
     }

    addEmp() {
        this.store.dispatch(new AllEmpActions.save_emp(this.emp));
    }

    ngOnInit() {

    }
}