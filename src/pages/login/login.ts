import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from "../register/register";

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

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        // this.navCtrl.setRoot('HomePage');
        this.navCtrl.push(HomePage);
      }
    }
    catch (e) {
      this.presentAlert(e);
      console.error(e);
    }


  }

  // printUser(): void{
  //    let user = this.afAuth.auth.currentUser;
  //    console.log(user)

  // }
}
