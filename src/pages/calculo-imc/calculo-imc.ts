import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculo-imc',
  templateUrl: 'calculo-imc.html'
})
export class CalculoImcPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
 public resultado : number;
  constructor(public navCtrl: NavController) {
  }
  calcular(peso,altura) {
    const alturaM = altura / 100
    this.resultado = parseFloat((peso / (alturaM * alturaM)).toFixed(2))
  }
}
