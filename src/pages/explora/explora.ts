import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  selector: 'page-explora',
  templateUrl: 'explora.html',
})

export class ExploraPage {

  topAtraction: Array<{imageName: string, headerText: string, subText: string, stars: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private app: App) {

    this.topAtraction.push({imageName: "assets/imgs/cena_1.jpg", headerText: "Classic Romantic", subText: "Disfruta de una cena romántica clásica en la parisienne. Podrán disfruta de música en vivo, vino, cena... Ver mas", stars: "100"})
    this.topAtraction.push({imageName: "assets/imgs/bici_2.jpg", headerText: "Cita en Bici", subText: "Disfruta de una cena romántica clásica en la parisienne. Podrán disfruta de música en vivo, vino, cena... Ver mas", stars: "500"})
    this.topAtraction.push({imageName: "assets/imgs/paracaidas_3.jpg", headerText: "Aventura Extrema", subText: "Disfruta de una cena romántica clásica en la parisienne. Podrán disfruta de música en vivo, vino, cena... Ver mas", stars: "455"})
    this.topAtraction.push({imageName: "assets/imgs/mar_4.jpg", headerText: "A la Orilla del Mar", subText: "Disfruta de una cena romántica clásica en la parisienne. Podrán disfruta de música en vivo, vino, cena... Ver mas", stars: "1000"})

  }

  cardNav(){
    this.toastCtrl.create({
      message: "CLICK!", 
      duration: 3000
    }).present();
  }

<<<<<<< HEAD
  categoriaNav(catUrl: string){
=======
  categoriaNav(catUrl: string, color: string){
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
    // this.navCtrl.push(CategoriaPage, {
    //   data: catUrl
    // },
    // {
    //   animate: true,
    //   animation: "bounce",
    //   direction: "forward"
    // });

    let nav = this.app.getRootNav();
    nav.push(CategoriaPage, {
<<<<<<< HEAD
      data: catUrl
=======
      data: {
        catUrl,
        color
      }
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
    },
    {
      animate: true,
      animation: "bounce",
      direction: "forward"
    });
  }

}
