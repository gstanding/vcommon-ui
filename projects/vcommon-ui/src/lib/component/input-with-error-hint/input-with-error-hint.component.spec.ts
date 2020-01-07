import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithErrorHintComponent } from './input-with-error-hint.component';

describe('InputWithErrorHintComponent', () => {
  let component: InputWithErrorHintComponent;
  let fixture: ComponentFixture<InputWithErrorHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithErrorHintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithErrorHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
