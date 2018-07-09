import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  myCat: string;
  myCatUpper: string;
  categoria: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.myCat = navParams.get('data');
    this.categoria = afDatabase.list(this.myCat);
  }

  popView(){
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

  showConsole(){
    console.log(this.categoria);
  }
  
  ionViewDidLoad(){
    this.myCatUpper = this.myCat.charAt(0).toUpperCase() + this.myCat.slice(1);
  }
}
