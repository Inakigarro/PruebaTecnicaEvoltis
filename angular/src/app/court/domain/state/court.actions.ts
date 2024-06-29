import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Court } from "../../shared";

export const CourtsGenericsActions = createActionGroup({
    source: 'Courts',
    events: {
        'Init': emptyProps(),
        'Court List Loaded': props<{list: Court[]}>(),
        'New Court Button Clicked': emptyProps(),
        'Edit Court Button Clicked': props<{listId: string, courtId: string}>(),
    }
});

export const CreateCourtActions = createActionGroup({
    source: 'CreateCourtForm',
    events: {
        'Back Button Clicked': emptyProps(),
        'Reset Button Clicked': emptyProps(),
        'Cancel Button Clicked': emptyProps(),
        'Save Button Clicked': props<{formId: string}>(),
        'Court Created': props<{court: Court}>(),
    }
});

export const EditCourtActions = createActionGroup({
    source: 'EditCourtForm',
    events: {
        'Court Loaded': props<{court: Court}>(),
        'Back Button Clicked': emptyProps(),
        'Reset Button Clicked': emptyProps(),
        'Cancel Button Clicked': emptyProps(),
        'Save Button Clicked': props<{formId: string}>(),
        'Court Updated': props<{court: Court}>(),
    }
});