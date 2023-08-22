import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledashboardComponent } from './tabledashboard.component';

describe('TabledashboardComponent', () => {
  let component: TabledashboardComponent;
  let fixture: ComponentFixture<TabledashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
