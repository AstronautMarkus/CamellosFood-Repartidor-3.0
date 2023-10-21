import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage {

  counter: number = 0;

  constructor(private router: Router, private loadingCtrl: LoadingController) {
  }

  IniciarSistema() {
    if(this.counter == 0){
      this.router.navigate(['/sistema/start_logged']);
      this.counter = this.counter + 1
      console.log("form")
    }
    else{
      this.router.navigate(['/sistema/menu_repa']);
      console.log("menu repa")
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
        this.router.navigate(['sistema/homepage']);
      },
    },
  ];

}
