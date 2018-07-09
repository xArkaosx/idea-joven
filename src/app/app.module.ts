import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';

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
    TemplateCards
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    TemplateCards
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
