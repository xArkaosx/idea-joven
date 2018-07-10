import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  options: Array<{my_option: string, icon_option: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.options.push({my_option: "Editar perfil", icon_option: "brush"});
    this.options.push({my_option: "Mis logros", icon_option: "star"});
    this.options.push({my_option: "Favoritos", icon_option: "heart"});
    this.options.push({my_option: "Pagos y facturas", icon_option: "cash"});
    this.options.push({my_option: "Configuración", icon_option: "cog"});
    this.options.push({my_option: "Cerrar sesión", icon_option: "log-out"});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  optionSelected(opt) {
    console.log("Option: " + opt);
  }

}
