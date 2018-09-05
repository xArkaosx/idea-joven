import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html',
})
export class PagarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private toastCtrl: ToastController) {
  }

  popPage(){
    this.navCtrl.pop();
  }

  transactionCompleted(){
    let toast = this.toastCtrl.create({
      message: '¡Pago exitoso!',
      duration: 3000
    });
    toast.present();
    let nav = this.app.getRootNav(); 
    nav.setRoot(TabsPage, {tabIndex: 3});
  }

}
