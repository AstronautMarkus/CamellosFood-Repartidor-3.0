import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CounterFormService } from 'src/app/services/counter-form.service';

import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage {

  userData: any; // Puedes ajustar el tipo de datos según tu estructura


  constructor(private router: Router, private loadingCtrl: LoadingController, private CounterFormService: CounterFormService, private authSrvc:AuthService ) {
  }


  ngOnInit() {

    // Obtener datos del Local Storage
  // Obtener datos del Local Storage
const localStorageData = localStorage.getItem('user_data');

// Verificar si localStorageData no es nulo antes de intentar el análisis JSON
if (localStorageData) {
  // Convertir datos de cadena JSON a objeto
  this.userData = JSON.parse(localStorageData);

} else {

  console.error('No se encontraron datos en el Local Storage.');

}


}

  obtenerHoraYMinutos(): string {
    
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();

    // Añadir ceros a la izquierda si es necesario
    const horasStr = horas < 10 ? '0' + horas : horas.toString();
    const minutosStr = minutos < 10 ? '0' + minutos : minutos.toString();

    // Formatear la hora y los minutos como "hh:mm"
    const horaYMinutos = `${horasStr}:${minutosStr}`;

    return horaYMinutos;
  }


  IniciarSistema() {
    if (this.CounterFormService.getCounterValue() === 0) {
      this.CounterFormService.incrementCounter();
      this.router.navigate(['/sistema/start_logged']);
      console.log("form");
    } else {
      this.router.navigate(['/sistema/menu_repa']);
      console.log("menu repa");
    }
  }


  verMapa(){
    this.router.navigate(['/sistema/homepage']);
    console.log('viendo el mapa');
  }

  public alertButtons = [
    {
      text: 'No',
      handler: () => {
        console.log('No cierra sesión');
      },
    },
    {
      text: 'Si',
      handler: () => {
        console.log('Cierra sesión');
        this.CounterFormService.resetCounter(); // Resetea la variable counter
        this.authSrvc.logout();
        this.router.navigate(['/sistema/homepage']);
        
      },
    },
  ];

}
