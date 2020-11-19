import {Injectable} from '@angular/core';
import {StorageConstants} from '../../constant/storage-constants';
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // private storage = sessionStorage;
  private storage = localStorage;

  constructor() {

  }

  /**
   * This method is use for get Access Token from local storage data.
   */
  getAccessToken(): any {
    return this.storage.getItem(StorageConstants.X_ACCESS_TOKEN);
  }

  /**
   * This method is use for set Access Token to local storage data.
   * @param {data:any}
   */
  setAccessToken(data: any) {
    return this.storage.setItem(StorageConstants.X_ACCESS_TOKEN, data);
  }

  /*Clear Local storage for logout*/
  clearLocalStorage() {
    this.storage.removeItem(StorageConstants.X_ACCESS_TOKEN);
  }

  setEmailAddress(email: string) {
    this.storage.setItem(StorageConstants.X_EMAIL, email);
  }

  getEmailAddress(): string {
    return this.storage.getItem(StorageConstants.X_EMAIL);
  }
}
