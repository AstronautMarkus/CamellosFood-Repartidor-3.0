import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  correoElectronico: string = '';

  constructor(public toastController: ToastController, public Router:Router) { }


  public alertButtons = [
    {
      text: 'Si',
      handler: () => {
        console.log('Salió a login');
        this.Router.navigate(['/sistema/login']);
      },
    },
    {
      text: 'No',
      handler: () => {
        console.log('Se mantiene en recover password');
      },
    }
  ];


  ngOnInit() {
  }

  async obtenerCodigo() {
    if (this.correoElectronico.length >= 4 && this.correoElectronico.includes('@')) {
      this.Router.navigate(['/sistema/change_password']);
    } else {
      const toast = await this.toastController.create({
        message: 'Error. Verifique su correo electrónico, mínimo 4 carácteres, y un @.',
        duration: 2000, // Duración del Toast en milisegundos
        position: 'top', // Puedes ajustar la posición del Toast según tus preferencias
        color: 'danger', // Puedes cambiar el color del Toast según tus preferencias
      });
      toast.present();
    }
  }
}