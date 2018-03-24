import { NgModule } from "@angular/core";
import { ICVComponent } from "./ICV/icv.component";

@NgModule({
    declarations: [ICVComponent],
    exports:[ICVComponent]
})

export class CommonSharedModule {}