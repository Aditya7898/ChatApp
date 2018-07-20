import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {  }

  async signInWithEmailAndPassword(account: Account) {
     try{
           return <LoginResponse> {
               result: await this.afAuth.auth.signInWithEmailAndPassword(account.email,account.password)
           }
     } catch(error){
         return <LoginResponse> {
           error: error
         };
     }
  }

  async createUserWithEmailAndPassword(account: Account){
    console.log("called")
    try{
        return <LoginResponse> {
          result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch(error){
        return <LoginResponse> {
          error: error
        };   
     }
  }


  getAuthenticatedUser() {
    return this.afAuth.authState; 
  }
}
