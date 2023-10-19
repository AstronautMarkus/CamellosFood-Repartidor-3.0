import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tracking',
  templateUrl: './header-tracking.component.html',
  styleUrls: ['./header-tracking.component.scss'],
})
export class HeaderTrackingComponent  implements OnInit {

// Input permite recibir la variable 
  //          por parámetro desde el Html
  @Input() titulo:string = 'Camellos Food (Tracking)'  //<==========

  constructor() { }

  ngOnInit() {}

}
