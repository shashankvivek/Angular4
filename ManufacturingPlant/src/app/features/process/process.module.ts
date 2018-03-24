import { NgModule } from "@angular/core";
import { ProcessComponent } from "./process-comp";
import { CommonModule } from "@angular/common";
import { ProcessRouting } from "./process.routing";
import { ProcessListComponent } from "./list/process.list.component";
import { CommonSharedModule } from "../../common/common.module";
import { ProcessAddComponent } from "./add/process.add.component";

@NgModule({
 declarations: [ProcessComponent, ProcessListComponent, ProcessAddComponent],
 imports: [
     CommonModule,
     ProcessRouting,
     CommonSharedModule
 ],
 providers : []
})

export class ProcessModule{}