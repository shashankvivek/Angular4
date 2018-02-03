import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddMateriaDefComponent } from "app/features/materialDefinition/add-mat-def/add-mat-def-comp";
import { ListMateriaDefComponent } from "app/features/materialDefinition/mat-def-list/mat-def-list-comp";
import { MaterialDefinitionComponent } from "app/features/materialDefinition/mat-def-comp";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialDefService } from "app/features/materialDefinition/mat-def-svc";
import { StoreModule } from "@ngrx/store";
import { MaterialDefReducer } from "app/features/materialDefinition/reducers/mat-def-reducer";

const routes = [
    {
        path: '', component: MaterialDefinitionComponent,
        children: [
            { path: 'addMat', component: AddMateriaDefComponent },
            { path: 'listMat', component: ListMateriaDefComponent }
        ]
    }
];

@NgModule({
    declarations: [AddMateriaDefComponent, MaterialDefinitionComponent, ListMateriaDefComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('MaterialDefReducer1', MaterialDefReducer)
    ],
    exports: [],
    providers: [MaterialDefService]
})

export class MaterialDefModule {

}