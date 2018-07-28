import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarconPage } from './garcon';

@NgModule({
  declarations: [
    GarconPage,
  ],
  imports: [
    IonicPageModule.forChild(GarconPage),
  ],
})
export class GarconPageModule {}
