import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SistemaRoutingModule } from './sistema-routing.module';

import { GoogleMapsModule } from '@angular/google-maps';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';
import { ChangePasswordPage } from './page/change-password/change-password.page';
import { MenuPrincipalPage } from './page/menu-principal/menu-principal.page';
import { StartLoggedPage } from './page/start-logged/start-logged.page';
import { MenuRepaPage } from './page/menu_repa/menu-repa/menu-repa.page';

import { ListaPedidosPage } from './page/menu_repa/lista-pedidos/lista-pedidos.page';
import { MiPerfilPage } from './page/menu_repa/mi-perfil/mi-perfil.page';
import { HistorialPedidosPage } from './page/menu_repa/historial-pedidos/historial-pedidos.page';

import { SeguimientoPedidoPage } from './page/menu_repa/seguimiento-pedido/seguimiento-pedido.page';
import { DetallePedidoPage } from './page/menu_repa/detalle-pedido/detalle-pedido.page';

import { MiPerfilDataPage } from './page/menu_repa/mi-perfil-data/mi-perfil-data.page';
import { MiPerfilOptionsPage } from './page/menu_repa/mi-perfil-options/mi-perfil-options.page';

import { FormFinalizarPedidoPage } from './page/menu_repa/form-finalizar-pedido/form-finalizar-pedido.page';

import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

import { FooterRoutingComponent } from '../components/footer-routing/footer-routing.component';

import { RecuperarPasswordPage } from './page/recuperar-password/recuperar-password.page';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage,
    HomepagePage,
    ChangePasswordPage,
    MenuPrincipalPage,
    StartLoggedPage,
    MenuRepaPage,
    ListaPedidosPage,
    MiPerfilPage,
    HistorialPedidosPage,
    DetallePedidoPage,
    SeguimientoPedidoPage,
    MiPerfilDataPage,
    MiPerfilOptionsPage,
    FormFinalizarPedidoPage,
    RecuperarPasswordPage,


    
    
  ],
  imports: [
    GoogleMapsModule,
    CommonModule,
    SistemaRoutingModule,
    IonicModule, 
    ComponentsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})

export class SistemaModule {}
