import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {
  pedidoId!: number;
  pedido: any; // Agrega la propiedad pedido

  constructor(private route: ActivatedRoute, private pedidosService: PedidosService, private Router: Router) { }

  ngOnInit() {

    this.pedidoId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);

    this.pedidosService.getPedidoById(this.pedidoId).subscribe((data) => {
      this.pedido = data;
    });


  }


  seguirPedido(id: number) {
    this.Router.navigate(['sistema/seguimiento-pedido/', id]);
  }

}