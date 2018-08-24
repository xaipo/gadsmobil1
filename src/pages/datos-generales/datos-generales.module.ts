import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosGeneralesPage } from './datos-generales';

@NgModule({
  declarations: [
    DatosGeneralesPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosGeneralesPage),
  ],
})
export class DatosGeneralesPageModule {}
