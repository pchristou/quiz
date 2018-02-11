import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { Question } from '../../question/question.model';
import { QuestionService } from '../../question/question-service';

import * as fromRoot from '../reducer'
import * as questionActions from './question.action'

@Injectable()
export class QuestionEffects {

    constructor(private actions$: Actions, private questionService : QuestionService, private store : Store<fromRoot.State>) {}

    @Effect() name$: Observable<Action> = this.actions$.ofType(questionActions.QuestionActionTypes.LOAD_QUESTION).pipe
    (
     switchMap(action => {

            console.log('load Q action', action);

            let askedQuestions = [];
            this.store.pipe(select(fromRoot.selectAskedQuestions)).subscribe((_askedQuestions : Array<Question>) => {
                askedQuestions = _askedQuestions;
            });
            
            return this.questionService.getJSON(askedQuestions).pipe(
                map(question => new questionActions.LoadQuestionSuccessAction(question))
            )
            
        })
    );

    @Effect() start$: Observable<Action> = this.actions$.ofType(questionActions.QuestionActionTypes.NUMBER_OF_QUESTIONS).pipe
    (
     switchMap(action => {

            return this.questionService.getQuestionCount().pipe(
                map(questionCount => {
                    console.log('COUNTTTT', questionCount); 
                    return new questionActions.NumberOfQuestionsSuccessAction(questionCount)
                })
            )
            
        })
    );
    
}