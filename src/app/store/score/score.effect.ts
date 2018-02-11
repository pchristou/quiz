import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ScoreActionTypes } from './score.action';

import * as fromRoot from '../reducer'

import {
    debounceTime,
    map,
    switchMap,
    skip,
    takeUntil,
    catchError,
  } from 'rxjs/operators';
import { Question } from '../question/question.model';

import * as scoreActions from './score.action';

@Injectable()
export class ScoreEffects {
    
    constructor(private actions$: Actions, private store : Store<fromRoot.State>) {}

}
