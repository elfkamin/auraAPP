import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMapaPage } from './tab-mapa.page';

describe('TabMapaPage', () => {
  let component: TabMapaPage;
  let fixture: ComponentFixture<TabMapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
