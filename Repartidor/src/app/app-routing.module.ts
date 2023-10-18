import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AccesoUsuariosGuard} from './guards/acceso-usuarios.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    ,canActivate:[AccesoUsuariosGuard]
  },
  {
    path: '',
    redirectTo: 'sistema/homepage',
    pathMatch: 'full'
    
  },
  {
    path: 'sistema',
    loadChildren: () => import('./sistema/sistema.module').then( m => m.SistemaModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
