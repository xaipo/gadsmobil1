import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutoridadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autoridades',
  templateUrl: 'autoridades.html',
})
export class AutoridadesPage {
  value: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoridadesPage');
  }

}
