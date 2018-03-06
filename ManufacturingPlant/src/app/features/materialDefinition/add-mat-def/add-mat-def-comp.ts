import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { MaterialDefService } from "app/features/materialDefinition/mat-def-svc";
import { IMaterialDefinition, IMaterialDefinitionState } from "app/features/materialDefinition/model/IMaterialDefinition";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as AllMatActions from "app/features/materialDefinition/action/mat-def-action";

@Component({
    selector: 'add-mat-def',
    templateUrl: 'add-mat-def.html'
})

export class AddMateriaDefComponent implements OnInit {

    rForm: FormGroup;
    name: String;
    id: String;
    alertTitle: String = 'Required';
    savedMaterialData: IMaterialDefinition = {
        name: '',
        id: '',
        description: '',
    };
    success$ : Observable<IMaterialDefinitionState>;

    constructor(private fb: FormBuilder, public matDefSvc: MaterialDefService,public store:Store<any>) {
        this.rForm = fb.group({
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'id': [null, Validators.required],
            'description': [null],
            'mandateDesc': ''
        });
        this.success$ = this.store.select('MaterialDefReducer1');
    }

    ngOnInit() {
        this.rForm.get('mandateDesc').valueChanges.subscribe(
            valueChanged => {
                if (valueChanged == '1') {
                    this.rForm.get('description').setValidators([Validators.required, Validators.minLength(4)]);
                    this.alertTitle = 'Required with min 4 chars';
                } else {
                    this.rForm.get('description').setValidators([Validators.required]);
                }
                this.rForm.get('description').updateValueAndValidity();
            }
        );
    }

    addToMatDef(formData) {
        delete formData.mandateDesc;
        this.matDefSvc.addMatDef(formData)
            .subscribe((success) => {
                this.savedMaterialData = success;
                this.formReset();
                this.store.dispatch(new AllMatActions.add_mat_def(success));
            })
    }

    formReset() {
        this.rForm.setValue({
            name: '',
            id: '',
            description: '',
            mandateDesc: false
        })
    }
}