import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable()
export class ApiService {

  apiBaseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  /**
   * Use to hit GET http request with Api path and header request
   * @param path
   */
  get(path: string): Observable<any> {
    return this.http.get(this.apiBaseUrl + path, {headers: this.setHeaders()});
  }

  /**
   * Use to hit POST http request with Api path and header request
   * @param path
   */
  post(path: string, body: any): Observable<any> {
    if (path.indexOf('login') > 0 || path.indexOf('forgotPassword') > 0) {
      return this.http.post(this.apiBaseUrl + path, body);
    }
    return this.http.post(this.apiBaseUrl + path, body, {headers: this.setHeaders()});
  }

  /**
   * Use to hit PUT http request with Api path and header request
   * @param path
   */
  put(path: string, body: any): Observable<any> {
    return this.http.put(this.apiBaseUrl + path, body, {headers: this.setHeaders()});
  }

  /**
   * Used to setHeader in Request
   */
  private setHeaders(): HttpHeaders {
    const headersConfig = {};
    return new HttpHeaders(headersConfig);
  }
}
