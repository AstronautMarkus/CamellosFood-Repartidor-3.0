import { Component } from '@angular/core';

import { ApiService } from './api.service'; // servicio api 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pedidos!: any[]; // Define una variable para almacenar los pedidos

  constructor(private apiService: ApiService) {}

  obtenerPedidos() {
    this.apiService.getPedidos().subscribe((data: any) => {
      this.pedidos = data;
    });
  }
  
}
