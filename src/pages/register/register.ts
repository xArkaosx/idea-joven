import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
=======
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
<<<<<<< HEAD


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth ) {
  }

  async register(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch (e) {
      console.error(e);
=======
  repassword: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
  }

  alert(titleText: string, message: string) {
    this.alertCtrl.create({
      title: titleText,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async register(user: User) {
    try {
      if (user.password == this.repassword) {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(result);
      }else{
        let toast = this.toastCtrl.create({
          message: 'La contraseña no coincide',
          duration: 3000
        });
        toast.present();
      }
    }
    catch (e) {
      console.error(e);
      this.alert('Error: ', e );
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
    }
  }

}
