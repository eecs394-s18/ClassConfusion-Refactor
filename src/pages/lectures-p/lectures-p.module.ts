import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturesPPage } from './lectures-p';

@NgModule({
  declarations: [
    LecturesPPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturesPPage),
  ],
})
export class LecturesPPageModule {}
