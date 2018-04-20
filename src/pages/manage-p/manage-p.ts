import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LecturesPPage } from "../lectures-p/lectures-p";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';

@IonicPage()
@Component({
  selector: 'page-manage-p',
  templateUrl: 'manage-p.html',
})
export class ManagePPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

    this.classesRef =  this.fbApp.database().ref('/classes/');
    this.getClasses(); // load up the topicList
    this.checkedMap = new Map([]);

    // need this for lectures too

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePPage');
  }

  navigateToLecturesPPage(): void {
   		this.navCtrl.push(LecturesPPage);
	}

  // trying to make a function that will take the name of class clicked on
  // and then either show the current lectures for that class or make a new one
  navigateToLecturesForThisClass(className): void {
       this.navCtrl.push(LecturesPPage);
       console.log(className);
       // document.getElementById('prevClassName').innerHTML = className;

  }


  // EVERYTHING FOR ADDING CLASSES INITIALLY
  classList: Array<any> = [];
  newClass = '';
  classesRef: any; // Reference that is frequenly used
  ready: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  checkedMap: Map<string, boolean>;


  // lectureList: Array<any> = [];
  // newLecture = '';
  // lecturesRef: any; // Reference that is frequenly used
  // lecturesReady: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  // lecturesCheckedMap: Map<string, boolean>;

  getClasses() {
    this.ready = false;
    this.classList = []; // this doesn't work - wipe to prevent duplicates from appearing
    this.classesRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.classList.push(child.val());
      });
    });
    console.log("[Alert] Retrieved classes from Firebase.");
    this.ready = true; // Now ready to display...
  }

  addClass() {
    if (this.newClass.length === 0) { return; } // Fix for issue #5
    this.classesRef.child(this.newClass).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.ready = false;
        this.firebaseProvider.addClass(this.newClass);
        this.newClass = ""; // empty out the new class field
        this.getClasses();
      }
    });

  }

  removeClass(name) {
    this.ready = false;
    this.firebaseProvider.removeClass(name);
    this.checkedMap.delete(name);
    this.getClasses();
  }



 // FOR LECTURES =====================

// getLectures(className) {
//     this.ready = false;
//     this.classList = []; // this doesn't work - wipe to prevent duplicates from appearing
//     this.classesRef.on('value', (snapshot) => {
//       snapshot.forEach((child) => {
//         this.classList.push(child.val());
//       });
//     });
//     console.log("[Alert] Retrieved lectures?? from Firebase.");
//     this.ready = true; // Now ready to display...
//   }

//   addLectures(className) {
//     if (this.newClass.length === 0) { return; } // Fix for issue #5
//     this.classesRef.child(this.newClass).once('value', (snapshot) => {
//       if (snapshot.exists()) {
//         this.presentAlert();
//       }
//       else {
//         this.ready = false;
//         this.firebaseProvider.addClass(this.newClass);
//         this.newClass = ""; // empty out the new class field
//         this.getClasses();
//       }
//     });

//   }

//   removeLectures(className, lectureName) {
//     this.ready = false;
//     this.firebaseProvider.removeLectures(className, lectureName);
//     this.checkedMap.delete(name);
//     this.getLectures(className);
//   }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
