import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private Router: Router) { }

  

  public alertButtons = [
    {
      text: 'Si',
      handler: () => {
        console.log('Salió a login');
        this.Router.navigate(['/sistema/login']);
      },
    },
    {
      text: 'No',
      handler: () => {
        console.log('Se mantiene en recover password');
      },
    }
  ];



  ngOnInit() {
  }

}
