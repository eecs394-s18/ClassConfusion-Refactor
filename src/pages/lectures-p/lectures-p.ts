import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import {ManagePPage} from '../manage-p/manage-p';


@IonicPage()
@Component({
  selector: 'page-lectures-p',
  templateUrl: 'lectures-p.html',
})
export class LecturesPPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

    this.className = navParams.get('param1');
    console.log(this.className)
    this.lecturesRef =  this.fbApp.database().ref('/classes' + this.className + '/lectures/');
    this.getLectures(); // load up the lecture list
    this.lecturesCheckedMap = new Map([]);
  }

  lectureList: Array<any> = [];
  newLecture = '';
  className = '';
  lecturesRef: any; // Reference that is frequenly used
  lecturesReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  lecturesCheckedMap: Map<string, boolean>;


  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturesPPage');
  }

  navigateToResultsPage(): void {
   		this.navCtrl.push(ResultsPage);
	}


  getLectures() {
    this.lecturesReady = false;
    this.lectureList = []; // this doesn't work - wipe to prevent duplicates from appearing
    this.lecturesRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.lectureList.push(child.val());
      });
    });
    console.log("[Alert] Retrieved lectures?? from Firebase.");
    this.lecturesReady = true; // Now ready to display...
  }

  addLectures() {
    if (this.newLecture.length === 0) { return; } // Fix for issue #5
    this.lecturesRef.child(this.newLecture).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.lecturesReady = false;
        this.firebaseProvider.addLectures(this.className, this.newLecture);
        this.newLecture = ""; // empty out the new class field
        this.getLectures();
      }
    });

  }

  removeLectures(lectureName) {
    this.lecturesReady = false;
    this.firebaseProvider.removeLectures(this.className, lectureName);
    this.lecturesCheckedMap.delete(lectureName);
    this.getLectures();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
