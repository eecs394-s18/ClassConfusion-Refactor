import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
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

  // getVoteCount() {
  //   return this.afd.list('/topics/' + name + '/voteCount');
  // }

}
