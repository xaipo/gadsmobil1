import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {GeneralDataProvider} from "../../providers/general-data/general-data";

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
  providers:[GeneralDataProvider]
})
export class MenuPage {
  allData:any=[] ;
  data:any={} ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private generalProvider:GeneralDataProvider,private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {

    this.generalProvider.load()
      .then(data => {
        //
        this.allData=[];

        this.data = data;

        var n= this.data.length;
        for(var i=0; i<n;i++){

          this.allData.push(this.data[i]);

        }


      });
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }


  public itemSelected(item){
    //alert(item.id)
    // alert(this.valueSelected);

    this.navCtrl.push(HomePage,{
       item
      });

  }
}
