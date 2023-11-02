import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ILoginCredentials } from '../interfaces/iLoginCredentials';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:8000/backend/'
  tokenKey = "user_token"
  token:any;
  
  constructor(private http:HttpClient) { }

  public login(credenciales:any):Observable<any>{
    
    return this.http.post(this.apiURL + "login/", credenciales)
  }

  public getDatosUsuario():Observable<any>{
    this.getToken()
    const headers = new HttpHeaders({ 'Authorization': `Token ${this.token}` });
    return this.http.get(this.apiURL + "e/", {headers})
  }

  public isAuthenticated(): boolean {
    // Comprueba si el token está presente en el almacenamiento local o de sesion
    if(localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey)){
      return true
    }
    return false
  }

  public setToken(token:string, local:boolean) {
    if (local){
      localStorage.setItem(this.tokenKey, token)
    }
    else {
      sessionStorage.setItem(this.tokenKey, token)
    }
    
  }

  public getToken() {
    if(localStorage.getItem(this.tokenKey)){
      this.token = localStorage.getItem(this.tokenKey)
    }
    else {
      this.token = sessionStorage.getItem(this.tokenKey)
    }
  }
  public logout(): void {
    // Elimina el token del almacenamiento local al cerrar la sesión
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey)
  }
}
