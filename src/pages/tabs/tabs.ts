import { MesaPage } from './../mesa/mesa';
import { GarconPage } from './../garcon/garcon';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ItemPage } from '../item/item';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GarconPage;
  tab3Root = MesaPage;
  tab4Root = ItemPage

  constructor() {

  }
}
