import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecuperarAdminService {

  private adminURL = 'http://localhost:8000/api/admin'     // + /codigo-recuperacion/g/,  /contrasena/restablecer/
  constructor(private http:HttpClient) { }

  public enviarCodigo(email_recuperacion:any):Observable<any>{
    const data_post = {
      "email_recuperacion": email_recuperacion
    }
    return this.http.post(this.adminURL + '/codigo-recuperacion/g/', data_post)
  }

  public validarCodigo(email_recuperacion:any, codigo:any):Observable<any>{
    const data_post={
        "email_recuperacion": email_recuperacion,
        "codigo_verificacion": codigo
    }
    return this.http.post(this.adminURL + '/codigo-recuperacion/validar/', data_post)
  }

  public cambiarContraseña(p1:any, p2:any, email_recuperacion:any):Observable<any>{
    const data_post = {
      "password_1": p1,
      "password_2": p2,
      "email_recuperacion": email_recuperacion
    }
    return this.http.post(this.adminURL + '/contrasena/restablecer/', data_post)
  }
}
