import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage} from "../results/results";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import {ManagePPage} from '../manage-p/manage-p';
import {TopicsPPage} from "../topics-p/topics-p"
import {HomePage} from "../home/home"

@IonicPage()
@Component({
  selector: 'page-lectures-p',
  templateUrl: 'lectures-p.html',
})
export class LecturesPPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

    this.className = navParams.get('param1');
    console.log(this.className)
    this.lecturesRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/');
    this.getLectures(); // load up the lecture list
    this.lecturesCheckedMap = new Map([]);

  }

  lectureList: Array<any> = [];
  fullLectureList: Array<any> = [];
  newLecture = '';
  className = '';
  lecturesRef: any; // Reference that is frequenly used
  lecturesReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  lecturesCheckedMap: Map<string, boolean>;

  navigateToManagePPage(): void {
    this.navCtrl.push(ManagePPage);
  }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }


  navigateToTopicsForThisLecture(lectureName): void {
       var currLecture = lectureName;
       var currClass = this.className;
       this.navCtrl.push(TopicsPPage, {
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
        this.fullLectureList.push(child.val());
      });
    });
    console.log(this.lectureList)
    console.log("[Alert] Retrieved lectures from Firebase.");
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

  addSpecificLecture(name) {
    if (name.length === 0) { return; }
    this.lecturesRef.child(name).once('value', (snapshot) => {
        this.lecturesRef.child(name); // Create new child...
        this.lecturesRef.child(name).set(
        {
          name: name,
        });
        this.getLectures(); // Reload the topicList
    });
  }

  editLecture(oldName) {
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
              this.lecturesRef.child(data.newName).once('value', (snapshot) => {
                  // Update the name here
                  this.getLectures(); // Reload the topicList
                  var child = this.lecturesRef.child(oldName);
                  child.once('value', (snapshot) => {
                    this.removeLectures(oldName);
                    this.addSpecificLecture(data.newName);
                    this.getLectures();
                  });
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

  async onInput(ev: any) {
    console.log("printing searchbar event");
    console.log(ev);
    let val = ev.srcElement.value;
    console.log(val);
    this.lectureList.filter((item) => {
        console.log(item.name);
    });

    if (val) {
      try {
        this.lectureList = this.fullLectureList.filter((item) => {
          if (item.name) {
            let currClass = item.name.toLowerCase();
            if (currClass.substring(0,val.length).toLowerCase() == val.toLowerCase()) {
              console.log("items of substring");
              console.log(item);
              return item;
            }
          }
        });
      } catch(err) {
        console.log(val);
        console.log("could not filter classList");
        console.log(err);
      }
    }
    else {
      for (let i=0; i<this.fullLectureList.length; i++) {
        if (i < this.lectureList.length-1) {
          this.lectureList[i] = this.fullLectureList[i];
        }
        else {
          this.lectureList.push(this.fullLectureList[i]);
        }
      }
      return this.lectureList;
    }
  }


}
