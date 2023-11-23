import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:8000/api/auth/'
  tokenKey = "access_token"
  refreshTokenkey = "refresh_token"
  token: any;

  constructor(private http: HttpClient) { }

  public login(credenciales: any): Observable<any> {

    return this.http.post(this.apiURL + "login/", credenciales)
  }


  public isAuthenticated():Observable<any> {
    // Comprueba si el token está presente en el almacenamiento local o de sesion
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getAccessToken()}` })
    return this.http.post(this.apiURL + "token/", {},{ headers })
    
    
  }

  public getAccessToken() {
    if (localStorage.getItem(this.tokenKey)) {
      return localStorage.getItem(this.tokenKey)
    }
    else {
      return sessionStorage.getItem(this.tokenKey)
    }
  }
  public logout(): void {
    // Elimina el token del almacenamiento local al cerrar la sesión
    this.cleanStorage();
  }

  public cleanStorage():void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_data")
    sessionStorage.removeItem("access_token");
  }

  public registrar(datos:any):Observable<any>{
    return this.http.post(this.apiURL + "cliente/", datos)
  }
}
