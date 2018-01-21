import { Action } from "@ngrx/store";

export class MyAction implements Action{
    type : string;
    payload ? :any;
}


export const CREATE_EMP = 'CREATE_EMP';
export const FETCH_EMPS =  'FETCH_EMPS';
export const FETCH_EMPS_SUCCESS = 'FETCH_EMPS_SUCCESS';
export const SAVE_EMP = 'SAVE_EMP';
export const SAVE_EMP_SUCCESS = 'SAVE_EMP_SUCCESS';

export class create_emp implements MyAction{
    readonly type = CREATE_EMP;
}

export class fetch_emp implements MyAction{
    readonly type = FETCH_EMPS;
    constructor(public payload? :any){}
}

export class fetch_emp_success implements MyAction{
    readonly type = FETCH_EMPS_SUCCESS;
    constructor(public payload? :any){}
}

export class save_emp implements MyAction {
    readonly type = SAVE_EMP;
}

export class save_emp_success implements MyAction{
    readonly type = SAVE_EMP_SUCCESS;
}

export type AllEmployeeActions
    = create_emp
    | fetch_emp
    | fetch_emp_success
    | save_emp
    | save_emp_success;