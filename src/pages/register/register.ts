import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClassesSPage} from "../classes-s/classes-s";
import { ManagePPage} from "../manage-p/manage-p";
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { User } from "../../shared/models/user";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentAlert(error) {
    let alert = this.alertCtrl.create({
      title: error,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  navigateToClassesSPage(): void {
      this.navCtrl.push(ClassesSPage);
  }


  navigateToManagePPage(): void {
    this.navCtrl.push(ManagePPage);
  }


  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        // this.navCtrl.setRoot('HomePage');
        console.log(user.email);
        this.navCtrl.push(HomePage);
      }
    } catch (e) {
      this.presentAlert(e)
      console.error(e);
    }
  }

  async updateChecked(input) {
    try {
      var result = await input;
      if (result) {
        console.log(input);
        this.checked = input;
        console.log(this.checked);
      }
    } catch(e) {
      console.error(e);
    }
  }
  // 
  // async getChecked(): void {
  //   try {
  //     var result = await this.checked;
  //     if (result) {return this.checked; }
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }

  async tempRegister(): void {
    try {
      if (this.checked == 'professor') {
        this.navigateToManagePPage();
      }
      if (this.checked == 'student') {
        this.navigateToClassesSPage();
      }
    } catch(e) {
      console.error(e);
    }
  }

}
