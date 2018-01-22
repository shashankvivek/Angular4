import { Component } from "@angular/core";
import { IEmployee, emptyEmp } from "app/models/emp.model";
import { OnInit } from "@angular/core";
import { EmployeeService } from "app/emp.svc";
import { Store } from "@ngrx/store";
import * as AllEmpActions from 'app/action/emp.action';
import { Observable } from "rxjs/Observable";
import { IPost } from "app/models/post.model";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'add-emp',
    templateUrl: './add-emp.html'
})

export class AddEmpComponent implements OnInit,OnDestroy {

    emp: IEmployee = emptyEmp;
    success: boolean = false;
    subs: Subscription;

    constructor(private empSvc: EmployeeService, private store: Store<any> ) {
        this.subs = this.store.select('post')
            .subscribe(res => {
                // debugger
                this.success = res.success;
                this.emp = { id: 0, first_name: '', email: '', last_name: '' };
            })
     }

    addEmp() {
        this.store.dispatch(new AllEmpActions.save_emp(this.emp));
    }

    ngOnInit() {}
    ngOnDestroy() { 
        // "unsubscribe" to aviod memory leaks, not required in case of "view-comp.ts" as "async" pipe takes care 
        // of unsubscribing an Observable
        // To check its significance, comment below line and put a debugger in "subscribe" block. 
        //    |--> You'll see that the debugger is hit for other components as well, i.e. when "view-comp.ts" is opened
        //    |--> so it creates memory leaks and hence performance issue
       this.subs.unsubscribe();
    }
}
