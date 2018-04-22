import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import {ClassesSPage} from '../classes-s/classes-s';
import {TopicsSPage} from "../topics-s/topics-s"
import {HomePage} from "../home/home"

@IonicPage()
@Component({
  selector: 'page-lectures-s',
  templateUrl: 'lectures-s.html',
})
export class LecturesSPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.className = navParams.get('param1');
    console.log(this.className)
    this.lecturesRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/');
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
    // document.getElementById('currClass').innerHTML = this.className;
  }


  navigateToResultsPage(): void {
   		this.navCtrl.push(ResultsPage);
	}


  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  navigateToTopicsForThisLectureStudent(lectureName): void {
       var currLecture = lectureName;
       var currClass = this.className;
       this.navCtrl.push(TopicsSPage, {
         currLec: currLecture,
         currClass: currClass
       });
       console.log('Lecture we clicked: ' + currLecture);
    }


  getLectures() {
    this.lecturesReady = false;
    this.lectureList = []; // this doesn't work - wipe to prevent duplicates from appearing
    this.lecturesRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.lectureList.push(child.val());
      });
    });
    console.log(this.lectureList)
    console.log("[Alert] Retrieved lectures from Firebase.");
    this.lecturesReady = true; // Now ready to display...
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }



}
