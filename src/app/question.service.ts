import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private answerBaseUrl = 'http://localhost:8081/api/question';

  constructor(private http: HttpClient) { }


  getQuestions(): Observable<any> {
    return this.http.get(this.answerBaseUrl);
  }
}
