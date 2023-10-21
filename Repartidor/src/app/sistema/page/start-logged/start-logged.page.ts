import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-logged',
  templateUrl: './start-logged.page.html',
  styleUrls: ['./start-logged.page.scss'],
})
export class StartLoggedPage {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  counter: number = 0;

  constructor(private router: Router) { }

  verificarCasillas() {
    if (this.isChecked1 && this.isChecked2 && this.isChecked3) {
      // Todas las casillas están marcadas, redirige al usuario.
      
      this.router.navigate(['/sistema/menu_repa']);

    }
  }
  
}
