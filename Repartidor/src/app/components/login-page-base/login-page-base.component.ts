/* 
  DOCUMENTACION

* authWithRut
authWithRut es un input booleano que te permite decidir si el formulario se va a mostrar con RUT o
correo. Si en el input se coloca que authWithRut es verdader, entonces mostrará el campo de RUT para los
staff, caso contrario, muestra el campo de correo para el usuario. Importante considerar que 
authWithRut por defecto está en  falso. De este modo, al usarlo en una page, no hace falta colocar 
explicitamente [authWithRut]="false".

* imgUrl
imgUrl es un input que recibe un string de la ubicacion de una imagen para mostrar en la parte superior,
si no se especifica queda la pantalla en blanco. Se sugiere que la imagen sea un logo de algo.
Ejemplo: imgUrl="../assets/img/foto.jpg"

* routeLogin y routeRegistro
route es un input que recibe un string y se debe escribir la ruta a la cual va a dirigir una vez se pinche
"ingresar" o "Registrarse". Ejemplo: routeLogin="/home" o routeRegister="/registro"

* titulo
Es el titulo que aparecerá bajo la imagen

Ejemplo practico de implementacion:

(Tu LoginPage debe tener el app-login-page-base dentro de ion-content, si no, no aparece xd)

Implementacion:
<ion-content>
  <app-login-page-base [authWithRut]="true | false" imgUrl="../../../assets/img/foto.jpg" route="/"> routeRegistro="/register"</app-login-page-base>
</ion-content> 
*/

import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-service';
import { ILoginCredentials } from 'src/app/interface/ILoginCredentials';
import { ToastController } from '@ionic/angular';
import { RouterEvent } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login.guard';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login-page-base',
  templateUrl: './login-page-base.component.html',
  styleUrls: ['./login-page-base.component.scss'],
})
export class LoginPageBaseComponent implements OnInit {

  // Valores por defecto que se cargarán si es que solo se llama al selector sin parametros
  // Coloquenle parametros sipo xdd
  @Input() authWithRut: boolean = false;
  @Input() canRegister: boolean = true;
  @Input() imgUrl: string = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg";
  @Input() route: any = "/";
  @Input() routeRegistro: any = "/";
  @Input() routeRecuperar: any = "/sistema/recover_password";
  @Input() titulo: string = "";


  public formFields: ILoginCredentials = {
    rut: null,
    email: null,
    password: null,
    recuerdame: true
  }
  public isLoading:boolean = false;
  constructor(private navCtrl: NavController, private authSrvc: AuthService, private toastSrv:ToastService, private guardCtrl: LoginGuard) { }

  public redirectTo(): void {
    this.navCtrl.navigateForward(this.route)
    console.log(this.route)
  }
  public redirectToRegistro(): void {
    this.navCtrl.navigateForward(this.routeRegistro)
    console.log(this.routeRegistro)
  }

  public redirectToRecuperar(): void {
    this.navCtrl.navigateForward(this.routeRecuperar)
  }
  
  public isSubmitButtonDisabled(): boolean {
    return !this.formFields.rut && !this.formFields.email && !this.formFields.password;
  }
  onSubmit() {
    this.isLoading = true;
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    this.authSrvc.login(this.formFields).subscribe(
      (response) => {
        this.navCtrl.navigateForward(this.route, {animated: false})
        this.isLoading = false;
        if (this.formFields.recuerdame) {
          localStorage.setItem("access_token", response.access_token)
        }
        else {
          sessionStorage.setItem("access_token", response.access_token)
        }
       
      },
      (error) => {
        this.isLoading = false;
        this.toastSrv.presentToast('bottom', error.error.msg, 'danger')
      }
    )
  }
  ngOnInit(): void {
 
  }
}
