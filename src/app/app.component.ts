import { Component } from '@angular/core';
import { QuestionService } from './store/question/question.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Question } from './store/question/question.model';
import { Observable } from 'rxjs/Rx';

// ACTIONS
import { ScoreActionTypes } from './store/score/score.action';
import { QuestionActionTypes } from './store/question/question.action';
import { GameStateActionTypes } from './store/game-state.action';

import { Store, select } from '@ngrx/store';
import * as fromRoot from './store/reducer'

import { MatDialog } from '@angular/material';

import 'rxjs/add/operator/take';
import { ScoreDialogComponent } from './score-dialog.component';
import { ScoreService } from './score-service';
import { ScoreRating } from './score-rating';
import { Score } from './store/score/score.model';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  question$ : Observable<Question>;
  questionCount$ : Observable<number>;
  answerCorrectOrNot$ : Observable<Array<boolean>>;

  constructor(
    public scoreService : ScoreService, 
    public questionService : QuestionService, 
    private store : Store<fromRoot.State>,
    public dialog: MatDialog,
    public viewRef : ViewContainerRef 
  ) {}

  ngOnInit() {

    this.store.dispatch({ type: QuestionActionTypes.NUMBER_OF_QUESTIONS });
    this.questionCount$ = this.store.pipe(select(fromRoot.selectQuestionCount));
    
    this.getQuestion();
    this.question$ = this.store.pipe(select(fromRoot.selectCurrentQuestion));
    this.answerCorrectOrNot$ = this.store.pipe(select(fromRoot.selectCorrectAnswersOrNot));
  }

  getQuestion() {
    this.viewRef.clear();
    this.store.dispatch({ type: QuestionActionTypes.LOAD_QUESTION });
    this.viewRef.clear();
  }

  answerSelected(answer : any){

    let answersGiven = 0;
    this.answerCorrectOrNot$.subscribe(arr => {
      answersGiven = arr.length;
    });

    this.store.pipe(select(fromRoot.selectCurrentQuestion)).take(1).subscribe((question : Question) => {
        // look at improving this model?
        this.store.dispatch({ type: ScoreActionTypes.ANSWER_GIVEN, payload: { question: question, answer: answer } });
    });

    let outOf = 0;
    this.questionCount$.subscribe(_outOf => {
      outOf = _outOf;
    });

    if(answersGiven < outOf) {

      // should be in an effect
      this.getQuestion();

    } else {
      this.openSummaryBox();
    }
    
  }

  openSummaryBox() {

    let scoreObject : Score = null;
    this.store.pipe(select(fromRoot.getScoreObject)).subscribe((_scoreObject : any) => {
      scoreObject = _scoreObject;
    })

    this.scoreService.getScoreRating(scoreObject.percentage).subscribe((scoreRating : ScoreRating) => {
      scoreObject.rating = scoreRating;
      return scoreRating;
    },
    (error) => {},
    () => {

      let dialog = this.dialog.open(
        ScoreDialogComponent, 
        {  
          disableClose: true,
          data: scoreObject
        }
      );
  
      dialog.beforeClose().subscribe(() => {
  
        this.store.dispatch({ type: GameStateActionTypes.CLEAR_STATE });
        this.ngOnInit();
  
      }); 

    })
  }
}