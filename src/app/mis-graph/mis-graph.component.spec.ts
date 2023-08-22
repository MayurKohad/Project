import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisGraphComponent } from './mis-graph.component';

describe('MisGraphComponent', () => {
  let component: MisGraphComponent;
  let fixture: ComponentFixture<MisGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
