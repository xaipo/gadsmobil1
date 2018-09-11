import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fiestas',
  templateUrl: 'fiestas.html',
})
export class FiestasPage {
  value:any;
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiestasPage');
  }

}
