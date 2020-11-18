import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../base-services/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class KycVerificationService {

  constructor(private apiService: ApiService) {
  }

  public verifyIdProof(verificationData): Observable<any> {
    return this.apiService.post('idProofVerification', verificationData);
  }

  public verifyAddressProof(verificationData): Observable<any> {
    return this.apiService.post('addressProofVerification', verificationData);
  }

  public checkKycStatus(data): Observable<any> {
    return this.apiService.post('checkKyc', data);
  }
}
