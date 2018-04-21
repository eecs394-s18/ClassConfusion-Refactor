webpackJsonp([8],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_s_classes_s__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_p_manage_p__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
    }
    // on load show what type of email is logged in (is it showing last recently logged in?
    // may need to change)
    HomePage.prototype.ionViewDidLoad = function () {
        this.afAuth.authState.subscribe(function (res) {
            var printer = "";
            if (res && res.uid) {
                console.log(res.email);
                console.log('user is logged in');
                var string = res.email, prof_substring = "@northwestern.edu", student_substring = "@u.northwestern.edu";
                if (string.includes(prof_substring)) {
                    console.log("Professor email.");
                    printer = "PROF EMAIL";
                }
                else if (string.includes(student_substring)) {
                    console.log("Student email.");
                    printer = "STUDENT EMAIL";
                }
            }
            else {
                console.log('user not logged in');
            }
            document.getElementById('printer').innerHTML = printer;
        });
    };
    HomePage.prototype.navigateToClassesSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__classes_s_classes_s__["a" /* ClassesSPage */]);
    };
    HomePage.prototype.navigateToManagePPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manage_p_manage_p__["a" /* ManagePPage */]);
    };
    HomePage.prototype.navigateToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      ClassConfusion v.2\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p> Click the buttons below to either test login functionality or test out the student or professor route (this will be automatically after login in reality)\n  </p>\n\n  <button ion-button color=light (click) = "navigateToLoginPage()">LOGIN PAGE</button>\n  <br>\n  <button ion-button (click)="navigateToClassesSPage()">STUDENT ROUTE</button>\n  <br>\n  <button ion-button (click)="navigateToManagePPage()">PROFESSOR ROUTE</button>\n\n  <p> Type of email that\'s logged in: <b><span id="printer"></span></b></p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lectures_s_lectures_s__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// IMPORTANT
// right now, this is implemented as though a student has "added these classes to their schedule",
// basically they can only view and click the lists of classes. can't add or delete.
var ClassesSPage = /** @class */ (function () {
    function ClassesSPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        // EVERYTHING FOR ADDING CLASSES INITIALLY
        this.classList = [];
        this.newClass = '';
        this.ready = false; // Check if topics are retrieved before loading list of checkboxes
        this.classesRef = this.fbApp.database().ref('/classes/');
        this.getClasses(); // load up the topicList
        this.checkedMap = new Map([]);
    }
    ClassesSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassesSPage');
    };
    ClassesSPage.prototype.navigateToLecturesSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lectures_s_lectures_s__["a" /* LecturesSPage */]);
    };
    // navigate to lecture page for that class by pushing next page and class name
    ClassesSPage.prototype.navigateToLecturesForThisClassStudent = function (className) {
        var currClass = className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lectures_s_lectures_s__["a" /* LecturesSPage */], {
            param1: currClass
        });
        console.log(className);
    };
    // I think this is something to do with pushing on the full list every time
    // Something with how get classes is called at the end of addclasses and remove classes
    // if we take it away we end up with an empty list
    ClassesSPage.prototype.getClasses = function () {
        var _this = this;
        console.log('GETCLASSES CALLED');
        // console.log(this.classList);
        this.ready = false;
        this.classList = [];
        this.classesRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                // console.log(child.val())
                _this.classList.push(child.val());
            });
        });
        console.log(this.classList);
        console.log("[Alert] Retrieved classes from Firebase.");
        this.ready = true; // Now ready to display...
    };
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
    ClassesSPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ClassesSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classes-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/classes-s/classes-s.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Student: View Classes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<!-- <button ion-button (click)="navigateToLecturesSPage()">STUDENT lecture page</button> -->\n	<!-- <p>\n		On this page <b>students </b> can:\n	</p> -->\n<!-- 	<ul>\n		<li> Query for course</li>\n		<li> Add course to their schedule</li>\n		<li> View and select classes currently on their schedule</li>\n	</ul> -->\n\n	<!-- FILLER - DO THIS!!! -->\n	<h2> Search for a course and add it to your schedule here: TODO</h2>\n\n	<h1> Select an already-added class to view its lectures:</h1>\n	<div *ngIf="ready">\n    <ion-list *ngFor="let class of classList">\n      <ion-item>\n        <ion-label>{{class.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToLecturesForThisClassStudent(class.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/classes-s/classes-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]])
    ], ClassesSPage);
    return ClassesSPage;
}());

//# sourceMappingURL=classes-s.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topics_s_topics_s__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LecturesSPage = /** @class */ (function () {
    function LecturesSPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        this.lectureList = [];
        this.newLecture = '';
        this.className = '';
        this.lecturesReady = false; // Check if topics are retrieved before loading list of checkboxes
        this.className = navParams.get('param1');
        console.log(this.className);
        this.lecturesRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/');
        this.getLectures(); // load up the lecture list
        this.lecturesCheckedMap = new Map([]);
    }
    LecturesSPage.prototype.ionViewDidLoad = function () {
        // document.getElementById('currClass').innerHTML = this.className;
    };
    LecturesSPage.prototype.navigateToResultsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    LecturesSPage.prototype.navigateToTopicsForThisLectureStudent = function (lectureName) {
        var currLecture = lectureName;
        var currClass = this.className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__topics_s_topics_s__["a" /* TopicsSPage */], {
            currLec: currLecture,
            currClass: currClass
        });
        console.log('Lecture we clicked: ' + currLecture);
    };
    LecturesSPage.prototype.getLectures = function () {
        var _this = this;
        this.lecturesReady = false;
        this.lectureList = []; // this doesn't work - wipe to prevent duplicates from appearing
        this.lecturesRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                _this.lectureList.push(child.val());
            });
        });
        console.log(this.lectureList);
        console.log("[Alert] Retrieved lectures from Firebase.");
        this.lecturesReady = true; // Now ready to display...
    };
    LecturesSPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LecturesSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lectures-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-s/lectures-s.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Student: View Lectures</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<!-- <button ion-button (click)="navigateToResultsPage()">Results Page</button> -->\n\n	<!-- <p>On this page students can: </p>\n	<ul>\n		<li>View lectures of the class they clicked on</li>\n		<li>View topics in dropdown from the lecture list</li>\n		<li>Check topics they\'re confused about</li>\n		<li>No permissions for edit/deleting lectures or topics</li>\n		<li>Potentially a comment box per topic that you could open up?</li>\n	</ul> -->\n\n<h1>Select a lecture from the list to vote on its topics: </h1>\n	<div *ngIf="lecturesReady">\n    <ion-list *ngFor="let lecture of lectureList">\n      <ion-item>\n        <ion-label>{{lecture.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToTopicsForThisLectureStudent(lecture.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-s/lectures-s.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _e || Object])
    ], LecturesSPage);
    return LecturesSPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lectures-s.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicsSPage = /** @class */ (function () {
    function TopicsSPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        this.topicList = [];
        this.newTopic = '';
        this.lectureName = '';
        this.className = '';
        this.topicsReady = false; // Check if topics are retrieved before loading list of checkboxes
        this.lectureName = navParams.get('currLec');
        this.className = navParams.get('currClass');
        console.log('CURRENT LECTURE: ' + this.lectureName);
        console.log('CURRENT CLASS: ' + this.className);
        this.topicsRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
        this.getTopics(); // load up the lecture list
        this.topicsCheckedMap = new Map([]);
    }
    // buggy
    TopicsSPage.prototype.ionViewDidLoad = function () {
        // not working for some weird reason
        // document.getElementById('currLecture').innerHTML = this.navParams.get('currLec');
        // document.getElementById('currClass').innerHTML = this.className;
    };
    // this may take topicName or something but I'm picturing the next page with graphs per lecture
    TopicsSPage.prototype.navigateToResultsForThisLectureStudent = function () {
        var currLecture = this.lectureName;
        var currClass = this.className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */], {
            currLec: currLecture,
            currClass: currClass
        });
    };
    TopicsSPage.prototype.getTopics = function () {
        var _this = this;
        this.topicsReady = false;
        this.topicList = []; // this doesn't work - wipe to prevent duplicates from appearing
        this.topicsRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                _this.topicList.push(child.val());
            });
        });
        console.log(this.topicList);
        console.log("[Alert] Retrieved topics from Firebase.");
        this.topicsReady = true; // Now ready to display...
    };
    TopicsSPage.prototype.setStatus = function (topicName) {
        var currentStatus = this.topicsCheckedMap.get(name);
        if (currentStatus) {
            this.topicsCheckedMap.set(name, !currentStatus);
        }
        else {
            this.topicsCheckedMap.set(name, true);
        }
    };
    TopicsSPage.prototype.updateVote = function (topicName) {
        this.setStatus(topicName);
        var voteChange = 0;
        if (this.topicsCheckedMap.get(topicName)) {
            voteChange = 1;
        }
        else {
            voteChange = -1;
        }
        var topicRef = this.topicsRef.child(topicName);
        topicRef.transaction(function (currentTopic) {
            currentTopic.voteCount += voteChange;
            return currentTopic;
        });
        this.getTopics();
    };
    TopicsSPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TopicsSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topics-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-s/topics-s.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Student: View and Vote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<h1> View topics from that lecture. Check the box on the left if you are confused about a topic!</h1>\n	<div *ngIf="topicsReady">\n    <ion-list *ngFor="let topic of topicList">\n      <ion-item>\n        <ion-label>{{topic.name}}</ion-label>\n\n        <ion-checkbox [(ngModel)]="topicsCheckedMap[topic.name]" (ionChange)="updateVote(topic.name);">\n        </ion-checkbox>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div>\n     <button ion-button (click)="navigateToResultsForThisLectureStudent()" class="butt">See Results</button>\n </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-s/topics-s.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _e || Object])
    ], TopicsSPage);
    return TopicsSPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=topics-s.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topics_p_topics_p__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LecturesPPage = /** @class */ (function () {
    function LecturesPPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        this.lectureList = [];
        this.newLecture = '';
        this.className = '';
        this.lecturesReady = false; // Check if topics are retrieved before loading list of checkboxes
        this.className = navParams.get('param1');
        console.log(this.className);
        this.lecturesRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/');
        this.getLectures(); // load up the lecture list
        this.lecturesCheckedMap = new Map([]);
    }
    LecturesPPage.prototype.ionViewDidLoad = function () {
        document.getElementById('currClass').innerHTML = this.className;
    };
    LecturesPPage.prototype.navigateToTopicsForThisLecture = function (lectureName) {
        var currLecture = lectureName;
        var currClass = this.className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topics_p_topics_p__["a" /* TopicsPPage */], {
            currLec: currLecture,
            currClass: currClass
        });
        console.log('Lecture we clicked: ' + currLecture);
    };
    LecturesPPage.prototype.getLectures = function () {
        var _this = this;
        this.lecturesReady = false;
        this.lectureList = []; // this doesn't work - wipe to prevent duplicates from appearing
        this.lecturesRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                _this.lectureList.push(child.val());
            });
        });
        console.log(this.lectureList);
        console.log("[Alert] Retrieved lectures from Firebase.");
        this.lecturesReady = true; // Now ready to display...
    };
    LecturesPPage.prototype.addLectures = function () {
        var _this = this;
        if (this.newLecture.length === 0) {
            return;
        } // Fix for issue #5
        this.lecturesRef.child(this.newLecture).once('value', function (snapshot) {
            if (snapshot.exists()) {
                _this.presentAlert();
            }
            else {
                _this.lecturesReady = false;
                _this.firebaseProvider.addLectures(_this.className, _this.newLecture);
                _this.newLecture = ""; // empty out the new class field
                _this.getLectures();
            }
        });
    };
    LecturesPPage.prototype.removeLectures = function (lectureName) {
        this.lecturesReady = false;
        this.firebaseProvider.removeLectures(this.className, lectureName);
        this.lecturesCheckedMap.delete(lectureName);
        this.getLectures();
    };
    LecturesPPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LecturesPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lectures-p',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-p/lectures-p.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Professor: Lectures for <span id="currClass"></span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!--\n	<button ion-button (click)="navigateToResultsPage()">Results Page</button>\n -->\n	<!-- <p>On this page professors can: </p>\n	<ul>\n		<li>Add new lectures with some sort of ID</li>\n		<li>Remove or edit name of current lectures</li>\n		<li>Add list of associated topics to each lecture</li>\n		<li>Edit or remove topics</li>\n		<li>Reset vote counts for any topics</li>\n		<li>No checkbox voting feature here</li>\n	</ul>\n -->\n<h1> Current viewing lectures for class: <b><span id="currClass"></span></b></h1>\n<br>\n<h2>Create a new lecture or select an existing lecture to go to its list of topics: </h2>\n\n<ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newLecture" placeholder="New Lecture"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addLectures()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="lecturesReady">\n    <ion-list *ngFor="let lecture of lectureList">\n      <ion-item>\n        <ion-label>{{lecture.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToTopicsForThisLecture(lecture.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n        <<!-- button ion-button (click) ="navigateToResultsPage" class="butt"></button>\n -->\n        <button ion-button item-end clear icon-only (click)="removeLectures(lecture.name)" class="butt"><ion-icon name="trash" color="danger"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-p/lectures-p.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */]) === "function" && _e || Object])
    ], LecturesPPage);
    return LecturesPPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lectures-p.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicsPPage = /** @class */ (function () {
    function TopicsPPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        this.topicList = [];
        this.newTopic = '';
        this.lectureName = '';
        this.className = '';
        this.topicsReady = false; // Check if topics are retrieved before loading list of checkboxes
        this.lectureName = navParams.get('currLec');
        this.className = navParams.get('currClass');
        console.log('CURRENT LECTURE: ' + this.lectureName);
        console.log('CURRENT CLASS: ' + this.className);
        this.topicsRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
        this.getTopics(); // load up the lecture list
        this.topicsCheckedMap = new Map([]);
    }
    TopicsPPage.prototype.ionViewDidLoad = function () {
        // not working for some weird reason
        // document.getElementById('currLecture').innerHTML = this.navParams.get('currLec');
        document.getElementById('currClass').innerHTML = this.className;
    };
    // this may take topicName or something but I'm picturing the next page with graphs per lecture
    TopicsPPage.prototype.navigateToResultsForThisLectureProfessor = function () {
        var currLecture = this.lectureName;
        var currClass = this.className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */], {
            currLec: currLecture,
            currClass: currClass
        });
    };
    TopicsPPage.prototype.getTopics = function () {
        var _this = this;
        this.topicsReady = false;
        this.topicList = []; // this doesn't work - wipe to prevent duplicates from appearing
        this.topicsRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                _this.topicList.push(child.val());
            });
        });
        console.log(this.topicList);
        console.log("[Alert] Retrieved topics from Firebase.");
        this.topicsReady = true; // Now ready to display...
    };
    TopicsPPage.prototype.addTopics = function () {
        var _this = this;
        if (this.newTopic.length === 0) {
            return;
        } // Fix for issue #5
        this.topicsRef.child(this.newTopic).once('value', function (snapshot) {
            if (snapshot.exists()) {
                _this.presentAlert();
            }
            else {
                _this.topicsReady = false;
                _this.firebaseProvider.addTopics(_this.className, _this.lectureName, _this.newTopic);
                _this.newTopic = ""; // empty out the new class field
                _this.getTopics();
            }
        });
    };
    TopicsPPage.prototype.updateVote = function (topicName) {
        this.setStatus(topicName);
        var voteChange = 0;
        if (this.topicsCheckedMap.get(topicName)) {
            voteChange = 1;
        }
        else {
            voteChange = -1;
        }
        var topicRef = this.topicsRef.child(topicName);
        topicRef.transaction(function (currentTopic) {
            currentTopic.voteCount += voteChange;
            return currentTopic;
        });
        this.getTopics();
    };
    TopicsPPage.prototype.removeTopics = function (topicName) {
        this.topicsReady = false;
        this.firebaseProvider.removeTopics(this.className, this.lectureName, topicName);
        this.topicsCheckedMap.delete(topicName);
        this.getTopics();
    };
    TopicsPPage.prototype.setStatus = function (topicName) {
        var currentStatus = this.topicsCheckedMap.get(name);
        if (currentStatus) {
            this.topicsCheckedMap.set(name, !currentStatus);
        }
        else {
            this.topicsCheckedMap.set(name, true);
        }
    };
    TopicsPPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TopicsPPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topics-p',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-p/topics-p.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  	<!-- for some reason innerHTML isn\'t letting me send the lecture ? -->\n    <ion-title>Professor: Topics for ...(bug) <span id="currClass"></span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<h1> insert button here to get to results page for associated lecture with this topics</h1>\n\n\n<ion-content padding>\n	<h2>Create a new topic and view current topics: </h2>\n\n<ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newTopic" placeholder="New Topic"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addTopics()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="topicsReady">\n    <ion-list *ngFor="let topic of topicList">\n      <ion-item>\n        <ion-label>{{topic.name}}</ion-label>\n\n\n  <button ion-button item-end clear icon-only (click)="removeTopics(topics.name)" class="butt"><ion-icon name="trash" color="danger"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n<div>\n  <button ion-button (click)="navigateToResultsForThisLectureProfessor()" class="butt">See Results</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-p/topics-p.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _e || Object])
    ], TopicsPPage);
    return TopicsPPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=topics-p.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, navParams, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    LoginPage.prototype.presentAlert = function (error) {
        var alert = this.alertCtrl.create({
            title: error,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            // this.navCtrl.setRoot('HomePage');
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.presentAlert(e_1);
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            // this.navCtrl.setRoot('HomePage');
                            console.log(user.email);
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.presentAlert(e_2);
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>ClassConfusion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Welcome to ClassConfusion! Log in or register below to get started.</h1>\n  <h2> *** Not sure yet how we are going to distinguish between prof/student. Potentially could just check if it\'s a .edu email or u.edu for student. You can acess the current user\'s email after logging in so we could probably do it that way.</h2>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <br><br>\n\n  <button ion-button (click)="login(user)">Login</button>\n  <button ion-button color="light" (click)="register(user)">Register</button>\n\n  <br>\n  <!-- <button ion-button (click)="printUser">view user</button> -->\n</ion-content>'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lectures_p_lectures_p__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagePPage = /** @class */ (function () {
    function ManagePPage(navCtrl, navParams, firebaseProvider, alertCtrl, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.alertCtrl = alertCtrl;
        this.fbApp = fbApp;
        // EVERYTHING FOR ADDING CLASSES INITIALLY
        this.classList = [];
        this.newClass = '';
        this.ready = false; // Check if topics are retrieved before loading list of checkboxes
        this.classesRef = this.fbApp.database().ref('/classes/');
        this.getClasses(); // load up the topicList
        this.checkedMap = new Map([]);
    }
    ManagePPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagePPage');
    };
    // navigate to lecture page for that class by pushing next page and class name
    ManagePPage.prototype.navigateToLecturesForThisClass = function (className) {
        var currClass = className;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lectures_p_lectures_p__["a" /* LecturesPPage */], {
            param1: currClass
        });
        console.log(className);
    };
    // I think this is something to do with pushing on the full list every time
    // Something with how get classes is called at the end of addclasses and remove classes
    // if we take it away we end up with an empty list
    ManagePPage.prototype.getClasses = function () {
        var _this = this;
        console.log('GETCLASSES CALLED');
        // console.log(this.classList);
        this.ready = false;
        this.classList = [];
        this.classesRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                // console.log(child.val())
                _this.classList.push(child.val());
            });
        });
        console.log(this.classList);
        console.log("[Alert] Retrieved classes from Firebase.");
        this.ready = true; // Now ready to display...
    };
    ManagePPage.prototype.addClass = function () {
        var _this = this;
        console.log('ADD CLASS CALLED');
        // this.classList = [];
        if (this.newClass.length === 0) {
            return;
        } // Fix for issue #5
        this.classesRef.child(this.newClass).once('value', function (snapshot) {
            if (snapshot.exists()) {
                _this.presentAlert();
            }
            else {
                _this.ready = false;
                _this.firebaseProvider.addClass(_this.newClass);
                _this.newClass = ""; // empty out the new class field
                _this.getClasses();
            }
        });
    };
    ManagePPage.prototype.removeClass = function (name) {
        console.log('REMOVE CLASS CALLED');
        // this.classList = [];
        this.ready = false;
        this.firebaseProvider.removeClass(name);
        this.checkedMap.delete(name);
        this.getClasses();
    };
    ManagePPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'This item is already in the list!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ManagePPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-p',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/manage-p/manage-p.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Professor: Manage Classes </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<!-- <button ion-button (click)="navigateToLecturesPPage()">PROFESSOR LECTURE PAGE</button> -->\n	<!-- <p>\n		On this page professors can:\n</p> -->\n<!-- <ul>\n	<li>Create a new class</li>\n	<li>View classes they are already teaching or "enrolled" in</li>\n	<li>Edit and delete current classes</li>\n	<li>Select a class to move into its lecture page</li>\n</ul>\n -->\n  <h1> Create a new class or select a class with the arrow button to view its lectures: </h1>\n\n  <ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newClass" placeholder="New Class"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addClass()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="ready">\n    <ion-list *ngFor="let class of classList">\n      <ion-item>\n        <ion-label>{{class.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToLecturesForThisClass(class.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n\n        <button ion-button item-end clear icon-only (click)="removeClass(class.name)" class="butt"><ion-icon name="trash" color="danger"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/manage-p/manage-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]])
    ], ManagePPage);
    return ManagePPage;
}());

//# sourceMappingURL=manage-p.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/classes-s/classes-s.module": [
		615,
		7
	],
	"../pages/lectures-p/lectures-p.module": [
		616,
		6
	],
	"../pages/lectures-s/lectures-s.module": [
		617,
		5
	],
	"../pages/login/login.module": [
		618,
		4
	],
	"../pages/manage-p/manage-p.module": [
		619,
		3
	],
	"../pages/results/results.module": [
		620,
		2
	],
	"../pages/topics-p/topics-p.module": [
		621,
		1
	],
	"../pages/topics-s/topics-s.module": [
		622,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    //for adding classes
    FirebaseProvider.prototype.addClass = function (name) {
        this.afd.list('/classes').set(name, {
            name: name,
        });
    };
    FirebaseProvider.prototype.removeClass = function (name) {
        this.afd.list('/classes').remove(name);
    };
    FirebaseProvider.prototype.getClasses = function () {
        return this.afd.list('/classes');
    };
    //for adding lectures within classes
    FirebaseProvider.prototype.addLectures = function (className, lectureName) {
        this.afd.list('/classes/' + className + '/lectures').set(lectureName, {
            name: lectureName,
            date: 0
        });
    };
    FirebaseProvider.prototype.removeLectures = function (className, lectureName) {
        this.afd.list('/classes/' + className + '/lectures').remove(lectureName);
    };
    FirebaseProvider.prototype.getLectures = function (className) {
        return this.afd.list('/classes/' + className + '/lectures');
    };
    //for adding topics within lectures within classes
    FirebaseProvider.prototype.addTopics = function (className, lectureName, topicName) {
        this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics').set(topicName, {
            name: topicName,
            voteCount: 0
        });
    };
    FirebaseProvider.prototype.removeTopics = function (className, lectureName, topicName) {
        this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics').remove(topicName);
    };
    FirebaseProvider.prototype.getTopics = function (className, lectureName) {
        return this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics');
    };
    FirebaseProvider.prototype.getVoteCount = function (className, lectureName, topicName) {
        return this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics/' + topicName + '/voteCount');
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_classes_s_classes_s__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_manage_p_manage_p__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lectures_s_lectures_s__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lectures_p_lectures_p__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_results_results__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_topics_p_topics_p__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_topics_s_topics_s__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database_deprecated__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyAumOiHzaCRwzVbAU8HqmTVrBJRN3eUF0I",
    authDomain: "classconfusion.firebaseapp.com",
    databaseURL: "https://classconfusion.firebaseio.com",
    projectId: "classconfusion",
    storageBucket: "classconfusion.appspot.com",
    messagingSenderId: "328545335066"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_classes_s_classes_s__["a" /* ClassesSPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_manage_p_manage_p__["a" /* ManagePPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lectures_p_lectures_p__["a" /* LecturesPPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lectures_s_lectures_s__["a" /* LecturesSPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topics_p_topics_p__["a" /* TopicsPPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topics_s_topics_s__["a" /* TopicsSPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/classes-s/classes-s.module#ClassesSPageModule', name: 'ClassesSPage', segment: 'classes-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lectures-p/lectures-p.module#LecturesPPageModule', name: 'LecturesPPage', segment: 'lectures-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lectures-s/lectures-s.module#LecturesSPageModule', name: 'LecturesSPage', segment: 'lectures-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-p/manage-p.module#ManagePPageModule', name: 'ManagePPage', segment: 'manage-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topics-p/topics-p.module#TopicsPPageModule', name: 'TopicsPPage', segment: 'topics-p', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topics-s/topics-s.module#TopicsSPageModule', name: 'TopicsSPage', segment: 'topics-s', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_classes_s_classes_s__["a" /* ClassesSPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_manage_p_manage_p__["a" /* ManagePPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lectures_s_lectures_s__["a" /* LecturesSPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lectures_p_lectures_p__["a" /* LecturesPPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topics_p_topics_p__["a" /* TopicsPPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topics_s_topics_s__["a" /* TopicsSPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__["a" /* FirebaseProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bm": 220,
	"./bm.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-il": 239,
	"./en-il.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es-us": 244,
	"./es-us.js": 244,
	"./es.js": 242,
	"./et": 245,
	"./et.js": 245,
	"./eu": 246,
	"./eu.js": 246,
	"./fa": 247,
	"./fa.js": 247,
	"./fi": 248,
	"./fi.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./gd": 254,
	"./gd.js": 254,
	"./gl": 255,
	"./gl.js": 255,
	"./gom-latn": 256,
	"./gom-latn.js": 256,
	"./gu": 257,
	"./gu.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./ug-cn": 321,
	"./ug-cn.js": 321,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 491;

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    // rootPage:any = LoginPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsPage = /** @class */ (function () {
    function ResultsPage(firebaseProvider, fbApp, navParams) {
        this.firebaseProvider = firebaseProvider;
        this.fbApp = fbApp;
        this.navParams = navParams;
        this.db = null;
        this.lectureName = '';
        this.className = '';
        this.db = this.fbApp.database();
        this.lectureName = navParams.get('currLec');
        this.className = navParams.get('currClass');
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        //this isn't working
        // document.getElementById('ClassName').innerHTML = this.className;
        // 	document.getElementById('LectureName').innerHTML = this.lectureName;
        var voteArray = [];
        var nameArray = [];
        var colorArray = [];
        var voteCountRef = this.db.ref('classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
        var worstTopic = '';
        voteCountRef.on('value', function (snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function (snap) {
                voteArray.push(snap.val()['voteCount']);
                nameArray.push(snap.val()['name']);
            });
            console.log("Vote array: ");
            console.log(voteArray);
            console.log("Name array: ");
            console.log(nameArray);
            // make an array of size nameArray filled with red
            for (var i = 0; i < nameArray.length; i++) {
                colorArray.push('#ff5c33');
            }
            console.log(colorArray);
            var lowestUnderstood = Math.max.apply(Math, voteArray);
            console.log(lowestUnderstood);
            var worstTopicIndex = (voteArray).indexOf(lowestUnderstood);
            var worstTopic = nameArray[worstTopicIndex];
            console.log(worstTopic);
            console.log(worstTopicIndex);
            document.getElementById('WorstTopic').innerHTML = worstTopic;
        });
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'horizontalBar',
            data: {
                // labels: ["Graph Theory", "DP", "Data Structures", "Systems", "Binary"],
                labels: nameArray,
                datasets: [
                    // Leaving this out for now until we have a way to count number of users
                    // (Then the data would be a new array of like totalusers - voteArray)
                    // {
                    //     label: 'Did Understand',
                    //     data: voteArray,
                    //     backgroundColor: colorArray
                    // },
                    {
                        label: 'Did not Understand',
                        data: voteArray,
                        backgroundColor: colorArray
                    },
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ResultsPage.prototype, "barCanvas", void 0);
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/results/results.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n  <ion-buttons end>\n      <button ion-button icon-only (click)="ionViewDidLoad()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n      <ion-card-header>\n        (Insert class and lecture name here using document.getelementbyid but its not working rn)\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n </ion-card>\n\n <h3> Based on the voting, the topic that is least understood is: <b><span id="WorstTopic"></span></b></h3>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object])
    ], ResultsPage);
    return ResultsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=results.js.map

/***/ })

},[418]);
//# sourceMappingURL=main.js.map