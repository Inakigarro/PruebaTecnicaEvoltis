import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Court } from "../../shared";
import * as courtSelectors from '../state/court.selectors';

@Injectable({
    providedIn: 'root'
})
export class CourtService {
    private apiEndpoint = 'http://localhost:5018/api/court/';
    public courtListLoaded$ = this.store.select(courtSelectors.getCourtsLoaded);
    public courtsList$ = this.store.select(courtSelectors.getCourts);
    public currentCourt$ = this.store.select(courtSelectors.getCurrentCourt);
    
    constructor(
        private store: Store,
        private httpClient: HttpClient) {}

    public getCourts() {
        return this.httpClient.get<Court[]>(this.apiEndpoint + 'getCourts');
    }
}