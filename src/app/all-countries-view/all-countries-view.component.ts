import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";
import { Location } from "@angular/common";

import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
  selector: "app-all-countries-view",
  templateUrl: "./all-countries-view.component.html",
  styleUrls: ["./all-countries-view.component.css"]
})
export class AllCountriesViewComponent implements OnInit {
  public currentRegion;
  public countriesOfCurrentRegion;
  public language;
  public currency_code = '';
  public currency_name = '';
  public language_name = '';
  public languageFilter = false;
  public currencyFilter = false;
  public countriesBasedOnCurrencies;
  public search = '';

  constructor(
    public _route: ActivatedRoute,
    public http: HttpService,
    public location: Location,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {

    console.log("AllCountriesViewComponent constructor called");
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log("AllCountriesViewComponent ngoninit called");
    this.currentRegion = this._route.snapshot.paramMap.get("current_region");
    console.log(this.currentRegion);

    this._route.queryParams.subscribe(params => {
      if (params["currency_code"]) {
        this.currencyFilter = true;
        this.getCurrencyBasedCountries(params["currency_code"], params['currency_name']);
      } else if (params["language_code"]) {
        this.languageFilter = true;
        this.getLanguageBasedCountries(params["language_code"], params['language_name']);
      } else {
        this.getAllCountries();
      }
    }); // queryParams subscribe ends/
  } // ngOnInit ends

  public getAllCountries() {
      this.toastr.warning(`Going to ${this.currentRegion}`,'Buckle Up !!', {'toastLife': '2000'}); 
      setTimeout(() => {
              this.http
                .getAllCountries(this.currentRegion)
                .subscribe(data => {
                  this.countriesOfCurrentRegion = data;
                  console.log("Received Data");
                  console.log(this.countriesOfCurrentRegion);
                });
      }, 1000);
  }

  public getCurrencyBasedCountries(currencyCodeParams, currencyNameParams) { 
    this.http
      .getCurrencyBasedCountries(currencyCodeParams)
      .subscribe(data => {
        this.countriesOfCurrentRegion = data;
        this.toastr.success( `${currencyNameParams}`, 'Currency Filter Applied!', {'toastLife': '2000'}); 
        this.currencyFilter = false;
      });
  }

  public getLanguageBasedCountries(langCodeParams, langNameParams) {
    this.http
      .getLanguageBasedCountries(langCodeParams)
      .subscribe(data => {
        this.countriesOfCurrentRegion = data;
        this.toastr.success( `${langNameParams} Language`, 'Language Filter Applied!', {'toastLife': '2000'}); 
        this.languageFilter = false;
      });
  }

  // goback() method definition.
  public goBackToPreviousLocation() {
    this.location.back();
  }
}
