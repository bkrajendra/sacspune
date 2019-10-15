import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCriteriaComponent } from './age-criteria.component';

describe('AgeCriteriaComponent', () => {
  let component: AgeCriteriaComponent;
  let fixture: ComponentFixture<AgeCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
