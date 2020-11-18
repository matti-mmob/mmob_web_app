import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KycFormService {

  public idProofFile;
  public additionalProofFile;
  public addressProofFile;

  constructor() {
  }
}
