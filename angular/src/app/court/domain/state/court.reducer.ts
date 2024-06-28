import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Court } from '../../shared';
import { Action, createReducer, on } from '@ngrx/store';
import { CourtsGenericsActions } from './court.actions'
export const COURT_FEATURE_KEY = 'courts';

export interface CourtState extends EntityState<Court> {
    courtsLoaded: boolean;
    currentCourt?: Court;
}

export function selectById(a: Court): string {
    return a.id;
}

export function sortByType(a: Court, b: Court): number {
    return a.type.localeCompare(b.type);
}

export const courtsAdapter: EntityAdapter<Court> = createEntityAdapter<Court>({
    selectId: selectById,
    sortComparer: sortByType
});

export const initialState = courtsAdapter.getInitialState({
    courtsLoaded: false,
});

const reducer = createReducer(
    initialState,
    on(CourtsGenericsActions.courtListLoaded, (state, action) => ({
        ...courtsAdapter.setAll(action.list, state),
        courtsLoaded: true
    })),
    on(CourtsGenericsActions.editCourtButtonClicked, (state, action) => ({
        ...state,
        currentCourt: action.data
    })),
);

export function courtReducer(state: CourtState | undefined, action: Action) {
    return reducer(state, action);
}