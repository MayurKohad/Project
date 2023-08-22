import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationDataComponent } from './valuation-data.component';

describe('ValuationDataComponent', () => {
  let component: ValuationDataComponent;
  let fixture: ComponentFixture<ValuationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
