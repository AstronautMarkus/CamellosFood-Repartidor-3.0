import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RecuperarClienteService } from '../../recuperar-password/service/recuperar.cliente.service';

@Component({
  selector: 'app-mi-perfil-options',
  templateUrl: './mi-perfil-options.page.html',
  styleUrls: ['./mi-perfil-options.page.scss'],
})
export class MiPerfilOptionsPage implements OnInit {

  userData: any;
  userEmail: string = "";

  constructor(private recuperarcorreo: RecuperarClienteService, private alertController: AlertController) {
    
   }

  ngOnInit() {

    const localStorageData = localStorage.getItem('user_data');

    if (localStorageData) {
      this.userData = JSON.parse(localStorageData);
      this.userEmail = this.userData.correo;
      console.log(this.userEmail)

    } else {
      console.error('No se encontraron datos en el Local Storage.');
    }

  }

  async enviarCodigoRecuperacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Desea recibir un código de verificación para cambiar la contraseña del correo ${this.userEmail}?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Sí',
          handler: () => {
            this.enviarCodigoVerificacion();
            
          }
        }
      ]
    });

    await alert.present();
  }

  enviarCodigoVerificacion() {
    this.recuperarcorreo.enviarCodigo(this.userData.email_recuperacion).subscribe(
      response => {
        // Maneja la respuesta del servidor según sea necesario
        console.log('Respuesta del servidor:', response);
      },
      error => {
        console.error('Error al enviar el código de verificación', error);
      }
    );
  }

}
