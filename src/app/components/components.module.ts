import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalCrearGrupoComponent } from './modal-crear-grupo/modal-crear-grupo.component';
import { ModalQuickPayComponent } from './modal-quick-pay/modal-quick-pay.component';

@NgModule({
  declarations: [
    ModalCrearGrupoComponent,
    ModalQuickPayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ModalCrearGrupoComponent,
    ModalQuickPayComponent
  ]
  // No necesitas 'entryComponents' en Angular moderno,
  // la importación en app.module.ts es suficiente.
})
export class ComponentsModule { }
