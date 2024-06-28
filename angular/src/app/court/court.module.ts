import { NgModule } from "@angular/core";
import { CourtRoutingModule } from "./court-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourtRoutingComponent } from "./court-routing.component";

@NgModule({
    declarations: [CourtRoutingComponent],
    imports: [
        CommonModule,
        CourtRoutingModule,
        ReactiveFormsModule,
        FormsModule,],
    exports: [],
})
export class CourtModule {}