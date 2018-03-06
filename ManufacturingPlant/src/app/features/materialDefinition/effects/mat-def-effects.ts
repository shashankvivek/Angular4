import { Injectable } from "@angular/core";
import { Effect,Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { MaterialDefService } from "app/features/materialDefinition/mat-def-svc";
import { Observable } from "rxjs/Observable";
import { MatDefAction } from "app/features/materialDefinition/action/mat-def-action";
import * as AllMatActions from "app/features/materialDefinition/action/mat-def-action";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';


@Injectable()
export class MatDefEffects{

    constructor(private action$:Actions,private store:Store<any>,private matSvc: MaterialDefService){}

    @Effect()
    load: Observable<MatDefAction> = this.action$
        .ofType(AllMatActions.ADD_MAT_DEF)
        .map((action: MatDefAction) => action)
        .switchMap( action => 
            this.matSvc.addMatDef(action.payload)
                .map((response) => new AllMatActions.add_mat_def_success(response))
        );

}