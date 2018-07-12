import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ExploraPage } from '../explora/explora';
import { BusquedaPage } from '../busqueda/busqueda';
//import { MapaPage } from '../mapa/mapa';
import { PlannerPage } from '../planner/planner';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any = HomePage;
  tab2Root:any = ExploraPage;
  tab3Root:any = BusquedaPage;
  tab4Root:any = PlannerPage;
  tab5Root:any = PerfilPage;
  
  myIndex: number;
  valueforngif=true;

  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;  
  }
}