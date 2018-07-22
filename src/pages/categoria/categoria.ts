import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController  } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FilterPage } from '../filter/filter';
import { ActividadPage } from '../actividad/actividad';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

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
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

  goToActivity(){
    this.navCtrl.push(ActividadPage, {
      animate: true,
      animation: "bounce",
      direction: "forward",
    });
  }
}
