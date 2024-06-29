import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Court, CreateCourt } from '../../shared';
import { Action, createReducer, on } from '@ngrx/store';
import { CourtsGenericsActions, CreateCourtActions, EditCourtActions } from './court.actions';
import { FormGroupState, createFormGroupState, onNgrxForms, reset, setValue, updateGroup, validate } from 'ngrx-forms';

export const COURT_FEATURE_KEY = 'courts';
export const CREATE_COURT_FORM_ID = 'create-court-form';
export const EDIT_COURT_FORM_ID = 'edit-court-form';

export interface CourtState extends EntityState<Court> {
    courtsLoaded: boolean;
    currentCourt?: Court;
    createCourtForm: FormGroupState<CreateCourt>;
    editCourtForm: FormGroupState<Court>;
}

// Form Group State.
export const initialCreateCourtFormState = createFormGroupState<CreateCourt>(CREATE_COURT_FORM_ID, {
    number: 0,
    type: '',
});

export const initialEditCourtFormState = createFormGroupState<Court>(EDIT_COURT_FORM_ID, {
    id: '',
    number: 0,
    type: '',
});

export const validateCreateCourtForm = updateGroup<CreateCourt>({
    number: validate(value => !value ? { required: true } : {}),
    type: validate(value => !value ? { required: true } : {}),
})

export const validateEditCourtForm = updateGroup<Court>({
    id: validate(value => !value ? { required: true } : {}),
    number: validate(value => !value ? { required: true } : {}),
    type: validate(value => !value ? { required: true } : {}),
});

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
    createCourtForm: initialCreateCourtFormState,
    editCourtForm: initialEditCourtFormState,
});

const reducer = createReducer(
    initialState,
    onNgrxForms(),
    on(CourtsGenericsActions.courtListLoaded, (state, action) => ({
        ...courtsAdapter.setAll(action.list, state),
        courtsLoaded: true
    })),
    on(CreateCourtActions.saveButtonClicked, (state, action) => ({
        ...state,
        courtsLoaded: false
    })),
    on(CreateCourtActions.cancelButtonClicked, (state) => ({
        ...state,
        createCourtForm: resetCreateForm(state.createCourtForm)
    })),
    on(CreateCourtActions.resetButtonClicked, (state) => ({
        ...state,
        createCourtForm: resetCreateForm(state.createCourtForm)
    })),
    on(CreateCourtActions.courtCreated, (state, action) => ({
        ...courtsAdapter.upsertOne(action.court, state),
        createCourtForm: resetCreateForm(state.createCourtForm)
    })),
    on(EditCourtActions.courtLoaded, (state, action) => ({
        ...state,
        currentCourt: action.court,
        editCourtForm: setValue(state.editCourtForm, action.court)
    })),
    on(EditCourtActions.saveButtonClicked, (state, action) => ({
        ...state,
        courtsLoaded: false
    })),
    on(EditCourtActions.cancelButtonClicked, (state) => ({
        ...state,
        editCourtForm: resetEditForm(state.editCourtForm)
    })),
    on(EditCourtActions.resetButtonClicked, (state) => ({
        ...state,
        editCourtForm: resetEditForm(state.editCourtForm)
    })),
    on(EditCourtActions.courtUpdated, (state, action) => ({
        ...courtsAdapter.upsertOne(action.court, state),
        editCourtForm: resetEditForm(state.editCourtForm)
    }))
);

export function courtReducer(state: CourtState | undefined, action: Action) {
    return reducer(state, action);
}

function resetCreateForm(state: FormGroupState<CreateCourt>) {
    let formGroupState: FormGroupState<CreateCourt>;
    formGroupState = reset(state);
    return setValue(formGroupState, { number: 0, type: ''})
}

function resetEditForm(state: FormGroupState<Court>) {
    let formGroupState: FormGroupState<Court>;
    formGroupState = reset(state);
    return setValue(formGroupState, { id: '', number: 0, type: ''})
}