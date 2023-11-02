import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNavbarComponent } from './big-navbar.component';

describe('BigNavbarComponent', () => {
  let component: BigNavbarComponent;
  let fixture: ComponentFixture<BigNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
