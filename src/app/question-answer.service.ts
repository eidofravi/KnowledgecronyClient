import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionAnswer } from './questionAnswer';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {


  private answerBaseUrl = 'http://localhost:8081/api/createQuestionWithAnswer';

  constructor(private http: HttpClient) { }


  createQuestionWithAnswer(questionAnswer: Object): Observable<Object> {
    return this.http.post(`${this.answerBaseUrl}`, questionAnswer);
  }

}
