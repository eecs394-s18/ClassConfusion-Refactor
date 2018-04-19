import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";


@IonicPage()
@Component({
  selector: 'page-lectures-p',
  templateUrl: 'lectures-p.html',
})
export class LecturesPPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturesPPage');
  }

  navigateToResultsPage(): void {
   		this.navCtrl.push(ResultsPage);
	}


}
