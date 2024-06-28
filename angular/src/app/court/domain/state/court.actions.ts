import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Court } from "../../shared";

export const CourtsGenericsActions = createActionGroup({
    source: 'Courts',
    events: {
        'Init': emptyProps(),
        'Court List Loaded': props<{list: Court[]}>(),
        'New Court Button Clicked': emptyProps(),
        'Edit Court Button Clicked': props<{listId: string, data: Court}>(),
    }
})