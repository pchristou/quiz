import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum GameStateActionTypes {
    CLEAR_STATE = '[Game State] CLEAR_STATE'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class ClearStateAction implements Action {
    readonly type = GameStateActionTypes.CLEAR_STATE;

    constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type QuestionActions
                        = ClearStateAction;