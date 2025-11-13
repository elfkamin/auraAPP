import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Routes } from '@angular/router';



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.route').then((m) => m.routes),
  },
  {
    path: 'radar/:id', // Página de Radar
    loadComponent: () => import('./pages/radar/radar.page').then( m => m.RadarPage)
  },
];
