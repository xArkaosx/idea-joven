import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TemplateCards } from '../cards01/cards01';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }
/*
  ionViewWillEnter(){
   this.afAuth.authState.subscribe(data => {
     if(data && data.email && data.uid) {
     this.toast.create({
       message: "Welcome to APP_NAME, ${data.email}", 
       duration: 3000
     }).present();
    }
    else {
      this.toast.create({
        message: "Could not find authentication email", 
        duration: 3000
      }).present();
    }
   });
  }
*/
  //------------------------  Objetos para cada carta -------------------------------
    I_Rex() {
      this.navCtrl.push(TemplateCards, {
        IRex: true
      });
    }

    S_pino() {
      this.navCtrl.push(TemplateCards, {
      Spino: true 
      });
    }

}

