import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SistemaRoutingModule } from './sistema-routing.module';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';
import { RecoverPasswordPage } from './page/recover-password/recover-password.page';
import { ChangePasswordPage } from './page/change-password/change-password.page';
import { MenuPrincipalPage } from './page/menu-principal/menu-principal.page';
import { StartLoggedPage } from './page/start-logged/start-logged.page';
import { MenuRepaPage } from './page/menu_repa/menu-repa/menu-repa.page';

import { ListaPedidosPage } from './page/menu_repa/lista-pedidos/lista-pedidos.page';
import { MiPerfilPage } from './page/menu_repa/mi-perfil/mi-perfil.page';
import { HistorialPedidosPage } from './page/menu_repa/historial-pedidos/historial-pedidos.page';

import { SeguimientoPedidoPage } from './page/menu_repa/seguimiento-pedido/seguimiento-pedido.page';
import { DetallePedidoPage } from './page/menu_repa/detalle-pedido/detalle-pedido.page';

import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginPage,
    HomepagePage,
    ChangePasswordPage,
    RecoverPasswordPage,
    MenuPrincipalPage,
    StartLoggedPage,
    MenuRepaPage,
    ListaPedidosPage,
    MiPerfilPage,
    HistorialPedidosPage,
    DetallePedidoPage,
    SeguimientoPedidoPage
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    IonicModule, 
    ComponentsModule,
    FormsModule,
  ]
})
export class SistemaModule { }
