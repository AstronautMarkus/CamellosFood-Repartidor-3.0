import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HeaderTrackingComponent } from './header-tracking/header-tracking.component';

import { FooterComponent } from './footer/footer.component';
import { FooterRoutingComponent } from './footer-routing/footer-routing.component';


import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent,HeaderTrackingComponent,FooterComponent,FooterRoutingComponent],
  exports:[HeaderComponent,HeaderTrackingComponent,FooterComponent,FooterRoutingComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
