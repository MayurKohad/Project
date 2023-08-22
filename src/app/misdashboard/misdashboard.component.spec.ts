import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MISDashboardComponent } from './misdashboard.component';

describe('MISDashboardComponent', () => {
  let component: MISDashboardComponent;
  let fixture: ComponentFixture<MISDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MISDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MISDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
