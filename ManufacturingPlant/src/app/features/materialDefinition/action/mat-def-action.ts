import { Action } from "@ngrx/store";
import { IMaterialDefinitionState } from "app/features/materialDefinition/model/IMaterialDefinition";

 

export class MatDefAction implements Action{
    type : string;
    payload : IMaterialDefinitionState
}

 export const ADD_MAT_DEF = '[MAT_DEF] ADD_MAT_DEF';
 export const ADD_MAT_DEF_SUCCESS = '[MAT_DEF] ADD_MAT_DEF_SUCCESS';
 export const ADD_MAT_DEF_ERROR = '[MAT_DEF] ADD_MAT_DEF_ERROR';

 export class add_mat_def implements MatDefAction{
     readonly type = ADD_MAT_DEF;
     constructor(public payload:IMaterialDefinitionState){}
 }

 export class add_mat_def_success implements MatDefAction{
     readonly type = ADD_MAT_DEF_SUCCESS;
     constructor(public payload: IMaterialDefinitionState){}
 }

 export type MaterialDefinitionActions
    = add_mat_def
    | add_mat_def_success;