import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthService } from '../../providers/auth/auth.service';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, 
    private auth: AuthService) {
      this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToPage(pageName: string){
    this.navCtrl.push(pageName);
  }
  
  async login() {

    const LoginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    console.log(LoginResponse);
    this.loginStatus.emit(LoginResponse); 
    // try {
    //  const result: LoginResponse = {
    //   result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    // }
    //  this.loginStatus.emit(result);
    // } catch(e) {
    //   console.log(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error); 
    //  }
  }
}
