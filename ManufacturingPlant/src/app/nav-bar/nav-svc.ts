import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http/src/static_response";



@Injectable()
export class NavSvc{

    constructor(public http: HttpClient){ }

    getNavBarList(): Observable<any>{
        return this.http.get("http://localhost:3000/navList");
    }

}
