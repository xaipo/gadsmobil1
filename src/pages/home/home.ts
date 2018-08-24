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
import {GeneralDataProvider}from "../../providers/general-data/general-data"



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[GeneralDataProvider]
})
export class HomePage {

  valueSelected: any;
  valueSelected2:any;
  items: any =[];
   allData:any=[] ;
  data:any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public generalProvider: GeneralDataProvider) {



    this.items=[{id:1,value:"Datos Generales"},
      {id:2, value:"Autoridades"},
      {id:3, value:"Barrios/Comunidades"},
      {id:4, value:"Actividades Económicas"},
      {id:5,value:"Gastronomía"},
      {id:6,value:"Turismo"},
      {id:7,value:"Historia"},
      {id:8,value:"Galería"},
      ];



    /*this.generalProvider.load.then(data=>{
      //this.allData = data;

      console.log(allData);
    });
*/

    this.valueSelected={id:1,value:"Datos Generales"};
  }


  ionViewDidLoad() {


    this.generalProvider.load()
      .then(data => {
        //
        this.allData=[];

          this.data = data;

          var n= this.data.length;
          for(var i=0; i<n;i++){

            this.allData.push({nombre:this.data[i].nombre , value:JSON.stringify(this.data[i])});

          }
          this.valueSelected2={nombre:this.data[0].nombre,value:JSON.stringify(this.data[0])};
          console.log(this.allData);

      });


  }

  public itemSelected(item){
    //alert(item.id)
   // alert(this.valueSelected);
    switch (item.id)
    {
      case 1:this.navCtrl.push(DatosGeneralesPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 2:this.navCtrl.push(AutoridadesPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 3:this.navCtrl.push(BarriosPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 4:this.navCtrl.push(ActividadesPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 5:this.navCtrl.push(GastronomiaPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 6:this.navCtrl.push(TurismoPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 7:this.navCtrl.push(HistoriaPage,{
        item:JSON.parse(this.valueSelected2)
      });break;
      case 8:this.navCtrl.push(GaleriaPage,{
        item:JSON.parse(this.valueSelected2)
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
