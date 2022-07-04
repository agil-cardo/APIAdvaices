import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://api.adviceslip.com/advice'

  handleError(error: HttpErrorResponse) {
    let message = 'unknow error'
    if (error.error instanceof ErrorEvent) {
      message = "Error Code: " + error.message
    } else
    message = "Error Code: " + error.status + "\n message : " + error.message

      console.log(message);
      return throwError(message);
      
  }

  public getAdvice() {
    return this.http.get(this.apiUrl).pipe(retry(3), catchError(this.handleError));
  }

  // public getAdviceById(id: number) {
  //   return this.http.get(this.apiUrl + '/' + id).pipe(retry(3), catchError(this.handleError));
  // }
}
