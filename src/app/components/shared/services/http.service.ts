import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(this.apiUrl + url, { params });
      }

  post(url: string, payload: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, payload);
       }

}
