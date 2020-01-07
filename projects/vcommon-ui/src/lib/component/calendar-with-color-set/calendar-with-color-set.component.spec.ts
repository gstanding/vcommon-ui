import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWithColorSetComponent } from './calendar-with-color-set.component';

describe('CalendarWithColorSetComponent', () => {
  let component: CalendarWithColorSetComponent;
  let fixture: ComponentFixture<CalendarWithColorSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWithColorSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWithColorSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
