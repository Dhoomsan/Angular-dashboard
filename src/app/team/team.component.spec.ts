import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Team } from './team.component';

describe('TeamComponent', () => {
  let component: Team;
  let fixture: ComponentFixture<Team>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
