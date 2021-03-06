import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase, private fbApp: FirebaseApp) {
  }

  //for adding classes
  addClass(name) {
    this.afd.list('/classes').set(name,
    {
      name: name,
    });
  }

  removeClass(name) {
    this.afd.list('/classes').remove(name);
  }


  getClasses() {
    return this.afd.list('/classes');
  }



  //for adding lectures within classes
  addLectures(className, lectureName) {
    this.afd.list('/classes/' + className + '/lectures').set(lectureName,
    {
      name: lectureName,
      date: 0
    });
  }

  removeLectures(className, lectureName) {
    this.afd.list('/classes/' + className + '/lectures').remove(lectureName);
  }


  getLectures(className) {
    return this.afd.list('/classes/' + className + '/lectures');
  }


  //for adding topics within lectures within classes
  addTopics(className, lectureName, topicName) {
    this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics').set(topicName,
    {
      name: topicName,
      voteCount: 0
    });
  }

  removeTopics(className, lectureName, topicName) {
    this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics').remove(topicName);
  }


  getTopics(className, lectureName) {
    return this.afd.list('/classes/' + className + '/lectures/' + lectureName + '/topics');
  }

  getVoteCount(className, lectureName, topicName) {
    return this.afd.list('/classes/' + className + '/lectures/' + lectureName +'/topics/' + topicName + '/voteCount');
  }

  getComments(className, lectureName, topicName) {
    var commentRef = this.fbApp.database().ref('/classes/' + className + '/lectures/' + lectureName + '/topics/' + topicName + '/comments');
    var commentList = [];
    commentRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        commentList.push(child.val());
        return false; // to appease the compiler
      });
    });
    return commentList;
  }
}
