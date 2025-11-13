import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-mapa',
        loadChildren: () => import('./tab-mapa/tab-mapa.module').then(m => m.TabMapaPageModule)
      },
      {
        path: 'tab-grupos',
        loadChildren: () => import('./tab-grupos/tab-grupos.module').then(m => m.TabGruposPageModule)
      },
      {
        path: 'tab-perfil',
        loadChildren: () => import('./tab-perfil/tab-perfil.module').then(m => m.TabPerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-mapa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-mapa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
