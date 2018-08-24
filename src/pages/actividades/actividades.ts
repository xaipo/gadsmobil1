import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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

  value:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
               private platform : Platform) {

    this.value = navParams.get('item');
    console.log(this.value);



  }

  ionViewDidLoad() {




  }

}
