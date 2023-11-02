import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsSocialComponent } from './maps-social.component';

describe('MapsSocialComponent', () => {
  let component: MapsSocialComponent;
  let fixture: ComponentFixture<MapsSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
