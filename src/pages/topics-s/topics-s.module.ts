import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsSPage } from './topics-s';

@NgModule({
  declarations: [
    TopicsSPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsSPage),
  ],
})
export class TopicsSPageModule {}
