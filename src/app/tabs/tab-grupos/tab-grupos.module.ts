import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabGruposPageRoutingModule } from './tab-grupos-routing.module';
import { TabGruposPage } from './tab-grupos.page';

// Importamos el módulo de componentes compartidos
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabGruposPageRoutingModule,
    ComponentsModule // Lo importamos aquí para usar los modales
  ],
  declarations: [TabGruposPage]
})
export class TabGruposPageModule {}
