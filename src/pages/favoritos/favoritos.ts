import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

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
