import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'rutFormat'
})
export class RutFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Aplicar la lógica para formatear el RUT aquí
    // Por ejemplo, asumiendo que value es un RUT sin formato, como "99999999-9":
    const formattedRut = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return formattedRut;
  }
}


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
