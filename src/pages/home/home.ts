import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassesSPage} from "../classes-s/classes-s";
import { ManagePPage} from "../manage-p/manage-p";
import {LoginPage} from "../login/login"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
}
