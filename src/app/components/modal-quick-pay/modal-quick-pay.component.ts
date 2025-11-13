import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mockMenu } from '../../services/mock-data'; // Importamos el menú

@Component({
  selector: 'app-modal-quick-pay',
  templateUrl: './modal-quick-pay.component.html',
  styleUrls: ['./modal-quick-pay.component.scss'],
})
export class ModalQuickPayComponent {

  menu = mockMenu; // Asignamos los datos de prueba

  constructor(private modalCtrl: ModalController) { }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  pedir() {
    // Lógica de pago
    this.modalCtrl.dismiss({ 'pedido': true });
  }
}
