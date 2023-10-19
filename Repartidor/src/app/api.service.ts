import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // URL de tu servidor JSON

  constructor(private http: HttpClient) { }

  getPedidos() {
    return this.http.get(`${this.apiUrl}/pedidos`);
  }
}
