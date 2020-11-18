import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Auth} from 'aws-amplify';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  getToken(): Observable<string> {
    return from(Auth.currentSession()).pipe(map(session => {
      return session.getAccessToken().getJwtToken();
    }));
  }

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      Authorization: ''
    };

    // Add a HeaderRequest Unique Request Id
    const requestBody = request.body;
    if (request.method === 'PUT' || request.method === 'POST') {
      requestBody.requestHeader = {
        requestId: this.uuidv4()
      };
    }

    return this.getToken().pipe(mergeMap((token) => {
      headersConfig.Authorization = token;
      request = request.clone({
        setHeaders: headersConfig,
        body: JSON.stringify(requestBody)
      });
      return next.handle(request);
    }));
  }

  /**
   *  This function will generate Unique RequestId Number.
   */
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise
      const r = (Math.random() * 16) | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
