import { Component, Output, EventEmitter } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private toastCtrl: ToastController ) {
     this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {

    try{
        const result = await this.auth.createUserWithEmailAndPassword(this.account);
        this.registerStatus.emit(result);
    } catch(error){
        this.registerStatus.emit(error);
    }
    // try{
    //   const result = await this.auth.createUserWithEmailAndPassword(this.account);
    //   this.toastCtrl.create({
    //     message: 'Account Created Successfully..',
    //     duration: 3000
    //   }).present();
    //   console.log(result);
    // } catch(error) {
    //   console.log(error);
    //   this.toastCtrl.create({
    //     message : error.message,
    //     duration: 3000
    //   }).present();
    // }
  }

}
