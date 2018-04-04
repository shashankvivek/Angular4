import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: 'process-add.html'
})

export class ProcessAddComponent{

    addForm: FormGroup;
    revisionList: string[] = [ 'A', 'B'];
    constructor(private fb: FormBuilder ){
        this.addForm = this.fb.group({
            'id'    : ['', Validators.required],
            'name'  : ['', Validators.compose([Validators.required,Validators.minLength(3)])],
            'revision': ['',Validators.required]
        });
    }

    submitForm(formData){
        console.log(formData)
    }
}