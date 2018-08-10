import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
=======
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FilterPage } from '../filter/filter';
import { ActividadPage } from '../actividad/actividad';
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

<<<<<<< HEAD
  myCat: string;
  myCatUpper: string;
  categoria: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.myCat = navParams.get('data');
    this.categoria = afDatabase.list(this.myCat);
  }

  popView(){
=======
  placeholder: any;
  myCat: string;
  myCatUpper: string;
  categoria: AngularFireList<any>;
  header_color: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public afDatabase: AngularFireDatabase,
    public popoverCtrl: PopoverController) {
    this.placeholder = navParams.get('data');
    this.myCat = this.placeholder.catUrl;
    this.header_color = this.placeholder.color;
    // this.categoria = afDatabase.list(this.myCat);
  }

  showConsole(){
    console.log(this.categoria);
  }
  
  ionViewDidLoad(){
    this.myCatUpper = this.myCat.charAt(0).toUpperCase() + this.myCat.slice(1);
  }

  filterOptions(){
    const popover = this.popoverCtrl.create(FilterPage);
    popover.present();
  }

  popPage(){
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

<<<<<<< HEAD
  showConsole(){
    console.log(this.categoria);
  }
  
  ionViewDidLoad(){
    this.myCatUpper = this.myCat.charAt(0).toUpperCase() + this.myCat.slice(1);
=======
  goToActivity(){
    this.navCtrl.push(ActividadPage, {
      animate: true,
      animation: "bounce",
      direction: "forward",
    });
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
  }
}
