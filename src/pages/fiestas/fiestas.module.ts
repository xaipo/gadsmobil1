import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiestasPage } from './fiestas';

@NgModule({
  declarations: [
    FiestasPage,
  ],
  imports: [
    IonicPageModule.forChild(FiestasPage),
  ],
})
export class FiestasPageModule {}
