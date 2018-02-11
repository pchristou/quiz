import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// not expected to work until Angular v6 so we stick to old way of importing rxjs vars for now
//import { map, filter, mergeAll, catchError } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll'; // unpacks the array into single items
import 'rxjs/add/operator/catch';
import { ScoreRating } from './score-rating';

@Injectable()
export class ScoreService {
    
    constructor(private http: HttpClient) {}

    public getScoreRating(score : number): Observable<ScoreRating> {
        
        return this.http.get("./assets/score-rating.json")
                .map(((res : Array<ScoreRating>) => 
                    { 
   
                        let obj : Array<ScoreRating> = res.filter((scoreRating : ScoreRating) => {
                            if(score >= (scoreRating.low) && score <= (scoreRating.high)) {
                                return scoreRating;
                            }
                        });
      
                        if(obj.length) {
                            // return the ranking from the list but only if one exists
                            return obj[0];
                        } else {
                            return null;
                        }
                        
                    }))
                .catch((error:any, caught:Observable<any>) => { return error; });
    }
}