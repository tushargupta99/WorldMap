import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Location } from "@angular/common";
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
  public currentCountry;
  public currentCountryData;
  public currentRegion;
  public countriesOfCurrentRegion;
  public language;
  public languageFilter = false;
  public currencyFilter = false;
  public countriesBasedOnCurrencies;

  constructor(public http: HttpService, public _route: ActivatedRoute, public location: Location, public toastr: ToastsManager, vcr:ViewContainerRef) { 
    console.log("Single Country View constructor Called");
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log('Single Country View ngOnInit Called');  
    this.currentCountry = this._route.snapshot.paramMap.get('current_country');
    console.log(this.currentCountry);

        this._route.queryParams.subscribe(params => {
      if (params["currency_code"]) {
        this.currencyFilter = true;
        this.getCurrencyBasedCountries(params["currency_code"]);

      } else if (params["language_code"]) {
        this.languageFilter = true;
        this.getLanguageBasedCountries(params["language_code"]);
        
      } else {
        this.getSingleCountry();
      }
    }); // queryParams subscribe ends/
  } // ngOnInit ends



  public getSingleCountry() {
    this.http.getSingleCountry(this.currentCountry)
      .subscribe(data => {
        this.currentCountryData = data;
        console.log("Received Data");
        console.log(this.currentCountryData);
    } );
  }

  public getCurrencyBasedCountries(currencyCodeParams) {
    let myResponse = this.http.getCurrencyBasedCountries(currencyCodeParams)
      .subscribe(data => {
        this.countriesOfCurrentRegion = data;
      });
    }
  
  public getLanguageBasedCountries(langCodeParams) {
    let myResponse = this.http.getLanguageBasedCountries(langCodeParams)
      .subscribe(data => {
        this.countriesOfCurrentRegion = data;
      });
    }


  public goBackToPreviousLocation() {
    this.toastr.info("Have A Nice Day.", "Thanks for your Visit", {toastLife:'1500'});
    setTimeout(() => {
      this.location.back();
    }, 2000);
  }
}
