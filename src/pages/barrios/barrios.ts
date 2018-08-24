import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barrios',
  templateUrl: 'barrios.html',
})
export class BarriosPage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
    console.log(this.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarriosPage');
  }

}
