import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';
import { ChangePasswordPage } from './page/change-password/change-password.page';
import { RecoverPasswordPage } from './page/recover-password/recover-password.page';
import { MenuPrincipalPage } from './page/menu-principal/menu-principal.page';
import { StartLoggedPage } from './page/start-logged/start-logged.page';
import { MenuRepaPage } from './page/menu_repa/menu-repa/menu-repa.page';
import { ListaPedidosPage } from './page/menu_repa/lista-pedidos/lista-pedidos.page';
import { MiPerfilPage } from './page/menu_repa/mi-perfil/mi-perfil.page';
import { HistorialPedidosPage } from './page/menu_repa/historial-pedidos/historial-pedidos.page';
import { DetallePedidoPage } from './page/menu_repa/detalle-pedido/detalle-pedido.page';
import { SeguimientoPedidoPage } from './page/menu_repa/seguimiento-pedido/seguimiento-pedido.page';
import { MiPerfilDataPage } from './page/menu_repa/mi-perfil-data/mi-perfil-data.page';
import { MiPerfilOptionsPage } from './page/menu_repa/mi-perfil-options/mi-perfil-options.page';

import { FormFinalizarPedidoPage } from './page/menu_repa/form-finalizar-pedido/form-finalizar-pedido.page';
import { LoginGuard } from '../guard/login.guard';




const routes: Routes = [
  {
    path: 'detalle-pedido/:id', 
    component: DetallePedidoPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'homepage',
    component: HomepagePage,
  },
  {
    path: 'recover_password',
    component: RecoverPasswordPage,
  },
  {
    path: 'change_password',
    component: ChangePasswordPage,
  },
  {
    path: 'menu_principal',
    component: MenuPrincipalPage,
    // canActivate:[LoginGuard]
  },
  {
    path: 'start_logged',
    component: StartLoggedPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'menu_repa',
    component: MenuRepaPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'lista_pedidos',
    component: ListaPedidosPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'mi_perfil',
    component: MiPerfilPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'historial_pedidos',
    component: HistorialPedidosPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'seguimiento-pedido/:id',
    component: SeguimientoPedidoPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'mi-perfil-options',
    component: MiPerfilOptionsPage,
    canActivate:[LoginGuard]
    
  },
  {
    path: 'mi_perfil_data/:id',
    component: MiPerfilDataPage,
    canActivate:[LoginGuard]
  },
  {
    path: 'form-finalizar-pedido/:id',
    component: FormFinalizarPedidoPage,
    canActivate:[LoginGuard]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
