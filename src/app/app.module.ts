import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ClassesSPage} from '../pages/classes-s/classes-s';
import {ManagePPage} from '../pages/manage-p/manage-p';
import {LecturesSPage} from '../pages/lectures-s/lectures-s'
import {LecturesPPage} from '../pages/lectures-p/lectures-p'
import { ResultsPage} from "../pages/results/results";
import {LoginPage} from "../pages/login/login";


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from './../providers/firebase/firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAumOiHzaCRwzVbAU8HqmTVrBJRN3eUF0I",
    authDomain: "classconfusion.firebaseapp.com",
    databaseURL: "https://classconfusion.firebaseio.com",
    projectId: "classconfusion",
    storageBucket: "classconfusion.appspot.com",
    messagingSenderId: "328545335066"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClassesSPage,
    ManagePPage,
    LecturesPPage,
    LecturesSPage,
    ResultsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClassesSPage,
    ManagePPage,
    LecturesSPage,
    LecturesPPage,
    ResultsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
