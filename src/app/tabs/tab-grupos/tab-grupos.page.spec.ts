import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabGruposPage } from './tab-grupos.page';

describe('TabGruposPage', () => {
  let component: TabGruposPage;
  let fixture: ComponentFixture<TabGruposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
