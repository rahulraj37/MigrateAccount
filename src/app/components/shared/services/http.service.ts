import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://monacodelisa-node-express.cyclic.app/api';

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + url, { params });
      }

  post(url: string, payload: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, payload);
       }

}
