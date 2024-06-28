import { RouterModule, Routes } from "@angular/router";
import { CourtRoutingComponent } from "./court-routing.component";
import { NgModule } from "@angular/core";
import { CourtListComponent } from "./feature/court-list/court-list.component";

const routes : Routes = [
    {
        path: '',
        component: CourtRoutingComponent,
        children: [
            {
                path: '',
                component: CourtListComponent,
                children: []
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourtRoutingModule {}