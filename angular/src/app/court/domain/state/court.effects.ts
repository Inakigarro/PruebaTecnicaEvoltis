import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CourtService } from "../service/court.service";
import { CourtsGenericsActions, CreateCourtActions, EditCourtActions } from "./court.actions";
import { filter, map, switchMap, take, tap, withLatestFrom } from "rxjs";
import { MarkAsSubmittedAction, ResetAction } from "ngrx-forms";
import { COURT_LIST_ID } from "../../feature/court-list/court-list.component";
import { editRowButtonClicked } from "../../../list/state/list.actions";
import { routerNavigatedAction } from "@ngrx/router-store";
import { RouterService } from "../../../router/router.service";

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
        ));
    
    public newCourtFromNavigation$ = createEffect(() =>
        this.actions.pipe(
            ofType(routerNavigatedAction),
            switchMap(() => this.routerService.routerUrl$.pipe(take(1))),
            filter(url => url.includes('court/new')),
            tap(() => this.courtService.navigate(['new'], true))
        ), {dispatch: false});
    
    /**
     * Navigate to the new court form
     */
    public newCourt$ = createEffect(() =>
        this.actions.pipe(
            ofType(CourtsGenericsActions.newCourtButtonClicked),
            tap(() => this.courtService.navigate(['new'], true))
        ), {dispatch: false});

    /**
     * Navigate back to the root of the module
     */
    public courtBackButton$ = createEffect(() =>
        this.actions.pipe(
        ofType(CreateCourtActions.backButtonClicked),
        tap(() => this.courtService.navigateToRoot())
        ), {dispatch: false});
    
    /**
     * Create a new court
     */
    public createCourtSubmitted$ = createEffect(() =>
        this.actions.pipe(
            ofType(CreateCourtActions.saveButtonClicked),
            withLatestFrom(this.courtService.createFormValue$),
            switchMap(([{formId}, formValue]) =>
                this.courtService
                    .createCourt(formValue)
                    .pipe(
                        take(1),
                        map((court) => {
                            return {
                                formId: formId,
                                court: court
                            }
                        }))),
            tap(() => this.courtService.navigateToRoot()),
            map(({court}) => CreateCourtActions.courtCreated({court}))
        ));

    public editCourtFromNavigation$ = createEffect(() =>
        this.actions.pipe(
            ofType(routerNavigatedAction),
            switchMap(() => this.routerService.routerParams$.pipe(take(1))),
            filter(params => !!params['courtId']),
            switchMap((params) =>
                this.courtService
                    .getCourtById(params['courtId'])
                    .pipe(
                        take(1),
                        map((court) => EditCourtActions.courtLoaded({court: court})
                    )),
        )));

    public editCourtButtonClicked$ = createEffect(() =>
        this.actions.pipe(
            ofType(editRowButtonClicked),
            filter((action) => action.listId === COURT_LIST_ID),
            tap((action) => this.courtService.navigate(['edit', action.rowId], true)),
            switchMap((action) =>
                this.courtService
                    .getCourtById(action.rowId)
                    .pipe(
                        take(1),
                        map((court) => EditCourtActions.courtLoaded({court: court}))
                    )),
        ));

    public editCourtSubmitted$ = createEffect(() =>
        this.actions.pipe(
            ofType(EditCourtActions.saveButtonClicked),
            withLatestFrom(this.courtService.editFormValue$),
            switchMap(([{formId}, formValue]) =>
                this.courtService
                    .updateCourt(formValue)
                    .pipe(
                        take(1),
                        map((court) => {
                            return {
                                formId: formId,
                                court: court
                            }
                        }))),
            tap(() => this.courtService.navigateToRoot()),
            map(({court}) => EditCourtActions.courtUpdated({court}))
        ));
        
    constructor(
        private readonly actions: Actions,
        private readonly courtService: CourtService,
        private readonly routerService: RouterService
    ) {}
}