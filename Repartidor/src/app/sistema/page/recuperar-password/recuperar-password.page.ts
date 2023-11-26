import { Component,  OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RecuperarAdminService } from './service/recuperar.admin.service';
import { ToastService } from 'src/app/services/toast.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  section:number = 1;
  isLoading:boolean = false;

  form:FormGroup = new FormGroup({
    'email_recuperacion': new FormControl('', [Validators.required, Validators.pattern(/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    'password_1': new FormControl('', [Validators.required]),
    'password_2': new FormControl('', [Validators.required]),
    'codigo_recuperacion': new FormControl('', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]{4}$/)])
  })

  // IMPORTANTE con esto           ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Ya que dependiendo de quien lo use, deberia cambiar a RecuperarAdmin, o RecuperarCliente
  constructor(private recuperarSrv:RecuperarAdminService, private toastSrv:ToastService, private navCtrl:NavController) { }

  ngOnInit() {

  }

  public continue():void{
    this.section += 1;
  }
  public back():void {
    this.section -= 1;
  }
  public onSubmit():void {
    if (this.checkPasswords() && this.form.valid){
      this.cambiarContraseña()
    }
    else{
      this.toastSrv.presentToast('bottom', "Las contraseñas no coinciden", 'danger')
    }
  }

  // Aqui se genera el codigo de verificacion, y segun la response, se hace continue o no
  public enviarCodigo() {
    const email_recuperacion:string = this.form.get('email_recuperacion')?.value
    
    if (email_recuperacion){
      this.isLoading = true;
      this.recuperarSrv.enviarCodigo(email_recuperacion).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.continue()
        },
        complete: () => {},
        error: (error) => {
          this.isLoading = false;
          if (error.error.status === 403){
            this.toastSrv.presentToastDissmissible('bottom', error.error.msg, 'danger', () => {this.continue()})
          }
          else {
            this.toastSrv.presentToast('bottom', error.error.msg, 'danger')
          }
          
        }
      }
      )
    }
  }

  // Aqui se valida el codigo, dependiendo de la response se hace continue o no
  public validarCodigo(){
    const codigo_recuperacion = this.form.get('codigo_recuperacion')?.value
    const email_recuperacion:string = this.form.get('email_recuperacion')?.value
    if (codigo_recuperacion){
      this.recuperarSrv.validarCodigo(email_recuperacion, codigo_recuperacion).subscribe({
        next: (response)=> {
      
          this.continue()
        },
        complete: () => {},
        error: (error) =>  {
          switch (error.error.status) {
            case 403:{
              this.toastSrv.presentToastDissmissible('bottom', error.error.msg, 'danger', () => {this.continue()})
              break;
            }
            case 401:{
              this.toastSrv.presentToast('bottom', error.error.msg, 'danger')
              this.back();
              break;
            }
            default:{
              this.toastSrv.presentToast('bottom', error.error.msg, 'danger')
            }
          }
        }
      })
  
    }
  }

  public cambiarContraseña() {
    const passwords = [this.form.get('password_1')?.value, this.form.get('password_2')?.value]
    const email = this.form.get('email_recuperacion')?.value
    this.recuperarSrv.cambiarContraseña(passwords[0], passwords[1], email).subscribe({
      next: (response) => {
        this.toastSrv.presentToast('bottom', 'Contraseña cambiada satisfactoriamente', 'success')
        this.navCtrl.navigateForward('/login')
      },
      error: (error) => {
        this.toastSrv.presentToast('bottom', error.error.msg, '')
      }
    })
  }

  private checkPasswords():boolean{ 
    let p1 = this.form.get('password_1')?.value
    let p2 = this.form.get('password_2')?.value
  
    return p1===p2 && p1 && p2
  }
}
