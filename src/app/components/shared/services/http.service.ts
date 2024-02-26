import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://monacodelisa-node-express.cyclic.app/api';

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + url, { params });
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  post(url: string, payload: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, payload);
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   if (error.status === 0) {
  //     console.error('A client-side or network error occurred:', error.error);
  //   } else {
  //     console.error(`Backend returned code ${error.status}, body was:`, error.error);
  //   }
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
