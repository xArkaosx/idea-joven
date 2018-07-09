import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'temp-cards',
    templateUrl: 'cards01.html',
  })


export class TemplateCards {
  
  IRex: boolean;
  Spino: boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.IRex = this.navParams.get('IRex')
      this.Spino = this.navParams.get('Spino')
  }

}
  