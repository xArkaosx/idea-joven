import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
// Páginas
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { LogrosPage } from '../logros/logros';
import { FavoritosPage } from '../favoritos/favoritos';
import { FacturasPage } from '../facturas/facturas';
import { ConfiguracionPage } from '../configuracion/configuracion';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  options: Array<{ my_option: string, icon_option: string }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.options.push({ my_option: "Editar perfil", icon_option: "brush" });
    this.options.push({ my_option: "Mis logros", icon_option: "star" });
    this.options.push({ my_option: "Favoritos", icon_option: "heart" });
    this.options.push({ my_option: "Pagos y facturas", icon_option: "cash" });
    this.options.push({ my_option: "Configuración", icon_option: "cog" });
    this.options.push({ my_option: "Cerrar sesión", icon_option: "log-out" });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  logOut() {
    console.log("Logged Out!");
  }

  goToProfilePage(page: string) {
    if (page == "edit") {
      let nav = this.app.getRootNav();
      nav.push(EditarPerfilPage, {},
        {
          animate: true,
          animation: "bounce",
          direction: "forward"
        });
    }
    else if (page == "logros") {
      let nav = this.app.getRootNav();
      nav.push(LogrosPage, {},
        {
          animate: true,
          animation: "bounce",
          direction: "forward"
        });
    }
    else if (page == "favs") {
      let nav = this.app.getRootNav();
      nav.push(FavoritosPage, {},
        {
          animate: true,
          animation: "bounce",
          direction: "forward"
        });
    }
    else if (page == "pagos") {
      let nav = this.app.getRootNav();
      nav.push(FacturasPage, {},
        {
          animate: true,
          animation: "bounce",
          direction: "forward"
        });
    }
    else if (page == "config") {
      let nav = this.app.getRootNav();
      nav.push(ConfiguracionPage, {},
        {
          animate: true,
          animation: "bounce",
          direction: "forward"
        });
    }
  }
}
