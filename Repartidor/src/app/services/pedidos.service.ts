import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';


@Injectable({
  providedIn: 'root' // Permite que Angular inyecte automáticamente este servicio
})

export class PedidosService {

  constructor(private http: HttpClient) { }


  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/pedidos/'); // cambiar URL A FUTURO + key + "=" + value, options);
  }



  getPedidoById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/pedidos/${id}`); // cambiar URL A FUTURO
  }

  actualizarEstadoPedido(id: number, nuevoEstado: string): Observable<any> {
    return this.getPedidoById(id).pipe(
      switchMap((pedido) => {
        pedido.estado = nuevoEstado;
        return this.http.put<any>(`http://localhost:3000/pedidos/${id}`, pedido);
      })
    );
  }

}
