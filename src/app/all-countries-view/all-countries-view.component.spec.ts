import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesViewComponent } from './all-countries-view.component';

describe('AllCountriesViewComponent', () => {
  let component: AllCountriesViewComponent;
  let fixture: ComponentFixture<AllCountriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCountriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
