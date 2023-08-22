import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VALUATIONComponent } from './valuation.component';

describe('VALUATIONComponent', () => {
  let component: VALUATIONComponent;
  let fixture: ComponentFixture<VALUATIONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VALUATIONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VALUATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
