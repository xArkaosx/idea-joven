import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popPage(){
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

}
