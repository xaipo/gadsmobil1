import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { GeneralDataProvider } from "../../providers/general-data/general-data";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [GeneralDataProvider]
})
export class MenuPage {

  allData: any = [];
  allDataBK: any = [];
  data: any = {};
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private generalProvider: GeneralDataProvider, private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    this.generalProvider.load()
      .then(data => {
        //
        this.allDataBK = [];
        this.data = data;
        var n = this.data.length;
        this.allDataBK = data;
        this.allData = this.allDataBK;
      });
  }

  cargar() {
    this.allData = this.allDataBK;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.cargar();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.allData = this.allData.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public itemSelected(item) {
    //alert(item.id)
    // alert(this.valueSelected);
    this.navCtrl.push(HomePage, {
      item
    });
  }
}
