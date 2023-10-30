import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {
  pedidoId!: number;
  pedido: any; // Agrega la propiedad pedido

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.pedidoId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);

    this.http.get<any>(`http://localhost:3000/pedidos/${this.pedidoId}`).subscribe((data) => {
      this.pedido = data;
    });


  }
}