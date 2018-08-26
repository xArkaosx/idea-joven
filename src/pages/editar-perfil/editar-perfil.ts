import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilPage } from '../perfil/perfil';
import { Profile } from '../../models/profile';
import { storage, initializeApp} from 'firebase';
import { FIREBASE_CONFIG } from '../../app/app.firebase.config';
import { Camera, CameraOptions, MediaType } from "@ionic-native/camera";
import { Firebase } from '@ionic-native/firebase';


@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  profile = {} as Profile;  

  constructor(private firebase: Firebase, private camera: Camera, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      initializeApp(FIREBASE_CONFIG);
  }

  popPage(){
    this.navCtrl.pop({
      animate: true,
      animation: "bounce",
      direction: "back"
    })
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.popPage())
    })
  }

  async takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;

      const pictures = storage().ref('pictures');
      pictures.putString(image, 'data_url');
    }
    catch (e) {
      console.error(e);
    }
  }

}
