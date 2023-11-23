import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map , of} from 'rxjs';
import { AuthService } from '../services/auth-service';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authSrvc: AuthService, private navCtrl: NavController, private toastController:ToastController, private routeCtrl:Router) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 7000,
      position: position,
      color: color
    })
    await toast.present()
  }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
    
    if(localStorage.getItem("user_data") !== null){
      return true
    }
    else {
      return this.authSrvc.isAuthenticated().pipe(
        map((response) => {
          localStorage.setItem("user_data", JSON.stringify(response.registro.user))
          return true
        },
       ),
       catchError((error:any) => {
        this.authSrvc.cleanStorage();
        this.routeCtrl.navigateByUrl('/sistema/login')
        return of(false)
       })
      );
    }
  }


}
