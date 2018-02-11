export interface Question {
    id : number; // so we don't ask same question more than once
    question : string;
    answer : boolean;
}