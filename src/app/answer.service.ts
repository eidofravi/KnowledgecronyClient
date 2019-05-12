import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private answerBaseUrl = 'http://localhost:8081/api/answer';

  constructor(private http: HttpClient) { }


  getAnswer(id : number): Observable<any> {
    return this.http.get(`${this.answerBaseUrl}/${id}`);
  }

  //getCustomer(id: number): Observable<Object> {
 //   return this.http.get(`${this.baseUrl}/${id}`);
 // }


}
