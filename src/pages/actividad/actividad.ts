import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ScrollHideConfig } from '../../components/scroll-hide/scroll-directive';
// import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  CameraPosition,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  MarkerOptions,
  Polyline,
  PolylineOptions
} from '@ionic-native/google-maps';
import { PagarPage } from '../pagar/pagar';


@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class ActividadPage {

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 49 };

  status: boolean = true;
  public showMore = false;
  public mostrar = 'Mostrar más';
  public icon = 'arrow-dropdown'
  staticMap: string = "assets/imgs/Actividad01.jpg";

  markersLocations: Array<{ lat: number, lng: number }> = [];
  markersLatLngLocations: Array<{ coords: any }> = [];

  @ViewChild('map') mapRef: ElementRef;
  public map: GoogleMap;

  lat: any;
  lng: any;

  myMarker: Marker;
  myMarkerOptions: MarkerOptions;

  // lat: any;
  // lng: any;

  // myMarker: Marker;
  // myMarkerOptions: MarkerOptions;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    // private geo: Geolocation, 
    private googleMaps: GoogleMaps,
    private launchNavigator: LaunchNavigator) {

    //casa con chucherias 25.425180, -100.153369
    //casa azul 25.424928, -100.152565
    //daniela viendo pinturas 25.423939, -100.152028
    //dinosaurio 25.423775, -100.152543
    //fuente chidori 25.423871, -100.152833
    //caritas en la pared 25.423678, -100.152768

    this.markersLocations.push({ lat: 25.425180, lng: -100.153369 });
    this.markersLocations.push({ lat: 25.424928, lng: -100.152565 });
    this.markersLocations.push({ lat: 25.423939, lng: -100.152028 });
    this.markersLocations.push({ lat: 25.423775, lng: -100.152543 });
    this.markersLocations.push({ lat: 25.423871, lng: -100.152833 });
    this.markersLocations.push({ lat: 25.423678, lng: -100.152768 });

  }

  // ionViewDidLeave() {
  //   this.map.setVisible(false);
  // }

  // ionViewDidEnter() {
  //   this.map.setVisible(true);
  // }

  ionViewDidLoad() {
    // this.staticMap = 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=color:red%7Clabel:1%7C25.425180,-100.153369&markers=color:red%7Clabel:2%7C25.424928,-100.152565&key=AIzaSyD7aZdW8ix5vUAjXqQxigxNzFeO_5B4jI4';
    // this.status = true;
    // let loc: LatLng
    // this.initMap();

    // //once the map is ready move the camera into position
    // this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //   this.map.setClickable(true);
    //   this.map.setOptions({
    //     controls: {
    //       'compass': false,
    //       'myLocationButton': false,
    //       'myLocation': false,   // (blue dot)
    //       'indoorPicker': false,
    //       'zoom': false,          // android only
    //       'mapToolbar': false     // android only
    //     },
    //     gestures: {
    //       scroll: true,
    //       tilt: false,
    //       zoom: false,
    //       rotate: false
    //     },
    //     padding: {
    //       left: 10,
    //       top: 10,
    //       bottom: 10,
    //       right: 10
    //     }
    //   });
    //   this.map.setMyLocationEnabled(false);


    //   for (let mrkr of this.markersLocations) {
    //     loc = new LatLng(mrkr.lat, mrkr.lng);
    //     // this.markersLatLngLocations.push({ coords: loc });
    //     let options: MarkerOptions = {
    //       position: loc,
    //       animation: 'DROP',
    //       draggable: false,
    //       clickable: true
    //       //falta agregar custom icon
    //     }
    //     this.map.addMarker(options).then((marker: Marker) => {

    //       marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(data => {
    //         this.launchNavigator.navigate([data.lat, data.lng]).then(
    //           success => console.log('Launched navigator'),
    //           error => console.log('Error launching navigator', error)
    //         );
    //         console.log('marker clicked!');
    //       })
        
    //     });
    //   }

    //   this.moveCamera();
    // }).catch(err => {
    //   console.log(err);
    //   alert("ERROR -> " + err);
    // });

    // let options: PolylineOptions = {
    //   points: this.markersLocations,
    //   color: '#2c69ec',
    //   width: 5,
    //   geodesic: true,
    //   clickable: false
    // };
    // this.map.addPolyline(options).then((polyline: Polyline) => {
    //   //STUFF TO DO WITH POLYLINE
    // });

    //NOT WORKING
    // this.map.on(GoogleMapsEvent.MARKER_CLICK).subscribe((latlng: LatLng) => {
    //   console.log("CLICK");
    //   alert("CLICK");
    //   this.launchNavigator.navigate([latlng.lat, latlng.lng]).catch(err => {
    //     console.log(err);
    //   });
    // });

    // this.map.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe((latLng: LatLng) => {

    //   console.log("CLICK");
    //   this.launchNavigator.navigate([this.markersLatLngLocations[1].coords]).catch(err => {
    //     console.log(err);
    //   });
    // });

  }

  // initMap() {
  //   let element = this.mapRef.nativeElement;

  //   let mapOptions: GoogleMapOptions = {
  //     controls: {
  //       compass: true,
  //       mapToolbar: true
  //     }
  //   };

  //   this.map = GoogleMaps.create(element, mapOptions);

  // }

  // addMarker(position, map) {
  //   if (this.myMarker != null) {
  //     this.myMarker.setPosition(position);
  //   } else {
  //     return new google.maps.Marker({
  //       position,
  //       map
  //     });
  //   }
  // }

  // moveCamera() {
  //   let options: CameraPosition<any> = {
  //     target: this.markersLocations
  //   };
  //   this.map.moveCamera(options);
  // }

  showHide() {
    this.showMore = !this.showMore;

    if (this.showMore) {
      this.icon = 'arrow-dropup';
      this.mostrar = 'mostrar menos';
    } else {
      this.icon = 'arrow-dropdown';
      this.mostrar = 'mostrar más';
    }
  }

  goToPay(){
    this.navCtrl.push(PagarPage);
  }
}
