import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController:ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      position: position,
      color: color,
    })
    toast.dismiss()
    await toast.present()
  }

  async presentToastDissmissible(position: 'top' | 'middle' | 'bottom', msg: string, color: string, action:any) {
    
    const toastBtn = [
      {
        text: 'Completar',
        role: 'confirm',
        handler: () => {
          action()
        }
      }
    ]

    const toast = await this.toastController.create({
      message: msg,
      position: position,
      color: color,
      buttons: toastBtn
    })
    toast.dismiss()
    await toast.present()
  }
}
