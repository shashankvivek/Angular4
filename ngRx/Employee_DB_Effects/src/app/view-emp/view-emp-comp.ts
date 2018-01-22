import { Component,OnInit } from "@angular/core";
import { IEmployee } from "app/models/emp.model";
import { Store } from "@ngrx/store";
import * as AllEmpAction from "app/action/emp.action";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty';

@Component({
    selector: 'view-emp',
    templateUrl: './view-emp.html'
})

export class ViewEmpComponent implements OnInit {

    empArray$: Observable<IEmployee[]>;
    
    constructor(private store: Store<any>) {
        this.empArray$ = this.store.select('post');
     }

    ngOnInit() {
        this.store.dispatch(new AllEmpAction.fetch_emp())
    }

}
