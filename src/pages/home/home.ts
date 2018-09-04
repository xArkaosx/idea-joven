import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TemplateCards } from '../cards01/cards01';
import { CategoriaPage } from '../categoria/categoria';
import { ActividadPage } from '../actividad/actividad';
import { PagarPage } from '../pagar/pagar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 
  Aventura: boolean;
  Aventuras: Array<{imageName: string, headerText: string, subText: string, megusta: string, tag: string}> = [];
  Gastronomia: Array<{imageName: string, headerText: string, subText: string, megusta: string, tag: string}> = [];
  Souvenir: Array<{imageName: string, headerText: string, subText: string, megusta: string, tag: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private toast: ToastController, private app: App) {
    this.Aventuras.push({imageName: "assets/imgs/Aventura01.jpg", headerText: "Sábado Extremo", subText: "Una experiencia para los amantes de los deportes extremos.", megusta: "3750", tag: "Experiencias"})
    this.Aventuras.push({imageName: "assets/imgs/Aventura02.jpg", headerText: "Cueva de Murcielagos", subText: "Salen a cazar aproximadamente alrededor de las 8:10 pm.", megusta: "11k", tag: "Experiencias"})
    this.Aventuras.push({imageName: "assets/imgs/Aventura03.jpg", headerText: "Presa de la Boca", subText: "Tiene una asombrosa vista donde puedes ir a pasar el tiempo.", megusta: "6204", tag: "Experiencias"})

    this.Gastronomia.push({imageName: "assets/imgs/enchiladas.jpg", headerText: "La Caprichosa", subText: "Comida casera méxicana con el toco de abuela.", megusta: "15k", tag: "Gastronomía"})
    this.Gastronomia.push({imageName: "assets/imgs/Gastronomia02.jpg", headerText: "Paletas Frutales", subText: "Paletas con sabor a frutas frescas y exoticas.", megusta: "10k", tag: "Gastronomía"})
    this.Gastronomia.push({imageName: "assets/imgs/Gastronomia03.jpg", headerText: "Paletas de Nieve", subText: "Paletas de nieve para disfrutarse en verano.", megusta: "7804", tag: "Gastronomía"})

    this.Souvenir.push({imageName: "assets/imgs/Cultura_03.png", headerText: "Museo Historia Mexicana", subText: "Visita el museo más grande e icónico de Monterrey.", megusta: "1941", tag: "Cultura"})
    this.Souvenir.push({imageName: "assets/imgs/Cultura_02.jpg", headerText: "Casa de La Cultura", subText: "Recorre sus pasillos para recordar los lugares más icónicos de Santiago.", megusta: "8901", tag: "Cultura"})
    this.Souvenir.push({imageName: "assets/imgs/Cultura_01.jpg", headerText: "Pueblo Mágico", subText: "Viaja al pasado conociendo la cultura de Santiago.", megusta: "13k", tag: "Cultura"})
  }
  /*
    ionViewWillEnter(){
     this.afAuth.authState.subscribe(data => {
       if(data && data.email && data.uid) {
       this.toast.create({
         message: "Welcome to APP_NAME, ${data.email}", 
         duration: 3000
       }).present();
      }
      else {
        this.toast.create({
          message: "Could not find authentication email", 
          duration: 3000
        }).present();
      }
     });
    }
    else {
      this.toast.create({
        message: "Could not find authentication email", 
        duration: 3000
      }).present();
    }
   });
  }
*/

  //------------------------  Objetos para cada carta -------------------------------
  Categorias(catUrl: string, color: string) {
    let nav = this.app.getRootNav();
    nav.push(CategoriaPage, {
      data: {
        catUrl,
        color
      }
    },
    {
      animate: true,
      animation: "bounce",
      direction: "forward"
    });
  }
    
  Recomendados() {
    let nav = this.app.getRootNav()
    nav.push(TemplateCards, {
    });
  }

  goToActivity(){
    let nav = this.app.getRootNav();
    nav.push(ActividadPage,
    {
      animate: true,
      animation: "bounce",
      direction: "forward"
    });
  }

}

