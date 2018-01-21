import { Injectable } from "@angular/core";
import { MyAction, FETCH_EMPS } from "app/action/emp.action";
import { Store } from "@ngrx/store";
import { Effect,Actions } from "@ngrx/effects";
import { EmployeeService } from "app/emp.svc";
import { Observable } from "rxjs/Observable";
import * as AllEmpAction from "app/action/emp.action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';


@Injectable()
export class EmployeeEffects{

    constructor(private actions$: Actions,private store: Store<any>,private empSvc: EmployeeService){   }

    @Effect()
    load: Observable<MyAction> = this.actions$
        .ofType(AllEmpAction.FETCH_EMPS)
        .switchMap(action => 
            this.empSvc.getEmployees()
            .delay(2000)
            .map(res => (new AllEmpAction.fetch_emp_success(res)))    
        );
}
