import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

<<<<<<< HEAD
  public actividades:AngularFireList<any>;
=======
  search_items: Array<{thumb: string, title: string, subtitle: string}> = [];
  public actividades:AngularFireList<any>;
  search
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
  
  myInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, private storage: Storage) {
<<<<<<< HEAD
    this.actividades = afDatabase.list('/actividades');
=======
  this.search_items.push ({thumb: "assets/imgs/santiago_iglesia.jpg", title: "Pueblo Mágico de Santiago", subtitle: "en Santiago, N.L."});
  this.search_items.push ({thumb: "assets/imgs/cueva_murcielagos.jpg", title: "Cueva de los Murcielagos", subtitle: "en Santiago, N.L."});
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
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
