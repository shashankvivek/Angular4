import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'process-list',
    templateUrl : 'process-list.html'
})

export class ProcessListComponent implements OnInit {

    process_list: any;
    configObj: {};

    constructor(public http: HttpClient){}

    ngOnInit() {
        this.configObj = {
            data : this.getAll,
            fields : {
                title : 'id',
                body : [
                    { name : 'Name' , field : 'name'},
                    { name: 'Final Material', field : 'final_material'},
                    { name : 'Revision' , field : 'revision'}
                ]
            },
            selectionChanged : this.selectionChangeDetection
        }
    }

    selectionChangeDetection = (item) => {
        console.log(item)
    }

    // Use of arrow because : https://stackoverflow.com/questions/49466085/this-variable-get-lost-when-passing-a-function-from-parent-to-child-component
    getAll = (option: string) => {
       return ((extra_option: string) => {
           const localHost = 'http://localhost:3000/process_list';
           const url: string = (extra_option) ? localHost + extra_option : localHost;
           return this.http.get(url);
        })(option);
     }
}