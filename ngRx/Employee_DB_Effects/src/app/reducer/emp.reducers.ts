import { ActionReducer, Action } from "@ngrx/store";
import { IEmployee } from "app/models/emp.model";
import { IPost, emptyPostModel } from 'app/models/post.model';
import * as AllEmployeeActions from "app/action/emp.action";

const initState: IPost = emptyPostModel;

export function EmployeeReducer(state: IPost = initState, action: AllEmployeeActions.MyAction) {
    switch (action.type) {
        case AllEmployeeActions.FETCH_EMPS:
            return {...state,loading: true};
        case AllEmployeeActions.FETCH_EMPS_SUCCESS:
            return {...state,loading : false,data: action.payload};
        default:
            return state;    
    }
}