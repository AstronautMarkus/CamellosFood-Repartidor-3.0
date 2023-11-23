import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CamelloOKComponent } from './camello-ok-component/camello-ok-component.component';
import { LoadingComponent } from './loading-component/loading-component.component';
import { LoginPageBaseComponent } from './login-page-base/login-page-base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTrackingComponent } from './header-tracking/header-tracking.component';
import { FooterRoutingComponent } from './footer-routing/footer-routing.component';


@NgModule({
  declarations: [
    CamelloOKComponent,
    LoadingComponent,
    LoginPageBaseComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTrackingComponent,
    FooterRoutingComponent
  ],
  exports: [
    CamelloOKComponent,
    LoadingComponent,
    LoginPageBaseComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTrackingComponent,
    FooterRoutingComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
