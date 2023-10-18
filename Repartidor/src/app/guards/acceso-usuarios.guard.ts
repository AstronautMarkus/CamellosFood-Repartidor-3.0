import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AccesoUsuariosGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // //******************************
    // // Obtenemos la hora actual  
    // const hora = new Date().getHours();
    // console.log("Hola : ",hora)  
    // // Comparamos la hora con el máximo permitido
    // // en este caso las 12
    // if (hora >= 24) {
    //   // Si la hora es mayor o igual redireccionamos al alguna Página
    //   //this.router.navigate(['/cliente/leer']);



    //   this.router.navigate(['']);
    //   // Si devolvemos FALSE no permitirá el acceso
    //   return false;
    // }

    // // Si devolvemos TRUE si permitirá el acceso.
    return true;

    


  }
  
}
