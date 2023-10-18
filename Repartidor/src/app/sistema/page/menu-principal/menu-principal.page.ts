import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {


  constructor(private router: Router, private loadingCtrl: LoadingController) {
  }  

  public alertButtons = [
    {
      text: 'Si',
      role: 'logout',
      handler: () => {
        console.log('Sesión cerrada');
        this.showLoading().then(() => {
          setTimeout(() => {
            this.router.navigate(['sistema/homepage']);
          }, 3000);
        });
      },
    },
    {
      text: 'NO',
      role: 'continue-logged-in',
      handler: () => {
        console.log('Sesión continuada');
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Seguido con el rol: ${ev.detail.role}`);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saliendo del sistema...',
      duration: 2500,
    });

    loading.present();
  }

  recargarPagina() {
    window.location.reload(); 
  }

  ngOnInit() {
  }

}
