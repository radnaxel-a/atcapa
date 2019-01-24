import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyOverviewComponent } from './weekly-overview.component';

describe('WeeklyOverviewComponent', () => {
  let component: WeeklyOverviewComponent;
  let fixture: ComponentFixture<WeeklyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
