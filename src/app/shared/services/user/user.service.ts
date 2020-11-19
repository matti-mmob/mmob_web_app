import {Injectable} from '@angular/core';
import {ApiService} from '../base-services/api-client.service';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  public getUserByEmail(emailObject): Observable<any> {
    return this.apiService.post('me', emailObject);
  }

  public updateUser(user): Observable<any> {
    return this.apiService.post('user', user);
  }
}
