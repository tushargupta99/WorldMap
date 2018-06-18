import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public regionList: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  public search='';
  

  constructor(public toastr:ToastsManager,vcr: ViewContainerRef) {
    console.log("HomeComponent constructor called");
    this.toastr.setRootViewContainerRef(vcr);
    
  }

  ngOnInit() {
    console.log("HomeComponent ngoninit called");
    this.toastr.success("", "Welcome to the World Map", {'toastLife': '2000'});
    
  }
}
