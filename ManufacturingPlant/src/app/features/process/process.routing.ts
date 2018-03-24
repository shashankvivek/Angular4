import { Routes, RouterModule } from "@angular/router";
import { ProcessComponent } from "./process-comp";
import { ModuleWithProviders } from "@angular/core";
import { ProcessListComponent } from "./list/process.list.component";

export const routes: Routes = [
    {path: '', component : ProcessComponent,
        children: [
            {path : '',component : ProcessListComponent}
        ]
    }
];


export const ProcessRouting: ModuleWithProviders = RouterModule.forChild(routes);
