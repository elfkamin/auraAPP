import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Carga el MÓDULO de pestañas
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'radar/:id',
    // Carga el MÓDULO de radar
    loadChildren: () => import('./pages/radar/radar.module').then( m => m.RadarPageModule)
  }
  // La ruta 'home' ha sido eliminada ya que no se usa.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
