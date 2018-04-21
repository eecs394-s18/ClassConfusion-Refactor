import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsPPage } from './topics-p';

@NgModule({
  declarations: [
    TopicsPPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsPPage),
  ],
})
export class TopicsPPageModule {}
