import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  public actividades:AngularFireList<any>;
  
  myInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, private storage: Storage) {
    this.actividades = afDatabase.list('/actividades');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  mySearch(){
    console.log("Wait, I'm searching...");
  }

  onSearch(myevent){
    console.log("INPUT EVENT: " + myevent);
    console.log("\nINPUT: " + this.myInput);
  }

  onCancel(myevent){
    console.log("CANCEL EVENT: " + myevent);
  }

  onClear(myevent){
    console.log("CLEAR EVENT: " + myevent);
  }
}
