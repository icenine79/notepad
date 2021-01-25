import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNotepadComponent } from './base-notepad.component';

describe('BaseNotepadComponent', () => {
  let component: BaseNotepadComponent;
  let fixture: ComponentFixture<BaseNotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNotepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
