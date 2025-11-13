import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mockGrupos } from '../../services/mock-data';
import { ModalCrearGrupoComponent } from '../../components/modal-crear-grupo/modal-crear-grupo.component';

@Component({
  selector: 'app-tab-grupos',
  templateUrl: './tab-grupos.page.html',
  styleUrls: ['./tab-grupos.page.scss'],
})
export class TabGruposPage {

  grupos = mockGrupos;

  constructor(private modalCtrl: ModalController) { }

  async crearGrupo() {
    const modal = await this.modalCtrl.create({
      component: ModalCrearGrupoComponent
    });
    await modal.present();
  }
}
