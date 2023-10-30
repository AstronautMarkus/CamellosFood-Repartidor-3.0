import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.page.html',
  styleUrls: ['./lista-pedidos.page.scss'],
})
export class ListaPedidosPage implements OnInit {
  pedidos: any[] = [];
  tipoPedido: string = 'todos'; // Valor por defecto

  constructor(private http: HttpClient, private navCtrl: NavController, private Router: Router) { }

  getTextColor(estado: string): string {
    switch (estado) {
      case 'Disponible':
        return 'green';
      case 'En reparto':
        return 'orange';
      case 'Completado':
        return 'red';
      default:
        return 'black';
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/pedidos').subscribe((data: any) => {
      this.pedidos = data;
    });
  }

  verDetallePedido(id: number) {
    this.Router.navigate(['sistema/detalle-pedido/', id]);
  }

  mostrarPedido(pedido: any): boolean {
    if (this.tipoPedido === 'todos') {
      return true; // Mostrar todos los pedidos
    } else if (this.tipoPedido === 'disponibles') {
      return pedido.estado === 'Disponible'; // Mostrar solo los pedidos disponibles
    } else if (this.tipoPedido === 'reparto') {
      return pedido.estado === 'En reparto'; // Mostrar solo los pedidos en reparto
    } else if (this.tipoPedido === 'completados') {
      return pedido.estado === 'Completado'; // Mostrar solo los pedidos completados
    } else {
      return false; // No mostrar ningún pedido si no se selecciona una opción válida
    }
  }
}