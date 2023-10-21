import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CounterFormService } from 'src/app/counter-form.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage {



  constructor(private router: Router, private loadingCtrl: LoadingController, private CounterFormService: CounterFormService ) {
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
        this.router.navigate(['sistema/homepage']);
      },
    },
  ];

}
