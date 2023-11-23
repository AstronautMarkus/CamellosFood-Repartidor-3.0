import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})

export class HomepagePage implements OnInit {

  public change_header: number = 0;

  center: google.maps.LatLngLiteral = {
    lat: -33.41776959585166, // Default latitude (Ejemplo: un taller de Japón con AE86 XD)
    lng: -70.60634718860781, // Default longitude (Ejemplo: LO DE ARRIBA)
  };

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.getPosition();
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


}


