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

export const getCreateForm = createSelector(
    getCourtsState,
    (state) => state.createCourtForm
);

export const getCreateFormValue = createSelector(
    getCreateForm,
    (form) => form.value
);

export const getCreateFormNumberValue = createSelector(
    getCreateForm,
    (form) => form.value.number
);

export const getCreateFormTypeValue = createSelector(
    getCreateForm,
    (form) => form.value.type
);

export const getEditForm = createSelector(
    getCourtsState,
    state => state.editCourtForm
);

export const getEditFormValue = createSelector(
    getEditForm,
    form => form.value
);

export const getEditFormNumberValue = createSelector(
    getEditForm,
    form => form.value.number
);

export const getEditFormTypeValue = createSelector(
    getEditForm,
    form => form.value.type
);

export const getEditFormId = createSelector(
    getEditForm,
    form => form.value.id
);