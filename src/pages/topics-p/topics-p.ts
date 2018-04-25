import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import { HomePage } from '../home/home'
import { ManagePPage } from '../manage-p/manage-p';

@IonicPage()
@Component({
  selector: 'page-topics-p',
  templateUrl: 'topics-p.html',
})
export class TopicsPPage {

  topicList: Array<any> = [];
  newTopic = '';
  lectureName = '';
  className = '';
  topicsRef: any; // Reference that is frequenly used
  topicsReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

  	this.lectureName = navParams.get('currLec');
  	this.className = navParams.get('currClass');

    console.log('CURRENT LECTURE: ' + this.lectureName)
    console.log('CURRENT CLASS: ' + this.className)

    this.topicsRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
    this.getTopics(); // load up the lecture list
  }

  ionViewDidLoad() {
  		// not working for some weird reason
  	    // document.getElementById('currLecture').innerHTML = this.navParams.get('currLec');
  	    document.getElementById('currClass').innerHTML = this.className;
  }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  navigateToManagePPage(): void {
    this.navCtrl.push(ManagePPage);
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
    this.topicList = [];
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val());
      });
    });
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
                    this.addSpecificTopic(data.newName, votes);
                    this.getTopics();
                  });
                }
              });
            }
            else // Nothing entered; do nothing
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
    this.getTopics();
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
