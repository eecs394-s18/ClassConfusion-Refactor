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

  addSpecificClass(name) {
    if (name.length === 0) { return; }
    this.classesRef.child(name).once('value', (snapshot) => {
        this.classesRef.child(name); // Create new child...
        this.classesRef.child(name).set(
        {
          name: name,
        });
        this.getClasses(); // Reload the topicList
    });
  }

  editClass(oldName) {
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
              this.classesRef.child(data.newName).once('value', (snapshot) => {
                  // Update the name here
                  this.getClasses(); // Reload the topicList
                  var child = this.classesRef.child(oldName);
                  child.once('value', (snapshot) => {
                    this.removeClass(oldName);
                    this.addSpecificClass(data.newName);
                    this.getClasses();
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


}
