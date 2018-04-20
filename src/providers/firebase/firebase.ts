import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

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

  // getVoteCount() {
  //   return this.afd.list('/topics/' + name + '/voteCount');
  // }

}
