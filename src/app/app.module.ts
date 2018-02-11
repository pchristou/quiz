import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreTrackerComponent } from './score-tracker.component';
import { ScoreDialogComponent } from './score-dialog.component';

import { MaterialModule } from './material.module';
import { QuestionService } from './store/question/question.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromRoot from './store/reducer';
import { metaReducers } from './store/reducer';
import * as question from './store/question/question.reducer';

import { effects } from './store/effect';
import { Injector } from '@angular/core';
import { ScoreService } from './score-service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTrackerComponent,
    ScoreDialogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRoot.reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(), // for Chrome extension
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ScoreService,
    QuestionService
  ],
  entryComponents: [
    ScoreDialogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
