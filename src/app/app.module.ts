import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AutoridadesPage} from "../pages/autoridades/autoridades";
import {ActividadesPage} from "../pages/actividades/actividades";
import {BarriosPage} from "../pages/barrios/barrios";
import {DatosGeneralesPage} from "../pages/datos-generales/datos-generales";
import {GaleriaPage} from "../pages/galeria/galeria";
import {GastronomiaPage} from "../pages/gastronomia/gastronomia";
import {HistoriaPage} from "../pages/historia/historia";
import {TurismoPage} from "../pages/turismo/turismo";
import { GeneralDataProvider } from '../providers/general-data/general-data';
import { Geolocation } from '@ionic-native/geolocation';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutoridadesPage,
    ActividadesPage,
    BarriosPage,
    DatosGeneralesPage,
    GaleriaPage,
    GastronomiaPage,
    HistoriaPage,
    TurismoPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AutoridadesPage,
    ActividadesPage,
    BarriosPage,
    DatosGeneralesPage,
    GaleriaPage,
    GastronomiaPage,
    HistoriaPage,
    TurismoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeneralDataProvider,
    Geolocation,
    DataProvider
  ]
})
export class AppModule {}
