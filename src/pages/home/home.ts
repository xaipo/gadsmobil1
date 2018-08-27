import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AutoridadesPage} from "../autoridades/autoridades";
import {ActividadesPage} from "../actividades/actividades";
import {BarriosPage} from "../barrios/barrios";
import {DatosGeneralesPage} from "../datos-generales/datos-generales";
import {GaleriaPage} from "../galeria/galeria";
import {GastronomiaPage} from "../gastronomia/gastronomia";
import {HistoriaPage} from "../historia/historia";
import {TurismoPage} from "../turismo/turismo";
import {FiestasPage} from "../fiestas/fiestas";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  valueSelected: any;
  valueSelected2:any;
  items: any =[];

  data:any;

  constructor(public navCtrl: NavController,public navParams: NavParams) {



    this.items=[{id:1,value:"Datos Generales"},
      {id:2, value:"Autoridades"},
      {id:3, value:"Barrios/Comunidades"},
      {id:4, value:"Actividades Económicas"},
      {id:5,value:"Gastronomía"},
      {id:6,value:"Turismo"},
      {id:7,value:"Historia"},
      {id:8,value:"Galería"},
      {id:9,value:"Fiestas"},
      ];
    this.valueSelected2 = navParams.get('item');
    //console.log(this.value);


    /*this.generalProvider.load.then(data=>{
      //this.allData = data;

      console.log(allData);
    });
*/

    //this.valueSelected={id:1,value:"Datos Generales"};
  }


  ionViewDidLoad() {





  }

  public itemSelected(item){
    //alert(item.id)
   // alert(this.valueSelected);
    switch (item.id)
    {
      case 1:this.navCtrl.push(DatosGeneralesPage,{
        item:this.valueSelected2
      });break;
      case 2:this.navCtrl.push(AutoridadesPage,{
        item:this.valueSelected2
      });break;
      case 3:this.navCtrl.push(BarriosPage,{
        item:this.valueSelected2
      });break;
      case 4:this.navCtrl.push(ActividadesPage,{
        item:this.valueSelected2
      });break;
      case 5:this.navCtrl.push(GastronomiaPage,{
        item:this.valueSelected2
      });break;
      case 6:this.navCtrl.push(TurismoPage,{
        item:this.valueSelected2
      });break;
      case 7:this.navCtrl.push(HistoriaPage,{
        item:this.valueSelected2
      });break;
      case 8:this.navCtrl.push(GaleriaPage,{
        item:this.valueSelected2
      });break;
      case 9:
        alert(JSON.stringify(this.valueSelected2));
        this.navCtrl.push(FiestasPage,{
        item:this.valueSelected2

      });break;



    }
  }


  public itemSelected2(item){
    //alert(this.valueSelected)

    switch (item.id)
    {
      case 1:this.navCtrl.push(DatosGeneralesPage);break;
      case 2:this.navCtrl.push(AutoridadesPage);break;
      case 3:this.navCtrl.push(BarriosPage);break;
      case 4:this.navCtrl.push(ActividadesPage);break;
      case 5:this.navCtrl.push(GastronomiaPage);break;
      case 6:this.navCtrl.push(TurismoPage);break;
      case 7:this.navCtrl.push(HistoriaPage);break;
      case 8:this.navCtrl.push(GaleriaPage);break;



    }
  }
}
