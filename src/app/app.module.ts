import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';


//Providers n Stuff
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LaunchNavigator } from '../../node_modules/@ionic-native/launch-navigator';

// PAGINAS
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ExploraPage } from '../pages/explora/explora';
import { MapaPage } from '../pages/mapa/mapa';
import { PlannerPage } from '../pages/planner/planner';
import { PerfilPage } from '../pages/perfil/perfil';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { ExpressPage } from '../pages/express/express';
import { CategoriaPage } from '../pages/categoria/categoria';
import { TemplateCards } from '../pages/cards01/cards01';
import { FilterPage } from '../pages/filter/filter';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { FacturasPage } from '../pages/facturas/facturas';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { LogrosPage } from '../pages/logros/logros';
import { ActividadPage } from '../pages/actividad/actividad';
import { CalendarioPage } from '../pages/calendario/calendario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ExploraPage,
    MapaPage,
    PerfilPage,
    BusquedaPage,
    ExpressPage,
    TabsPage,
    PlannerPage,
    CategoriaPage,
    TemplateCards,
    FilterPage,
    EditarPerfilPage,
    ConfiguracionPage,
    FacturasPage,
    FavoritosPage,
    LogrosPage,
    ActividadPage,
    CalendarioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ExploraPage,
    MapaPage,
    PerfilPage,
    BusquedaPage,
    ExpressPage,
    TabsPage,
    PlannerPage,
    CategoriaPage,
    TemplateCards,
    FilterPage,
    EditarPerfilPage,
    ConfiguracionPage,
    FacturasPage,
    FavoritosPage,
    LogrosPage,
    ActividadPage,
    CalendarioPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    LaunchNavigator,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
