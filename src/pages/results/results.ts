import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseApp } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})

export class ResultsPage {
    topicsReady: boolean = false;
    topicList: Array<any> = [];
    commentArray: Array<any> = [];
    commentDict: Array<any> = [];
    topicsRef: any;

    @ViewChild('barCanvas') barCanvas;

    barChart: any;

    private db = null;

    constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, private fbApp: FirebaseApp, public navParams: NavParams) {
      this.db = this.fbApp.database();
      this.lectureName = navParams.get('currLec');
  		this.className = navParams.get('currClass');
      this.topicsRef =  this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
      this.getTopics();
      console.log("printing topicList");
      console.log(this.topicList);
      this.getComments();
    }

    lectureName = '';
  	className = '';

    ionViewDidLoad() {
        this.getTopics();
        //this.topicsReady = false;
    	//this isn't working
    	// document.getElementById('ClassName').innerHTML = this.className;
     // 	document.getElementById('LectureName').innerHTML = this.lectureName;
        let voteArray = [];
        let nameArray = [];
        let colorArray = [];
        // let this.commentArray = [];
        // let this.commentDict = {};
        var voteCountRef = this.db.ref('classes/' + this.className + '/lectures/' + this.lectureName + '/topics/');
        let worstTopic = ''

        voteCountRef.on('value', function(snapshot) {
              console.log(snapshot.val());
              snapshot.forEach(snap => {
                voteArray.push(snap.val()['voteCount']);
                nameArray.push(snap.val()['name']);
              });

              console.log("Vote array: ");
              console.log(voteArray);
              console.log("Name array: ");
              console.log(nameArray);

              // make an array of size nameArray filled with red
              for(var i = 0; i < nameArray.length; i++){
                  colorArray.push('#ff5c33');
              }
              console.log(colorArray)

            var lowestUnderstood = Math.max(...voteArray);
            console.log(lowestUnderstood);

            var worstTopicIndex = (voteArray).indexOf(lowestUnderstood);
            var worstTopic = nameArray[worstTopicIndex];
            console.log(worstTopic)
            console.log(worstTopicIndex)


            //not working
            // document.getElementById('WorstTopic').innerHTML = worstTopic;

        });

        this.barChart = new Chart(this.barCanvas.nativeElement, {

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
                            beginAtZero:true
                        }
                    }]
                }
            }



        });


    }
    navigateToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

  async getTopics() {
  //  this.topicsReady = false;
    this.topicList = [];
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val());
      });
    });
    console.log("HELL YEAH RETRIEVING TOPICS");
    //this.topicsReady = true;
  }


  async getComments() {
    //if (this.topicsReady) {
      let commentRef;
      let commentList = [];
      for (let i=0; i<this.topicList.length;i++) {
        let name = this.topicList[i].name;
        let comment = this.topicList[i].comments;



        console.log("printing comment ");
        console.log(comment);
        commentRef = this.fbApp.database().ref('/classes/' + this.className + '/lectures/' + this.lectureName + '/topics/' + name + '/comments');
        console.log("printing commentRef")
        console.log(commentRef);
        commentRef.on('value', function(snapshot) {
          commentList = [];
          console.log(snapshot.val());
          snapshot.forEach((child) => {
            //this.commentArray.push(child.val());
            commentList.push(child.val());
            return false;
          });
        });
        this.commentDict.push({
          key: name,
          value: commentList,
        });
        //console.log(this.commentArray);
        console.log("printing commentList");
        console.log(commentList);
        console.log("printing commentDict");
        console.log(this.commentDict);

      }
    // }
    // else {
    //   console.log("nope");
    // }
    //currently have a dictionary {topic name: [array of comments]}
  }

  toggleComments(i) {
    try {
      this.commentDict[i].open = !this.commentDict[i].open;
    } catch (err) {
      console.log("error commentDict null");
    }

  }


}
