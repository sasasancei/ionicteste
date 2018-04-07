import { Component } from '@angular/core';
import { NavController, Toast} from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Tem certeza que as informações estão corretas?',
      message: 'Algumas informações não podem ser alteradas.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ok',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
}