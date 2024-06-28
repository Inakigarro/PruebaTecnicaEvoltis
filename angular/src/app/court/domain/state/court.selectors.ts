import { createFeatureSelector, createSelector } from "@ngrx/store";
import { COURT_FEATURE_KEY, CourtState, courtsAdapter } from "./court.reducer";

const adapterSelectors = courtsAdapter.getSelectors();
export const getCourtsState = createFeatureSelector<CourtState>(COURT_FEATURE_KEY);

export const getCourtsLoaded = createSelector(
    getCourtsState,
    (state) => state.courtsLoaded
);

export const getCourts = createSelector(
    getCourtsState,
    adapterSelectors.selectAll
);

export const getCurrentCourt = createSelector(
    getCourtsState,
    (state) => state.currentCourt
);