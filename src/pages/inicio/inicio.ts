import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('inicio')
      .then(data => {
        if (data == '1') {
          this.navCtrl.push(MenuPage);
        }
      },
        error => console.error(error)
      );
    /*this.storage.get('inicio').then((condition) => {
      console.log(condition);

    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  redirect() {
    // this.navCtrl.push(MenuPage)
    this.nativeStorage.setItem('inicio', '1')
      .then(
        () => this.navCtrl.push(MenuPage),
        error => console.error('Error storing item', error)
      );


  }

}
