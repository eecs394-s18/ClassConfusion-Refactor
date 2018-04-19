import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";



@IonicPage()
@Component({
  selector: 'page-lectures-s',
  templateUrl: 'lectures-s.html',
})
export class LecturesSPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturesSPage');
  }

  navigateToResultsPage(): void {
   		this.navCtrl.push(ResultsPage);
	}


}
