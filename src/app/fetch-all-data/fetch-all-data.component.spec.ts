import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllDataComponent } from './fetch-all-data.component';

describe('FetchAllDataComponent', () => {
  let component: FetchAllDataComponent;
  let fixture: ComponentFixture<FetchAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAllDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
