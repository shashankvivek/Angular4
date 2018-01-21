import { Component } from "@angular/core";
import { IEmployee, emptyEmp } from "app/models/emp.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EmployeeService } from "app/emp.svc";

@Component({
    selector: 'add-emp',
    templateUrl: './add-emp.html'
})

export class AddEmpComponent implements OnInit {

    emp: IEmployee = emptyEmp;

    constructor(private http: HttpClient,private empSvc: EmployeeService ) { }

    addEmp() {
        this.empSvc.addEmployee(this.emp)
            .subscribe(success => {console.log('success')},error => {console.error('error')});
    }

    ngOnInit() {

    }
}