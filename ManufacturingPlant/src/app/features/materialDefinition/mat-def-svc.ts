import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IMaterialDefinition } from "app/features/materialDefinition/model/IMaterialDefinition";
import 'rxjs/add/operator/map'


@Injectable()
export class MaterialDefService{

    constructor(public http: HttpClient){}

    getMatDefList() {
        return this.http.get('http://localhost:3000/material_definition'); 
    }

    addMatDef(matDef: IMaterialDefinition){
        return this.http.post('http://localhost:3000/material_definition',matDef)
            .map(data => <IMaterialDefinition>data);            
    }

}