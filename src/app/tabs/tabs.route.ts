import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mapa',
        loadComponent: () =>
          import('./tab-mapa/tab-mapa.page').then((m) => m.TabMapaPage),
      },
      {
        path: 'grupos',
        loadComponent: () =>
          import('./tab-grupos/tab-grupos.page').then((m) => m.TabGruposPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./tab-perfil/tab-perfil.page').then((m) => m.TabPerfilPage),
      },
      {
        path: '',
        redirectTo: '/tabs/mapa',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/mapa',
    pathMatch: 'full',
  },
];
