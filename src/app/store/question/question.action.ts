import { Action } from '@ngrx/store';
import { Question } from './question.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum QuestionActionTypes {
    ADD_QUESTION_ID = '[Question] ADD_QUESTION_ID',
    LOAD_QUESTION = '[Question] LOAD_QUESTION',
    LOAD_QUESTION_SUCCESS = '[Question] LOAD_QUESTION_SUCCESS',
    LOAD_QUESTION_FAILED = '[Question] LOAD_QUESTION_FAILED',
    NUMBER_OF_QUESTIONS = '[Question] NUMBER_OF_QUESTIONS',
    NUMBER_OF_QUESTIONS_SUCCESS = '[Question] NUMBER_OF_QUESTIONS_SUCCESS',
    NUMBER_OF_QUESTIONS_FAILED = '[Question] NUMBER_OF_QUESTIONS_FAILED'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class AddQuestionIDAction implements Action {
    readonly type = QuestionActionTypes.ADD_QUESTION_ID;

    constructor(public payload: Array<Question>) { }
}

export class LoadQuestionAction implements Action {
    readonly type = QuestionActionTypes.LOAD_QUESTION;

    constructor() { }
}

export class LoadQuestionSuccessAction implements Action {
    readonly type = QuestionActionTypes.LOAD_QUESTION_SUCCESS;

    constructor(public payload: Question) { }
}

export class LoadQuestionFailedAction implements Action {
    readonly type = QuestionActionTypes.LOAD_QUESTION_FAILED;

    constructor() { }
}

export class NumberOfQuestionsAction implements Action {
    readonly type = QuestionActionTypes.NUMBER_OF_QUESTIONS;

    constructor() { }
}

export class NumberOfQuestionsSuccessAction implements Action {
    readonly type = QuestionActionTypes.NUMBER_OF_QUESTIONS_SUCCESS;

    constructor(public payload : number) { }
}

export class NumberOfQuestionsFailedAction implements Action {
    readonly type = QuestionActionTypes.NUMBER_OF_QUESTIONS_FAILED;

    constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type QuestionActions
                        = AddQuestionIDAction
                        | LoadQuestionAction
                        | LoadQuestionSuccessAction
                        | LoadQuestionFailedAction
                        | NumberOfQuestionsAction
                        | NumberOfQuestionsSuccessAction
                        | NumberOfQuestionsFailedAction;