import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Score } from './store/score/score.model';

@Component({
    selector: 'score-dialog',
    template: 
    `    
        <div mat-dialog-content>

            <p style="font-size:20px;text-align:center">
                {{ data?.score }} / {{ data?.outOf }}
            </p>
            <p>
                <mat-progress-bar mode="determinate" [value]="data?.percentage"></mat-progress-bar>
            </p>
            <p style="text-align:center">
                <span style="font-size:18px">Your score makes you a...</span>
                <br><br><br>
                <span style="font-size:30px">{{ data?.rating?.name }}</span>
            </p>

            <div style="text-align:center">
                <img [src]="'./assets/images/' + data?.rating?.img">
            </div>
        </div>

        <div mat-dialog-actions align="center">
                <button mat-button (click)="dialogRef.close()" color="primary">AGAIN</button>
        </div>
    `
})
export class ScoreDialogComponent {

    @Input() dialog : MatDialog;

    constructor(@Inject(MAT_DIALOG_DATA) public data : Score, public dialogRef: MatDialogRef<ScoreDialogComponent>) { 
        console.log('data', this.data.rating);
    }
}