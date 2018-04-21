import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';


@IonicPage()
@Component({
  selector: 'page-topics-p',
  templateUrl: 'topics-p.html',
})
export class TopicsPPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

  	this.lectureName = navParams.get('currLec');
  	this.className = navParams.get('currClass');
    console.log(this.lectureName)
    console.log(this.className)
    this.topicsRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
    this.getTopics(); // load up the lecture list
    this.topicsCheckedMap = new Map([]);
  }

  topicList: Array<any> = [];
  newTopic = '';
  lectureName = '';
  className = '';
  topicsRef: any; // Reference that is frequenly used
  topicsReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  topicsCheckedMap: Map<string, boolean>;


  ionViewDidLoad() {
  		// not working for some weird reason
  	    // document.getElementById('currLecture').innerHTML = this.navParams.get('currLec');
  	    document.getElementById('currClass').innerHTML = this.className;
  }

  // this may take topicName or something but I'm picturing the next page with graphs per lecture
  navigateToResultsForThisLecture(lectureName): void {
       var currLecture = lectureName;
       this.navCtrl.push(ResultsPage, {
         currLec: currLecture
       });
    }

  getTopics() {
    this.topicsReady = false;
    this.topicList = []; // this doesn't work - wipe to prevent duplicates from appearing
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val());
      });
    });
    console.log(this.topicList)
    console.log("[Alert] Retrieved topics from Firebase.");
    this.topicsReady = true; // Now ready to display...
  }

  addTopics() {
    if (this.newTopic.length === 0) { return; } // Fix for issue #5
    this.topicsRef.child(this.newTopic).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.topicsReady = false;
        this.firebaseProvider.addTopics(this.className, this.lectureName, this.newTopic);
        this.newTopic = ""; // empty out the new class field
        this.getTopics();
      }
    });

  }

  updateVote(topicName) {
    this.setStatus(topicName);
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

  removeTopics(topicName) {
    this.topicsReady = false;
    this.firebaseProvider.removeTopics(this.className, this.lectureName, topicName);
    this.topicsCheckedMap.delete(topicName);
    this.getTopics();
  }

  setStatus(topicName) {
    var currentStatus = this.topicsCheckedMap.get(name);
    if (currentStatus) // If not first time, just flip the status
    {
      this.topicsCheckedMap.set(name, !currentStatus);
    }
    else // First time
    {
      this.topicsCheckedMap.set(name, true);
    }
  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
