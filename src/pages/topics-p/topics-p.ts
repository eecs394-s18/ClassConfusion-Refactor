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
    console.log('CURRENT LECTURE: ' + this.lectureName)
    console.log('CURRENT CLASS: ' + this.className)
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
  navigateToResultsForThisLectureProfessor(): void {
       var currLecture = this.lectureName;
       var currClass = this.className;
       this.navCtrl.push(ResultsPage, {
         currLec: currLecture,
         currClass: currClass
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
        this.presentDuplicateAlert();
      }
      else {
        this.topicsReady = false;
        this.firebaseProvider.addTopics(this.className, this.lectureName, this.newTopic);
        this.newTopic = ""; // empty out the new class field
        this.getTopics();
      }
    });

  }

  addSpecificTopic(name, votes) {
    if (name.length === 0) { return; } 
    if (votes <= 1) { votes = 0 }
    this.topicsRef.child(name).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentDuplicateAlert();
      }
      else {
        this.topicsRef.child(name); // Create new child...
        this.topicsRef.child(name).set(
        {
          name: name,
          voteCount: votes,
        });
        this.getTopics(); // Reload the topicList
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

  editTopic(oldName) {
    console.log("Edit topic " + name);
    let alert = this.alertCtrl.create({
      title: 'Change Topic',
      inputs: [
        {
          name: 'newName',
          placeholder: oldName
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            if (data.newName) // Something was entered
            {
              this.topicsRef.child(data.newName).once('value', (snapshot) => {
                if (snapshot.exists()) // Duplicate name; do nothing
                {
                  this.presentDuplicateAlert();
                }
                else 
                {
                  // Update the name here
                  this.getTopics(); // Reload the topicList
                  var child = this.topicsRef.child(oldName);
                  child.once('value', (snapshot) => {
                    var votes = snapshot.val().voteCount;
                    this.removeTopics(oldName);
                    // Update map, if was checked remove vote in the next line
                    
                    this.addSpecificTopic(data.newName, votes);
                    this.getTopics();
                  });
                }
              });
            }
            else // Nothing entered ; do nothing
            {
              let noChangeAlert = this.alertCtrl.create({
                title: 'No topic name entered!',
                subTitle: 'Please try again.',
                buttons: ['Dismiss']
              });
              noChangeAlert.present();
            }
          }
        }
      ]
    });
    alert.present();
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

  presentDuplicateAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      subTitle: 'Please try again.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
