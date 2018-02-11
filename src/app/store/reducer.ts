import {
    Action,
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as score from './score/score.reducer';
  import * as question from './question/question.reducer';
import { GameStateActionTypes } from './game-state.action';
  
export interface State {
    score : score.State,
    question : question.State
}

export const reducers: ActionReducerMap<State> = {
    score: score.reducer,
    question: question.reducer
};

export function clearState(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: Action): State {
      
        if (action.type === GameStateActionTypes.CLEAR_STATE) {
        state = undefined;       
      }
      return reducer(state, action);
    };
  }

export const metaReducers: MetaReducer<State>[] = [clearState];

export const scoreFeature = (state: State) => state.score;
export const selectFeatureScore = createSelector(scoreFeature, (state: score.State) => state.score);

export const questionFeature = (state: State) => state.question;
export const selectCurrentQuestion = createSelector(questionFeature, (state: question.State) => state.current_question);
export const selectQuestionCount = createSelector(questionFeature, (state: question.State) => state.question_count);

// ensures we're not asking the player the same question
export const selectAskedQuestions = createSelector(questionFeature, (state: question.State) => state.asked_questions);

export const selectCorrectAnswersOrNot = createSelector(scoreFeature, (state: score.State) => state.answersCorrectOrNot);

export const getScoreObject = createSelector(scoreFeature, questionFeature, (scoreState: score.State, questionState : question.State) => { 
    let score = scoreState.score;
    let outOf = questionState.question_count;
    let percentage = 0;

    let correctAnswers = scoreState.answersCorrectOrNot.filter(answer => answer == true).length;
    // avoid divide by zero errors
    if(correctAnswers) {
      percentage = Math.round((correctAnswers / questionState.question_count) * 100);
    }

    return { score: score, outOf: outOf, percentage: percentage };
});