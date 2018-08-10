import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

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
