import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UiActionTypes {
    LOADING_START = '[Ui] LOADING_START',
    LOADING_END = '[Ui] LOADING_END'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class LoadingStartAction implements Action {
    readonly type = UiActionTypes.LOADING_START;
}

export class LoadingEndAction implements Action {
    readonly type = UiActionTypes.LOADING_END;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UiActions
                        = LoadingStartAction
                        | LoadingEndAction;
