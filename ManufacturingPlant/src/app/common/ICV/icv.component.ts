import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'icv',
    templateUrl: 'icv.html',
    styleUrls : ['icv.css']
})

export class ICVComponent implements OnInit {

    @Input() config;
    dataList: any[];
    selectedItemId: {};
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.config.data()
            .subscribe(data => this.dataList = data);
    }

    selection(item) {
        this.selectedItemId = item.id;
        this.config.selectionChanged(item);
    }

}