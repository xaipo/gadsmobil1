import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaPage');
  }

}
