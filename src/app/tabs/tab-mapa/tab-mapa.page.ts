import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockLocales } from '../../services/mock-data';

@Component({
  selector: 'app-tab-mapa',
  templateUrl: './tab-mapa.page.html',
  styleUrls: ['./tab-mapa.page.scss'],
})
export class TabMapaPage {

  locales = mockLocales;

  constructor(private router: Router) {}

  // Lógica de navegación al radar
  handleLocalClick(local: any) {
    this.router.navigate(['/radar', local.id]);
  }

  // Lógica para el color del punto
  getColor(aura: string): string {
    if (aura === 'Fiesta Total') return 'var(--ion-color-primary)';
    if (aura === 'Animado') return 'var(--ion-color-secondary)';
    return '#3880ff'; // Azul por defecto
  }
}
