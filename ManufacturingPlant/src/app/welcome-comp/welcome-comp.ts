import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FeatureListSvc } from './featureList-svc';
import { FeatureProperty } from './feature.model';

@Component({
    selector : 'welcome-dashboard',
    templateUrl : 'welcome-dashboard.html'
})

export class WelcomeComponent implements OnInit{

    FeatureList: FeatureProperty[];

    constructor(private featureSvc: FeatureListSvc){}

    ngOnInit() {
        this.featureSvc.getFeatureList()
            .subscribe( data => {this.FeatureList = data});
    }
}
