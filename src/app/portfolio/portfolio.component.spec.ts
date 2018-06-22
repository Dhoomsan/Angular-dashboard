import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portfolio ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
