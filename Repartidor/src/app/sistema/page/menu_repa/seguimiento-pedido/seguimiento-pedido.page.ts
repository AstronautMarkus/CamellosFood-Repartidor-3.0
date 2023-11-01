import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ActivatedRoute } from '@angular/router';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';



@Component({
  selector: 'app-seguimiento-pedido',
  templateUrl: './seguimiento-pedido.page.html',
  styleUrls: ['./seguimiento-pedido.page.scss'],
})
export class SeguimientoPedidoPage implements OnInit {
  pedidoId!: number;
  pedido: any; // Agrega la propiedad pedido

  center: google.maps.LatLngLiteral = {
    lat: -33.41776959585166, // Default latitude (Ejemplo: un taller de Japón con AE86 XD)
    lng: -70.60634718860781, // Default longitude (Ejemplo: LO DE ARRIBA)
  };

  constructor(private route: ActivatedRoute,private pedidosService: PedidosService) { }

  ngOnInit() {

    this.getPosition();

    this.pedidoId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);

    this.pedidosService.getPedidoById(this.pedidoId).subscribe((data) => {
      this.pedido = data;
    });

    this.empezarRastreo();

  }

  async getPosition() {
    try {
      const coordinates: GeolocationPosition = await Geolocation.getCurrentPosition();
      this.center = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
    } catch (error) {
      // Handle the error here, such as displaying an error message or using default coordinates.
      console.error('Error obteniendo la posición del usuario:', error);
    }
  }

  empezarRastreo() {
    this.pedidosService.actualizarEstadoPedido(this.pedidoId, 'En reparto').subscribe((data) => {
      this.pedido = data;
    });
  }
  
  

}
