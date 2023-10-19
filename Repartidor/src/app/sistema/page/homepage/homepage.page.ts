import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})

export class HomepagePage implements OnInit {

  center: google.maps.LatLngLiteral = {
    lat: 35.30641723969303, // Default latitude (Ejemplo: un taller de Japón con AE86 XD)
    lng: 136.86583694361983, // Default longitude (Ejemplo: LO DE ARRIBA)
  };

  constructor() { }

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
      console.error('Error getting user location:', error);
    }
  }
}


