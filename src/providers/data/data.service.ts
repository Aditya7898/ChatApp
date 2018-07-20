import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import 'rxjs/add/operator/take';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: AngularFireObject<Profile>



  constructor(private db: AngularFireDatabase) {  

  }

  getProfile(user: User){
    return this.db.object(`/profiles/${user.uid}` ).valueChanges(); 
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.db.object(`/profiles/${user.uid}`);
    try{
      this.profileObject.set(profile);
      return true;
    }
    catch(error) {
      console.log(error);
      return false;
    }
  }

  searchUser(firstName: string) {
    const query = this.db.list('profiles', 
                  ref => ref.orderByChild('firstName').equalTo(firstName))
                  .valueChanges();
    return query;
  }

}
