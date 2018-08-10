import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
=======
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
<<<<<<< HEAD

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
  }
  login() {
    this.navCtrl.setRoot(TabsPage);
  }
  /*
  async login(user: User) {
    try {
      const result  = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  */
  register(){
    this.navCtrl.push(RegisterPage);
  }
=======
  public type = 'password';
  public icon = 'eye-off'
  public showPass = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }
   login() {
     this.navCtrl.setRoot(TabsPage);
   }

//  alert(titleText: string, message: string) {
//    this.alertCtrl.create({
//      title: titleText,
//      subTitle: message,
//      buttons: ['OK']
//    }).present();
//  }

//  async login(user: User) {
//    if (!this.user.email || !this.user.password) {
//      let toast = this.toastCtrl.create({
//        message: 'You forgot to put your Username or Password',
//        duration: 3000
//      });
//      toast.present();
//    } else {
//      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
//        .then(data => {
//          console.log('got some data', data);
//          this.navCtrl.setRoot(TabsPage);
          //user is logged in
//        })
//        .catch(error => {
//          console.log('got an error', error);
//          this.alert('Error!', error.message);
//        })

//      console.log('Would sign in with:', this.user.email, ' & ', this.user.password);
//   }
//  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showHide() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
      this.icon = 'eye';
    } else {
      this.type = 'password';
      this.icon = 'eye-off';
    }
  }
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
}
