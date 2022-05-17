import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.page.html',
  styleUrls: ['./cupones.page.scss'],
})
export class CuponesPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ESTE ES TU CUPON',
        message: '<img src="assets/cupon.png", alt="g-maps", style="border-radius: 2px">',
           buttons: [
            {
              text: 'Ok',
            }
              ],
           })
    await alert.present();
  }

  ngOnInit() {
  }

}
