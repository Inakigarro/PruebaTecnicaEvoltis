import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CourtsGenericsActions } from "./domain/state/court.actions";

@Component({
    selector: 'app-court-routing',
    template:`<router-outlet></router-outlet>`
})
export class CourtRoutingComponent {
    constructor(private store: Store) {
        this.store.dispatch(CourtsGenericsActions.init());
    }
}