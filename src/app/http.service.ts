import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import Observable to handle Observable response
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class HttpService {
  public region;

  constructor(public http: HttpClient) {
    console.log("HttpService  Constructor was called");
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //Region API Call.
  
  public getAllCountries(currentRegionParams): Observable<any> { // region is the parameter that will recieve currentRegion and add it along with URL
    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/region/${currentRegionParams}`);
    console.log('This is response returned from HTTP call');
    console.log(myResponse);
    return myResponse;
  }
  //SingleCountry API Call
  public getSingleCountry(currentCountryParams): Observable<any> {
    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/name/${currentCountryParams}`);
    console.log(myResponse);
    return myResponse;
  }
  //Currency API Call
  public getCurrencyBasedCountries(currencyCodeParams) {
    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/currency/${currencyCodeParams}`);
    console.log(myResponse);
    return myResponse;
  }
  //Langauge API Call
  public getLanguageBasedCountries(languageParams) {
    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/lang/${languageParams}`);
    console.log(myResponse);
    return myResponse;
  }
}
