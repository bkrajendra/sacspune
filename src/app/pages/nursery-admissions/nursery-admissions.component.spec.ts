import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryAdmissionsComponent } from './nursery-admissions.component';

describe('NurseryAdmissionsComponent', () => {
  let component: NurseryAdmissionsComponent;
  let fixture: ComponentFixture<NurseryAdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseryAdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseryAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
