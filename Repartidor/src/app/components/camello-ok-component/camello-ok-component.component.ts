import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-camello-ok-component',
  templateUrl: './camello-ok-component.component.html',
  styleUrls: ['./camello-ok-component.component.scss'],
})
export class CamelloOKComponent  implements OnInit {
  
  @Input() filtroActual:any = "";
  constructor() { }

  ngOnInit() {}

}
