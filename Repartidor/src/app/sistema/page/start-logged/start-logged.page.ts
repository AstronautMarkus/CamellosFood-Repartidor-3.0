import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CounterFormService } from 'src/app/services/counter-form.service';

@Component({
  selector: 'app-start-logged',
  templateUrl: './start-logged.page.html',
  styleUrls: ['./start-logged.page.scss'],
})
export class StartLoggedPage {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  userData: any;

  constructor(
    private router: Router,
    private CounterFormService: CounterFormService
  ) {}

  verificarCasillas() {
    if (this.isChecked1 && this.isChecked2 && this.isChecked3) {
      // Todas las casillas están marcadas, redirige al usuario.

      this.router.navigate(['/sistema/menu_repa']);
      console.log('casillas activadas');
    }
  }

  cancelarEntrada() {
    this.router.navigate(['/sistema/menu_principal']);
    console.log('Entrada cancelada, variable mantiene forma');
    this.CounterFormService.resetCounter(); // Resetea la variable counter
  }

  ngOnInit() {
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
}
