import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: 'process-add.html'
})

export class ProcessAddComponent{

    addForm: FormGroup;
    constructor(private fb: FormBuilder ){
        this.addForm = fb.group({
            'id' : [null, Validators.required],
            'name' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
            'final_mat': [],
            'rev' : []
        })
    }
}