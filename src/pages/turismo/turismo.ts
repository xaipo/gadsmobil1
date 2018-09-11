import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TurismoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turismo',
  templateUrl: 'turismo.html',
})
export class TurismoPage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurismoPage');
  }

}
