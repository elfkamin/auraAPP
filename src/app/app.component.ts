import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  mapOutline, peopleOutline, personOutline, flame, pulse, water,
  arrowBack, wineOutline, shieldHalfOutline, personCircleOutline,
  walletOutline, logOutOutline, close, add, people, gameControllerOutline,
  beerOutline, waterOutline, flameOutline, addCircle
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Registrar TODOS los iconos globalmente
    addIcons({
      mapOutline, peopleOutline, personOutline, flame, pulse, water,
      arrowBack, wineOutline, shieldHalfOutline, personCircleOutline,
      walletOutline, logOutOutline, close, add, people, gameControllerOutline,
      beerOutline, waterOutline, flameOutline, addCircle
    });
  }
}
