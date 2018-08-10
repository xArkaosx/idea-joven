import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
<<<<<<< HEAD

=======
import { Camera } from '@ionic-native/camera';

//Providers n Stuff
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
<<<<<<< HEAD

=======
import { GoogleMaps } from '@ionic-native/google-maps';
import { LaunchNavigator } from '../../node_modules/@ionic-native/launch-navigator';

// PAGINAS
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
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
<<<<<<< HEAD


=======
import { FilterPage } from '../pages/filter/filter';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { FacturasPage } from '../pages/facturas/facturas';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { LogrosPage } from '../pages/logros/logros';
import { ActividadPage } from '../pages/actividad/actividad';
import { CalendarioPage } from '../pages/calendario/calendario';
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b

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
<<<<<<< HEAD
    TemplateCards
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
=======
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
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
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
<<<<<<< HEAD
    TemplateCards
=======
    TemplateCards,
    FilterPage,
    EditarPerfilPage,
    ConfiguracionPage,
    FacturasPage,
    FavoritosPage,
    LogrosPage,
    ActividadPage,
    CalendarioPage,

>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
=======
    GoogleMaps,
    LaunchNavigator,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
>>>>>>> 2ac5041dff03b8c7cc5c3f2e411b0bc05e686a4b
