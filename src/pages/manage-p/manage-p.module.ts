import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePPage } from './manage-p';

@NgModule({
  declarations: [
    ManagePPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagePPage),
  ],
})
export class ManagePPageModule {}
