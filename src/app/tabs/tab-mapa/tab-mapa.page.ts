import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { mockLocales } from '../../services/mock-data'; // Importar datos

@Component({
  selector: 'app-tab-mapa',
  templateUrl: './tab-mapa.page.html',
  styleUrls: ['./tab-mapa.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class TabMapaPage {
  locales = mockLocales;

  constructor(private router: Router) {}

  handleLocalClick(local: any) {
    // Simular check-in en 'The Hive Club'
    if (local.id === 1) {
      this.router.navigate(['/radar', 1]);
    }
  }
}
