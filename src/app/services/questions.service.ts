import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionData } from '../models/questionData';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiData } from '../models/apiData';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private baseURL: string = "";
  apiData: ApiData | any;

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = environment.triviaAPI;
  }

  getQuestions(amount: number): Observable<ApiData> {
    this.apiData = this
      .http
      .get<ApiData>(`${this.baseURL}?amount=${amount}`);
      return this.apiData;
  }
}
