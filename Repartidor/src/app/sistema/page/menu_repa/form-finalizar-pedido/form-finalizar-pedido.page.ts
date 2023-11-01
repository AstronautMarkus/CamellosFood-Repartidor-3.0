import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-finalizar-pedido',
  templateUrl: './form-finalizar-pedido.page.html',
  styleUrls: ['./form-finalizar-pedido.page.scss'],
})
export class FormFinalizarPedidoPage implements OnInit {
  pedidoId!: number;
  pedido: any; // Agrega la propiedad pedido

  constructor(private pedidosService: PedidosService, private route: ActivatedRoute, private Router: Router) { }

  ngOnInit() {

    this.pedidoId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);

    this.pedidosService.getPedidoById(this.pedidoId).subscribe((data) => {
      this.pedido = data;
    });

  }

  finalizarPedido(id: number) {
    this.pedidosService.actualizarEstadoPedido(this.pedidoId, 'Completado').subscribe((data) => {
      this.pedido = data;
    });
  }

  salirForm(){
    this.Router.navigate(['sistema/menu_repa']);
  }

}