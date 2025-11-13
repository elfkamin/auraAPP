import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockLocales } from '../services/mock-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  locales = mockLocales;

  constructor(private router: Router) {}

  irAlLocal(id: number) {
    this.router.navigate(['/radar', id]);
  }

  getColor(aura: string): string {
    if (aura === 'Fiesta Total') return '#FF007A'; // Primary
    if (aura === 'Animado') return '#00E0FF'; // Secondary
    return '#3880ff'; // Blue
  }
}
