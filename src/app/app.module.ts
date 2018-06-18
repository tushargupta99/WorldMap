import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpService } from "./http.service";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesViewComponent } from './all-countries-view/all-countries-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { FilterPipe } from './filter.pipe';

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "all-countries-view/:current_region", component: AllCountriesViewComponent },
  { path: "all-countries-view/:currency_code", component: AllCountriesViewComponent },
  { path: "single-country-view/:current_country", component: SingleCountryViewComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HomeComponent,
    AllCountriesViewComponent,
    SingleCountryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
