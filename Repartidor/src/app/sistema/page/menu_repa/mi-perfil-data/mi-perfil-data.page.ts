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

  userData: any; // Puedes ajustar el tipo de datos según tu estructura


  constructor(private route: ActivatedRoute, private http: HttpClient) { }


  formatRut(rut: string): string {
    if (!rut) return '';
  
    const cleanRut = rut.replace(/[.-]/g, '');
    const formattedRut = cleanRut.slice(0, -1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '-' + cleanRut.slice(-1);
    return formattedRut;
  }

  // formatPhoneNumber(phone: string): string {
  //   if (!phone) return '';
  
  //   // Añadir espacios al número de teléfono en el formato deseado
  //   const formattedPhone = `+${phone.slice(1, 3)} ${phone.slice(3, 4)} ${phone.slice(4, 8)} ${phone.slice(8, 12)}`;
  
  //   return formattedPhone;
  // }
  
  ngOnInit() {

        // Obtener datos del Local Storage
      // Obtener datos del Local Storage
    const localStorageData = localStorage.getItem('user_data');

    // Verificar si localStorageData no es nulo antes de intentar el análisis JSON
    if (localStorageData) {
      // Convertir datos de cadena JSON a objeto
      this.userData = JSON.parse(localStorageData);

    } else {

      console.error('No se encontraron datos en el Local Storage.');

    }


  }

}
