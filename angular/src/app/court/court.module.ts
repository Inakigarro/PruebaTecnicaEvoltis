import { NgModule } from "@angular/core";
import { CourtRoutingModule } from "./court-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourtRoutingComponent } from "./court-routing.component";
import { ListComponent } from "../list/list.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { NgrxFormsModule } from "ngrx-forms";
import { CreateCourtFormComponent } from "./feature/create-court-form/create-court-form.component";
import { CourtListComponent } from "./feature/court-list/court-list.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { EditCourtFormComponent } from "./feature/edit-court-form/edit-court-form.component";

const MaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
]

@NgModule({
    declarations: [
        CourtRoutingComponent,
        CourtListComponent,
        CreateCourtFormComponent,
        EditCourtFormComponent],
    imports: [
        CommonModule,
        ListComponent,
        MaterialModules,
        FormsModule,
        ReactiveFormsModule,
        NgrxFormsModule,
        CourtRoutingModule],
    exports: [],
})
export class CourtModule {}