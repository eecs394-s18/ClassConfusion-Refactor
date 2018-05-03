import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import {ManagePPage} from "../manage-p/manage-p";
import {ClassesSPage } from "../classes-s/classes-s"

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  presentAlert(error) {
    let alert = this.alertCtrl.create({
      title: error,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  navigateToRegistrationPage(): void {
    this.navCtrl.push(RegisterPage);
  }

  navigateToCorrectHomePage(email): void {
     var inputEmail = email;
     if (email == null) { return; }
     var profOrStudent = "";

     if (inputEmail.substr(inputEmail.length - 17) == "@northwestern.edu") // Professor
     {
       profOrStudent = "Professor";
       this.navCtrl.push(ManagePPage, {
         currEmail: email,
         profOrStudent: profOrStudent
       });
     }
     else
     {
       profOrStudent = "Student";
       this.navCtrl.push(ClassesSPage, {
        currEmail: email,
        profOrStudent:  profOrStudent
       });
     }

     console.log("EMAIL: ", email)
     console.log("proforstud", profOrStudent)
   }
}
