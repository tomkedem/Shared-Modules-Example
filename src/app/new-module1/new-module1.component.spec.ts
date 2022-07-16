import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModule1Component } from './new-module1.component';

describe('NewModule1Component', () => {
  let component: NewModule1Component;
  let fixture: ComponentFixture<NewModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewModule1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
