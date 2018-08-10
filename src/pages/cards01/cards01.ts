import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'temp-cards',
    templateUrl: 'cards01.html',
  })


export class TemplateCards {
  
<<<<<<< HEAD
  IRex: boolean;
  Spino: boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.IRex = this.navParams.get('IRex')
      this.Spino = this.navParams.get('Spino')
=======
  CatAdventuras: boolean;
  CatGastronomia: boolean;
  CatSouvenir: boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.CatAdventuras = this.navParams.get('Adventuras')
      this.CatGastronomia = this.navParams.get('Gastronomia')
      this.CatSouvenir = this.navParams.get('Souvenir')
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
  }

}
  