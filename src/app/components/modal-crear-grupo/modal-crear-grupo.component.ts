import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-crear-grupo',
  templateUrl: './modal-crear-grupo.component.html',
  styleUrls: ['./modal-crear-grupo.component.scss'],
})
export class ModalCrearGrupoComponent {

  constructor(private modalCtrl: ModalController) { }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  crear() {
    // Aquí iría la lógica para crear el grupo
    this.modalCtrl.dismiss({ 'creado': true });
  }
}
