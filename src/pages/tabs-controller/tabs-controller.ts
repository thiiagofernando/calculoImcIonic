import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculoImcPage } from '../calculo-imc/calculo-imc';
import { InfoPage } from '../info/info';
import { PrivacidadePage } from '../privacidade/privacidade';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CalculoImcPage;
  tab2Root: any = InfoPage;
  tab3Root: any = PrivacidadePage;
  constructor(public navCtrl: NavController) {
  }
  
}
