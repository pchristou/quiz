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

import { Question } from './question.model'

@Injectable()
export class QuestionService {
    
    constructor(private http: HttpClient) {}

    public getJSON(askedQuestions : Array<Question>): Observable<Question> {
        
        return this.http.get("./assets/questions.json")
        // mergeAll() returns each item one at a time
                .map(((res : Array<Question>) => 
                    { 
   
                        let unaskedQuestions : Array<Question> = res.filter((question : Question) => {
                            let found = false;
                            for(let askedQuestion of askedQuestions) {
                                
                                if(askedQuestion.id == question.id) {
                                    found = true;
                                    break;
                                }
                            }

                            if(found) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        
                        if(unaskedQuestions.length) {
                            // return a random question from the remaining list
                            return unaskedQuestions[Math.floor(Math.random() * unaskedQuestions.length)];
                        } else {
                            return null;
                        }
                        
                    }))
                .catch((error:any, caught:Observable<any>) => { return error; });
    }

    public getQuestionCount(): Observable<number> {
        
        return this.http.get("./assets/questions.json")
                .switchMap(((res : Array<Question>) => 
                    { 
   
                        return Observable.of(res.length);
                        
                    }))
                .catch((error:any, caught:Observable<any>) => { return error; });
    }
}