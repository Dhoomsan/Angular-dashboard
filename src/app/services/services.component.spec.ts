import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Services } from './services.component';

describe('ServicesComponent', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
