import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectTrackerComponent } from './defect-tracker.component';

describe('DefectTrackerComponent', () => {
  let component: DefectTrackerComponent;
  let fixture: ComponentFixture<DefectTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
