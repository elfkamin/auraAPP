import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  mapOutline, peopleOutline, personOutline, flame, pulse, water,
  arrowBack, wineOutline, shieldHalfOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Registrar iconos globalmente
    addIcons({
      mapOutline, peopleOutline, personOutline, flame, pulse, water,
      arrowBack, wineOutline, shieldHalfOutline
    });
  }
}
