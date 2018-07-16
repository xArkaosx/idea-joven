import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'temp-cards',
    templateUrl: 'cards01.html',
  })


export class TemplateCards {
  
  CatAdventuras: boolean;
  CatGastronomia: boolean;
  CatSouvenir: boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.CatAdventuras = this.navParams.get('Adventuras')
      this.CatGastronomia = this.navParams.get('Gastronomia')
      this.CatSouvenir = this.navParams.get('Souvenir')
  }

}
  