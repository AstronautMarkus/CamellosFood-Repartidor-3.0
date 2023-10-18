import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-start-logged',
  templateUrl: './start-logged.page.html',
  styleUrls: ['./start-logged.page.scss'],
})
export class StartLoggedPage implements OnInit {

  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  constructor(private router: Router, 
    private loadingCtrl: LoadingController) { }

    async notAllChecked() {
      const loading = await this.loadingCtrl.create({
        message: 'Error, por favor verirfique que todas las casillas estén marcadas.',
        duration: 1000,
      });
  
      loading.present();
    }

    async allChecked() {
      const loading = await this.loadingCtrl.create({
        message: 'Bienvenido al sistema.',
        duration: 1000,
      });
  
      loading.present();
    }


  ngOnInit() {
  }

  verificarCasillas() {
    if (this.isChecked1 && this.isChecked2 && this.isChecked3) {
      // Las tres casillas están marcadas, puedes permitir que el usuario continúe.
      console.log('Todas las casillas están marcadas. Puedes continuar.');
      this.allChecked().then(() => {
        setTimeout(() => {
          this.router.navigate(['/sistema/menu_repa']);
        }, 1200);
      });


    } else {
      // Al menos una casilla no está marcada, muestra un mensaje de error o realiza alguna acción.
      console.log('Por favor, marca todas las casillas antes de continuar.');
      this.notAllChecked()

    }
  }

}
