import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'score-tracker',
    templateUrl: './score-tracker.component.html',
    styleUrls: ['./score-tracker.component.scss']
})
export class ScoreTrackerComponent implements OnInit {

    @Input() answerIsCorrect : Array<boolean>;
    @Input() numberOfQuestions : number;

    Arr = Array;

    constructor() { }

    ngOnInit() { }
}