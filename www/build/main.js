webpackJsonp([8],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_s_classes_s__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_p_manage_p__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(116);
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lectures_s_lectures_s__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassesSPage = /** @class */ (function () {
    function ClassesSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassesSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassesSPage');
    };
    ClassesSPage.prototype.navigateToLecturesSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lectures_s_lectures_s__["a" /* LecturesSPage */]);
    };
    ClassesSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classes-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/classes-s/classes-s.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>classes-s</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<button ion-button (click)="navigateToLecturesSPage()">STUDENT lecture page</button>\n	<p>\n		On this page <b>students </b> can:\n	</p>\n	<ul>\n		<li> Query for course</li>\n		<li> Add course to their schedule</li>\n		<li> View and select classes currently on their schedule</li>\n	</ul>\n\n	<!-- FILLER - DO THIS!!! -->\n	<h1> Search for a course and add it to your schedule here: </h1>\n\n	<h1> Select an already-added class to view its lectures</h1>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/classes-s/classes-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClassesSPage);
    return ClassesSPage;
}());

//# sourceMappingURL=classes-s.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(77);
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
    function LecturesSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LecturesSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LecturesSPage');
    };
    LecturesSPage.prototype.navigateToResultsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    LecturesSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lectures-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-s/lectures-s.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>lectures-s</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<button ion-button (click)="navigateToResultsPage()">Results Page</button>\n\n	<p>On this page students can: </p>\n	<ul>\n		<li>View lectures of the class they clicked on</li>\n		<li>View topics in dropdown from the lecture list</li>\n		<li>Check topics they\'re confused about</li>\n		<li>No permissions for edit/deleting lectures or topics</li>\n		<li>Potentially a comment box per topic that you could open up?</li>\n	</ul>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-s/lectures-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LecturesSPage);
    return LecturesSPage;
}());

//# sourceMappingURL=lectures-s.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topics_p_topics_p__ = __webpack_require__(143);
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
            selector: 'page-lectures-p',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-p/lectures-p.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Professor: Lectures for <span id="currClass"></span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<button ion-button (click)="navigateToResultsPage()">Results Page</button>\n\n	<!-- <p>On this page professors can: </p>\n	<ul>\n		<li>Add new lectures with some sort of ID</li>\n		<li>Remove or edit name of current lectures</li>\n		<li>Add list of associated topics to each lecture</li>\n		<li>Edit or remove topics</li>\n		<li>Reset vote counts for any topics</li>\n		<li>No checkbox voting feature here</li>\n	</ul>\n -->\n<h1> Current viewing lectures for class: <b><span id="currClass"></span></b></h1>\n<br>\n<h2>Create a new lecture or select an existing lecture to go to its list of topics: </h2>\n\n<ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newLecture" placeholder="New Lecture"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addLectures()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="lecturesReady">\n    <ion-list *ngFor="let lecture of lectureList">\n      <ion-item>\n        <ion-label>{{lecture.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToTopicsForThisLecture(lecture.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n        <<!-- button ion-button (click) ="navigateToResultsPage" class="butt"></button>\n -->\n        <button ion-button item-end clear icon-only (click)="removeLectures(lecture.name)" class="butt"><ion-icon name="trash" color="danger"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/lectures-p/lectures-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */]])
    ], LecturesPPage);
    return LecturesPPage;
}());

//# sourceMappingURL=lectures-p.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsPPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(26);
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
        console.log(this.lectureName);
        console.log(this.className);
        this.topicsRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
        this.getTopics(); // load up the lecture list
        this.topicsCheckedMap = new Map([]);
    }
    TopicsPPage.prototype.ionViewDidLoad = function () {
        // not working for some weird reason
        // document.getElementById('currLecture').innerHTML = this.lectureName;
        document.getElementById('currClass').innerHTML = this.className;
    };
    // this may take topicName or something but I'm picturing the next page with graphs per lecture
    TopicsPPage.prototype.navigateToResultsForThisLecture = function (lectureName) {
        var currLecture = lectureName;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */], {
            currLec: currLecture
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
    TopicsPPage.prototype.removeTopics = function (topicName) {
        this.topicsReady = false;
        this.firebaseProvider.removeTopics(this.className, this.lectureName, topicName);
        this.topicsCheckedMap.delete(topicName);
        this.getTopics();
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
            selector: 'page-topics-p',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-p/topics-p.html"*/'\n<ion-header>\n\n  <ion-navbar>\n  	<!-- for some reason innerHTML isn\'t letting me send the lecture ? -->\n    <ion-title>Professor: Topics for ...(bug) <span id="currClass"></span></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h2>Create a new topic and view current topics: </h2>\n\n<ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newTopic" placeholder="New Topic"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addTopics()">Add!</button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="topicsReady">\n    <ion-list *ngFor="let topic of topicList">\n      <ion-item>\n        <ion-label>{{topic.name}}</ion-label>\n\n        <button ion-button item-end clear icon-only (click)="navigateToResultsForThisLecture(topic.name)" class="butt"> <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n        <<!-- button ion-button (click) ="navigateToResultsPage" class="butt"></button>\n -->\n        <button ion-button item-end clear icon-only (click)="removeTopics(topics.name)" class="butt"><ion-icon name="trash" color="danger"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-p/topics-p.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]])
    ], TopicsPPage);
    return TopicsPPage;
}());

//# sourceMappingURL=topics-p.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(117);
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lectures_p_lectures_p__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(26);
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
        // this.initializer = true;
        this.getClasses(); // load up the topicList
        this.checkedMap = new Map([]);
        // need this for lectures too
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

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/classes-s/classes-s.module": [
		431,
		7
	],
	"../pages/lectures-p/lectures-p.module": [
		432,
		6
	],
	"../pages/lectures-s/lectures-s.module": [
		433,
		5
	],
	"../pages/login/login.module": [
		434,
		4
	],
	"../pages/manage-p/manage-p.module": [
		435,
		3
	],
	"../pages/results/results.module": [
		436,
		2
	],
	"../pages/topics-p/topics-p.module": [
		437,
		1
	],
	"../pages/topics-s/topics-s.module": [
		438,
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
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TopicsSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicsSPage = /** @class */ (function () {
    function TopicsSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicsSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopicsSPage');
    };
    TopicsSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topics-s',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-s/topics-s.html"*/'<!--\n  Generated template for the TopicsSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>topics-s</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/topics-s/topics-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicsSPage);
    return TopicsSPage;
}());

//# sourceMappingURL=topics-s.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(302);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_classes_s_classes_s__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_manage_p_manage_p__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lectures_s_lectures_s__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lectures_p_lectures_p__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_results_results__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_topics_p_topics_p__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_topics_s_topics_s__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database_deprecated__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_firebase__ = __webpack_require__(65);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(117);
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__(194);
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
            date: 0
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/results/results.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>\n		Both users can:\n-View graphs on results page (make language neutral to student professor)\n</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/juliawilkins/Desktop/NU2018/spring/eecs394/ClassConfusion-Refactor/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ })

},[281]);
//# sourceMappingURL=main.js.map