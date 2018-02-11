import { Action } from '@ngrx/store';
import { ScoreActions, ScoreActionTypes } from './score.action';
import { createSelector } from '@ngrx/store/src/selector';

export interface State {
  score : number,
  answersCorrectOrNot : Array<boolean>
}

const initialState: State = {
  score : 0,
  answersCorrectOrNot : []
};

export function reducer(state: State = initialState, action: ScoreActions) {

  switch (action.type) {
    case ScoreActionTypes.ANSWER_GIVEN:

    let answerCorrect = action.payload.question.answer == action.payload.answer;
    let score = state.score;

      // store asked IDs in array and increment score if correct
      return { ...state, 
        answersCorrectOrNot : [...state.answersCorrectOrNot, answerCorrect ],
        score : answerCorrect ? score += 1 : score }; 
         
    default:
      return state;
  }
}

export const getAnswersCorrectOrNot = (state: State) => state.answersCorrectOrNot;
export const getScore = (state: State) => state.score;