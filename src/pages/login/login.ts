import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
}
