import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Court, CreateCourt } from "../../shared";
import * as courtSelectors from '../state/court.selectors';
import { NavigationService } from "../../../navigation.service";

@Injectable({
    providedIn: 'root'
})
export class CourtService {
    private apiEndpoint = 'http://localhost:5018/api/court/';
    public courtListLoaded$ = this.store.select(courtSelectors.getCourtsLoaded);
    public courtsList$ = this.store.select(courtSelectors.getCourts);
    public currentCourt$ = this.store.select(courtSelectors.getCurrentCourt);
    public createForm$ = this.store.select(courtSelectors.getCreateForm);
    public createFormValue$ = this.store.select(courtSelectors.getCreateFormValue);
    public editForm$ = this.store.select(courtSelectors.getEditForm);
    public editFormValue$ = this.store.select(courtSelectors.getEditFormValue);
    constructor(
        private store: Store,
        private httpClient: HttpClient,
        private navigationService: NavigationService) {}

    public getCourts() {
        return this.httpClient.get<Court[]>(this.apiEndpoint + 'getCourts');
    }

    public getCourtById(id: string) {
        return this.httpClient.get<Court>(this.apiEndpoint + 'getCourtById/' + id);
    }

    public createCourt(data: CreateCourt) {
        return this.httpClient.post<Court>(this.apiEndpoint + 'createCourt', data);
    }

    public updateCourt(data: Court) {
        return this.httpClient.put<Court>(this.apiEndpoint + 'updateCourt', data);
    }

    public dispatch(action: Action){
        this.store.dispatch(action);
    }

    public navigate(url: string[], isRelative: boolean = false){
        this.navigationService.navigate(url, isRelative);
    }

    public navigateToRoot() {
        this.navigate(['courts'], false);
    }
}