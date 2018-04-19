import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LecturesSPage} from "../lectures-s/lectures-s";


@IonicPage()
@Component({
  selector: 'page-classes-s',
  templateUrl: 'classes-s.html',
})
export class ClassesSPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesSPage');
  }

  navigateToLecturesSPage(): void {
   		this.navCtrl.push(LecturesSPage);
	}


}
