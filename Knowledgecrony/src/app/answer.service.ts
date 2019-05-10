import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private answerBaseUrl = 'http://localhost:8081/api/answer';

  constructor(private http: HttpClient) { }
  

  getAnswer(): Observable<any> {
  let id : number = 1;
    return this.http.get(this.answerBaseUrl);
  }

  //getCustomer(id: number): Observable<Object> {
 //   return this.http.get(`${this.baseUrl}/${id}`);
 // }


}
