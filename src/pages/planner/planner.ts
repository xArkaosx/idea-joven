import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
import { CalendarioPage } from '../calendario/calendario';
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b

@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlannerPage');
  }

<<<<<<< HEAD
=======
  CalendarioTab() {
    this.navCtrl.push(CalendarioPage, {
    })
  }

>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
}
