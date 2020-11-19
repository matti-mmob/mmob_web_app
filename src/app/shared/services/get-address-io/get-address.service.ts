import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAddressService {

  apiBaseUrl = 'https://api.getAddress.io/';
  // assign API Key
  apiKey = '8iNCZkzgDEyT4rRBDhR6jg29209';
  requestFormat = '';
  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
    this.requestFormat = '?api-key=' + this.apiKey + '&expand=true';
  }

  findByPostCode(postCode) {
    // const data = {
    //   postcode: 'E14 5AB',
    //   latitude: 51.5046194,
    //   longitude: -0.0187023,
    //   addresses: [
    //     {
    //       formatted_address: [
    //         'Banfico Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //       building_name: '',
    //       sub_building_name: 'Banfico Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Banfico Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canada Square (Pavilion) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //       building_name: '',
    //       sub_building_name: 'Canada Square (Pavilion) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canada Square (Pavilion) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf (North Quay) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf (North Quay) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf (North Quay) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Contractors (Crossrail) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Contractors (Crossrail) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Contractors (Crossrail) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Contractors (Ds1) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Contractors (Ds1) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Contractors (Ds1) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Contractors (Ds6) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Contractors (Ds6) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Contractors (Ds6) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Contractors (Ds8) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Contractors (Ds8) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Contractors (Ds8) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Finance Ii Plc',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Finance Ii Plc',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Finance Ii Plc',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Canary Wharf Investments (Rsnq) Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Canary Wharf Investments (Rsnq) Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Canary Wharf Investments (Rsnq) Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Cw Lending Ii Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Cw Lending Ii Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Cw Lending Ii Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Darius Alus & Vodka Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Darius Alus & Vodka Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Darius Alus & Vodka Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     },
    //     {
    //       formatted_address: [
    //         'Derivitec Ltd',
    //         '1 Canada Square',
    //         '',
    //         'London',
    //         ''
    //       ],
    //       thoroughfare: 'Canada Square',
    //       isSelected: false,
    //
    //       building_name: '',
    //       sub_building_name: 'Derivitec Ltd',
    //       sub_building_number: '',
    //       building_number: '1',
    //       line_1: 'Derivitec Ltd',
    //       line_2: '1 Canada Square',
    //       line_3: '',
    //       line_4: '',
    //       locality: '',
    //       town_or_city: 'London',
    //       county: '',
    //       district: 'Tower Hamlets',
    //       country: 'England'
    //     }
    //   ]
    // };
    // return of(data);
    return this.get('find/' + postCode + this.requestFormat);
  }

  findByPostCodeAndHouseAdddress(postCode, houseCode) {
    return this.get('find/' + postCode + '/' + houseCode + this.requestFormat);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}${path}`, {params}).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
