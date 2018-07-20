import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController,private toastCtrl: ToastController) {
  }
 
  register(event: LoginResponse) {
    console.log("event emited")
     if(!event.error) {
        this.toastCtrl.create({
          message: 'Registered Successfully..',
          duration: 3000
        }).present();
     } else {
        this.toastCtrl.create({
          message: ` Account not created: ${event.error.message}`,
          duration: 3000
        }).present();
     }
  }
}
