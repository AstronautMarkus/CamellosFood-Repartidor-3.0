import { Component, OnInit, Input, } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-footer-routing',
  templateUrl: './footer-routing.component.html',
  styleUrls: ['./footer-routing.component.scss'],
})
export class FooterRoutingComponent  implements OnInit {

  @Input() titulo:string = 'CamellosFood'
  @Input() color:string = 'green'
  @Input() enlaceCustom: string = '/sistema/menu_principal'; // Valor predeterminado del enlace personalizado


  constructor(private router: Router) { }


  navegar() {
    this.router.navigate([this.enlaceCustom]);
  }
  

  ngOnInit() {}

}
