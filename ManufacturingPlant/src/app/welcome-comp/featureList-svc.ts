import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";


@Injectable()
export class FeatureListSvc {
     constructor(private http: HttpClient){}

     getFeatureList(): Observable<any>{
         return this.http.get('http://localhost:3000/featureList');
     }
}