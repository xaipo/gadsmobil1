import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarriosPage } from './barrios';

@NgModule({
  declarations: [
    BarriosPage,
  ],
  imports: [
    IonicPageModule.forChild(BarriosPage),
  ],
})
export class BarriosPageModule {}
