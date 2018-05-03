import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LecturesSPage} from "../lectures-s/lectures-s";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import {HomePage} from '../home/home'

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

  // EVERYTHING FOR ADDING CLASSES INITIALLY
  classList: Array<any> = [];
  fullClassList: Array<any> = [];
  newClass = '';
  classesRef: any; // Reference that is frequenly used
  ready: boolean = false; // Check if topics are retrieved before loading list of checkboxes
  checkedMap: Map<string, boolean>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesSPage');
  }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  navigateToLecturesSPage(): void {
   		this.navCtrl.push(LecturesSPage);
	}

  // navigate to lecture page for that class by pushing next page and class name
  async navigateToLecturesForThisClassStudent(className){ //TODO: Make this async
  console.log("ok, entering function");
  try {
    var currClass = await className;

    if (this.ready) {
      this.navCtrl.push(LecturesSPage, {
        param1: currClass
      });
    }


  } catch(e) {
    console.error(e);
  }
  }

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
            this.fullClassList.push(child.val());
            });

      });
    console.log(this.classList);
    console.log("[Alert] Retrieved classes from Firebase.");
    this.ready = true; // Now ready to display...
   }

   doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getClasses();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
    let val = ev.target.value;
    console.log(val);
    this.classList.filter((item) => {
        console.log(item.name);
    });

    if (val) {
      try {
        this.classList = this.fullClassList.filter((item) => {
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
      for (let i=0; i<this.fullClassList.length; i++) {
        if (i < this.classList.length-1) {
          this.classList[i] = this.fullClassList[i];
        }
        else {
          this.classList.push(this.fullClassList[i]);
        }
      }
      return this.classList;
    }
  }


}
