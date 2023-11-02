import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HeaderTrackingComponent } from './header-tracking/header-tracking.component';

import { FooterComponent } from './footer/footer.component';
import { FooterRoutingComponent } from './footer-routing/footer-routing.component';


import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPageBaseComponent } from './login-page-base/login-page-base.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,HeaderTrackingComponent,FooterComponent,FooterRoutingComponent, LoginPageBaseComponent],
  exports:[HeaderComponent,HeaderTrackingComponent,FooterComponent,FooterRoutingComponent, LoginPageBaseComponent],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
