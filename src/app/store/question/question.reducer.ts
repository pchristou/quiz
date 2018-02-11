import { Action } from '@ngrx/store';
import { Question } from './question.model';
import { QuestionActions, QuestionActionTypes, LoadQuestionAction, LoadQuestionSuccessAction, LoadQuestionFailedAction } from './question.action';

export interface State {
    current_question : Question;
    asked_questions : Array<Question>;
    question_count : number;
};

// export this since we override the starting state of number of questions in root
export const initialState: State = {
    current_question : null,
    asked_questions : [],
    question_count : 0
};

export function reducer(state = initialState, action: QuestionActions): State {

    switch (action.type) {
        case QuestionActionTypes.LOAD_QUESTION: {

            return { ...state };
        }

        case QuestionActionTypes.LOAD_QUESTION_SUCCESS: {

            return { ...state, 
                current_question: action.payload, 
                asked_questions: [...state.asked_questions, action.payload ] 
            };
        }

        case QuestionActionTypes.NUMBER_OF_QUESTIONS: {

            return state;
        }

        case QuestionActionTypes.NUMBER_OF_QUESTIONS_SUCCESS: {
            // result from effect comes from here and placed in state
            return { ...state, 
                question_count: action.payload 
            };        
        }

        case QuestionActionTypes.NUMBER_OF_QUESTIONS_FAILED: {

            return state;
        }

        default: {
            return state;
        }
    }
}

export const getCurrentQuestion = (state: State) => state.current_question;
export const getAskedQuestions = (state: State) => state.asked_questions;
export const getQuestionCount = (state: State) => state.question_count;