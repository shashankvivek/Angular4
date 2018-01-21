import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { IEmployee } from "app/models/emp.model";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";


@Injectable()
export class EmployeeService {


    constructor(private http: HttpClient) { }

    getEmployees() : Observable<IEmployee[]> {
        return this.http.get('http://localhost:3000/employees')
            .map((empData) => <IEmployee[]>empData);
    }

    addEmployee(emp: IEmployee){
        return this.http.post(
            'http://localhost:3000/employees',
            emp,
            {headers : new HttpHeaders().set('Content-Type','application/json')})

    }

}