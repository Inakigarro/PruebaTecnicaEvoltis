import { RouterModule, Routes } from "@angular/router";
import { CourtRoutingComponent } from "./court-routing.component";
import { NgModule } from "@angular/core";
import { CourtListComponent } from "./feature/court-list/court-list.component";
import { CreateCourtFormComponent } from "./feature/create-court-form/create-court-form.component";
import { EditCourtFormComponent } from "./feature/edit-court-form/edit-court-form.component";

const routes : Routes = [
    {
        path: '',
        component: CourtRoutingComponent,
        children: [
            {
                path: '',
                component: CourtListComponent,
                children: []
            },
            {
                path: 'new',
                component: CreateCourtFormComponent,
            },
            {
                path: 'edit/:courtId',
                component: EditCourtFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourtRoutingModule {}