import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-footer-routing',
  templateUrl: './footer-routing.component.html',
  styleUrls: ['./footer-routing.component.scss'],
})
export class FooterRoutingComponent  implements OnInit {

  @Input() titulo:string = 'CamellosFood'
  @Input() color:string = 'green'
  @Input() enlaceCustom: string = '/'; // Valor predeterminado del enlace personalizado


  constructor() { }

  ngOnInit() {}

}
