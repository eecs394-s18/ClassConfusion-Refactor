import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import {HomePage} from '../home/home'

@IonicPage()
@Component({
  selector: 'page-topics-s',
  templateUrl: 'topics-s.html',
})
export class TopicsSPage {
  topicList: Array<any> = [];
  newTopic = '';
  lectureName = '';
  className = '';
  topicsRef: any; // Reference that is frequenly used
  topicsReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  topicsCheckedMap: Map<string, boolean>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
  	this.lectureName = navParams.get('currLec');
  	this.className = navParams.get('currClass');
    console.log('CURRENT LECTURE: ' + this.lectureName)
    console.log('CURRENT CLASS: ' + this.className)
    this.topicsRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
    this.getTopics(); // load up the lecture list
    this.topicsCheckedMap = new Map([]);
  }

  // buggy
  ionViewDidLoad() {
  		// not working for some weird reason
  	  // document.getElementById('currLecture').innerHTML = this.navParams.get('currLec');
  	  // document.getElementById('currClass').innerHTML = this.className;
  }

  // this may take topicName or something but I'm picturing the next page with graphs per lecture
  navigateToResultsForThisLectureStudent(): void {
       var currLecture = this.lectureName;
       var currClass = this.className;
       this.navCtrl.push(ResultsPage, {
         currLec: currLecture,
         currClass: currClass
       });
    }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  getTopics() {
    this.topicsReady = false;
    this.topicList = []; // this doesn't work - wipe to prevent duplicates from appearing
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val());
      });
    });
    console.log("[Alert] Retrieved topics from Firebase.");
    this.topicsReady = true; // Now ready to display...
  }

  updateVote(topicName) {
    var currentStatus = this.topicsCheckedMap.get(topicName);
    if (currentStatus != undefined) // If not first time, just flip the status
    {
      this.topicsCheckedMap.set(topicName, !currentStatus);
    }
    else // First time
    {
      this.topicsCheckedMap.set(topicName, true);
    }

    var voteChange = 0;
    if (this.topicsCheckedMap.get(topicName)) { voteChange = 1; }
    else { voteChange = -1; }

    var topicRef = this.topicsRef.child(topicName);
    topicRef.transaction(function(currentTopic) {
      currentTopic.voteCount += voteChange;
      return currentTopic;
    });
    this.getTopics();
  }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
