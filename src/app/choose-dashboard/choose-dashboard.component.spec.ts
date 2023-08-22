import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDashboardComponent } from './choose-dashboard.component';

describe('ChooseDashboardComponent', () => {
  let component: ChooseDashboardComponent;
  let fixture: ComponentFixture<ChooseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
