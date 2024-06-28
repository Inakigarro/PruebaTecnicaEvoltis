import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourtService } from "../service/court.service";
import { CourtsGenericsActions } from "./court.actions";
import { filter, map, switchMap, take } from "rxjs";

@Injectable()
export class CourtEffects {
    /**
     * Initialize the courts module
     * by requesting the list of courts to display.
     */
    public init$ = createEffect(() =>
        this.actions.pipe(
            ofType(CourtsGenericsActions.init),
            switchMap(() => this.courtService.getCourts()),
            filter(courts => !!courts),
            take(1),
            map((courts) => CourtsGenericsActions.courtListLoaded({
                list: courts
            }))
        ))
        
    constructor(
        private readonly actions: Actions,
        private readonly courtService: CourtService,

    ) {}
}