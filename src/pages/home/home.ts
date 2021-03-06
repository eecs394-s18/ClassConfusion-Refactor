import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassesSPage} from "../classes-s/classes-s";
import { ManagePPage} from "../manage-p/manage-p";
import {LoginPage} from "../login/login";
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public afAuth:AngularFireAuth) {


  }

// on load show what type of email is logged in (is it showing last recently logged in?
// may need to change)
ionViewDidLoad() {
  this.navigateToLoginPage();

   // this.afAuth.authState.subscribe(res => {
   //    var printer = "";
   //    if (res && res.uid) {
   //      console.log(res.email);
   //      console.log('user is logged in');

   //      var string = res.email, prof_substring = "@northwestern.edu", student_substring = "@u.northwestern.edu";
   //      if(string.includes(prof_substring)){
   //        console.log("Professor email.");
   //        printer = "PROF EMAIL"

   //      }
   //      else if(string.includes(student_substring)){
   //        console.log("Student email.")
   //        printer = "STUDENT EMAIL"
   //      }


   //    }
   //     else {
   //      console.log('user not logged in');
   //    }

   //    document.getElementById('printer').innerHTML = printer;
   //  });

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

  navigateToLoginPage(): void {
    this.navCtrl.push(LoginPage);
  }
  navigateToRegistrationPage(): void {
    this.navCtrl.push(RegisterPage);
  }
}
