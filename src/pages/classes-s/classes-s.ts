import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LecturesSPage} from "../lectures-s/lectures-s";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';


// IMPORTANT
// right now, this is implemented as though a student has "added these classes to their schedule",
// basically they can only view and click the lists of classes. can't add or delete.

@IonicPage()
@Component({
  selector: 'page-classes-s',
  templateUrl: 'classes-s.html',
})
export class ClassesSPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.classesRef =  this.fbApp.database().ref('/classes/');
    this.getClasses(); // load up the topicList
    this.checkedMap = new Map([]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesSPage');
  }

  navigateToLecturesSPage(): void {
   		this.navCtrl.push(LecturesSPage);
	}

  // navigate to lecture page for that class by pushing next page and class name
  navigateToLecturesForThisClassStudent(className): void {
       var currClass = className;
       this.navCtrl.push(LecturesSPage, {
         param1: currClass
       });
       console.log(className);
    }


  // EVERYTHING FOR ADDING CLASSES INITIALLY
  classList: Array<any> = [];
  newClass = '';
  classesRef: any; // Reference that is frequenly used
  ready: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  checkedMap: Map<string, boolean>;

  // I think this is something to do with pushing on the full list every time
  // Something with how get classes is called at the end of addclasses and remove classes
  // if we take it away we end up with an empty list
  getClasses() {
    console.log('GETCLASSES CALLED')
    // console.log(this.classList);
    this.ready = false;
    this.classList = [];
    this.classesRef.on('value', (snapshot) => {
        snapshot.forEach((child) => {
            // console.log(child.val())
            this.classList.push(child.val());

            });

      });
    console.log(this.classList);
    console.log("[Alert] Retrieved classes from Firebase.");
    this.ready = true; // Now ready to display...
   }


  // addClass() {
  //   console.log('ADD CLASS CALLED')
  //   // this.classList = [];
  //   if (this.newClass.length === 0) { return; } // Fix for issue #5
  //   this.classesRef.child(this.newClass).once('value', (snapshot) => {
  //     if (snapshot.exists()) {
  //       this.presentAlert();
  //     }
  //     else {
  //       this.ready = false;
  //       this.firebaseProvider.addClass(this.newClass);
  //       this.newClass = ""; // empty out the new class field
  //       this.getClasses();
  //     }
  //   });

  // }

  // removeClass(name) {
  //   console.log('REMOVE CLASS CALLED')
  //   // this.classList = [];
  //   this.ready = false;
  //   this.firebaseProvider.removeClass(name);
  //   this.checkedMap.delete(name);
  //   this.getClasses();
  // }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }



}
