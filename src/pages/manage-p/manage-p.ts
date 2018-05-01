import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LecturesPPage } from "../lectures-p/lectures-p";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
import { HomePage } from '../home/home';

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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePPage');
  }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  navigateToManagePPage(): void {
    this.navCtrl.push(ManagePPage);
  }
  // navigate to lecture page for that class by pushing next page and class name
  navigateToLecturesForThisClass(className): void {
       var currClass = className;
       this.navCtrl.push(LecturesPPage, {
         param1: currClass
       });
       console.log(className);
    }


  // EVERYTHING FOR ADDING CLASSES INITIALLY
  classList: Array<any> = [];
  fullClassList: Array<any> = [];
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
            this.fullClassList.push(child.val());
            });

      });
    console.log(this.classList);

    this.ready = true; // Now ready to display...
   }


  addClass() {
    console.log('ADD CLASS CALLED')
    // this.classList = [];
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
    console.log('REMOVE CLASS CALLED')
    // this.classList = [];
    this.ready = false;
    this.firebaseProvider.removeClass(name);
    this.checkedMap.delete(name);
    this.getClasses();
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
