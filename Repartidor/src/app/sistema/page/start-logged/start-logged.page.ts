import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CounterFormService } from 'src/app/counter-form.service';

@Component({
  selector: 'app-start-logged',
  templateUrl: './start-logged.page.html',
  styleUrls: ['./start-logged.page.scss'],
})
export class StartLoggedPage {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  constructor(private router: Router, private CounterFormService: CounterFormService) { }

  verificarCasillas() {
    if (this.isChecked1 && this.isChecked2 && this.isChecked3) {
      // Todas las casillas están marcadas, redirige al usuario.

      this.router.navigate(['/sistema/menu_repa']);
      console.log('casillas activadas');

    }
  }

  cancelarEntrada(){

    

    this.router.navigate(['/sistema/menu_principal']);
    console.log('Entrada cancelada, variable mantiene forma');
    this.CounterFormService.resetCounter(); // Resetea la variable counter
    
  }


  
}
