import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mi-perfil-data',
  templateUrl: './mi-perfil-data.page.html',
  styleUrls: ['./mi-perfil-data.page.scss'],
})
export class MiPerfilDataPage implements OnInit {
  empleadoId: number = 1;
  empleado: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  formatRut(rut: string): string {
    if (!rut) return '';
  
    const cleanRut = rut.replace(/[.-]/g, '');
    const formattedRut = cleanRut.slice(0, -1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '-' + cleanRut.slice(-1);
    return formattedRut;
  }

  formatPhoneNumber(phone: string): string {
    if (!phone) return '';
  
    // Añadir espacios al número de teléfono en el formato deseado
    const formattedPhone = `+${phone.slice(1, 3)} ${phone.slice(3, 4)} ${phone.slice(4, 8)} ${phone.slice(8, 12)}`;
  
    return formattedPhone;
  }
  
  ngOnInit() {

    this.empleadoId = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);

    // this.http.get<any>(`http://localhost:3000/empleado/${this.empleadoId}`).subscribe((data) => {
    //   this.empleado = data;
    // });

    this.http.get<any>(`http://localhost:3000/empleado/${this.empleadoId}`).subscribe((data) => {
      this.empleado = data;
    });


  }

}
