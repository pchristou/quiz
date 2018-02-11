import { ScoreRating } from "../../score-rating";

export interface Score {
    score : number,
    outOf : number,
    percentage : number,
    rating : ScoreRating
}