import { State } from "@ngrx/store";
import { MatDefAction } from "app/features/materialDefinition/action/mat-def-action";
import { IMaterialDefinitionState } from "app/features/materialDefinition/model/IMaterialDefinition";
import * as AllMaterialActions from "app/features/materialDefinition/action/mat-def-action";

const initMatDefState : IMaterialDefinitionState = {
    error: '',
    success: false,
    material: []
};


export function MaterialDefReducer(state : IMaterialDefinitionState = initMatDefState,action: MatDefAction){
    switch(action.type){
        case AllMaterialActions.ADD_MAT_DEF:
            return {...state,material:action.payload}
        case AllMaterialActions.ADD_MAT_DEF_SUCCESS:
            return {...state,success:true};
        default :
            return state;
    }
}