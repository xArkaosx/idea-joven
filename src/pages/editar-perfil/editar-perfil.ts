import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilPage } from '../perfil/perfil';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  profile = {} as Profile;  

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  popPage(){
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.push(PerfilPage))
    })
  }


}
