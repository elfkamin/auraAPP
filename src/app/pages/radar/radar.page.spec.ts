import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadarPage } from './radar.page';

describe('RadarPage', () => {
  let component: RadarPage;
  let fixture: ComponentFixture<RadarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
