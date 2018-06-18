import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCountryViewComponent } from './single-country-view.component';

describe('SingleCountryViewComponent', () => {
  let component: SingleCountryViewComponent;
  let fixture: ComponentFixture<SingleCountryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCountryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
