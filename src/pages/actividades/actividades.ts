import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html',
})
export class ActividadesPage {

  value: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {




  }

}
