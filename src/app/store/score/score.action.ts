import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ScoreActionTypes {
    ANSWER_GIVEN = '[Score] ANSWER GIVEN',
    CORRECT_ANSWER_GIVEN = '[Score] CORRECT ANSWER GIVEN',
    WRONG_ANSWER_GIVEN = '[Score] WRONG ANSWER GIVEN'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class AnswerGivenAction implements Action {
    readonly type = ScoreActionTypes.ANSWER_GIVEN;

    // change the payload any
    constructor(public payload : any) { }
}

export class CorrectAnswerGivenAction implements Action {
    readonly type = ScoreActionTypes.CORRECT_ANSWER_GIVEN;

    constructor() { }
}

export class WrongAnswerGivenAction implements Action {
    readonly type = ScoreActionTypes.WRONG_ANSWER_GIVEN;

    constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ScoreActions
                        = AnswerGivenAction
                        | CorrectAnswerGivenAction
                        | WrongAnswerGivenAction;
