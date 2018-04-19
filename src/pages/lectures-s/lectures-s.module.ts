import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturesSPage } from './lectures-s';

@NgModule({
  declarations: [
    LecturesSPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturesSPage),
  ],
})
export class LecturesSPageModule {}
