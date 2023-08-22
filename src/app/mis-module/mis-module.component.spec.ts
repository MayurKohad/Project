import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisModuleComponent } from './mis-module.component';

describe('MisModuleComponent', () => {
  let component: MisModuleComponent;
  let fixture: ComponentFixture<MisModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
