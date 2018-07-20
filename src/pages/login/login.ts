import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataService } from '../../providers/data/data.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isprofile;
  constructor(public navCtrl: NavController, private data: DataService,
    private toastCtrl: ToastController, public authService: AuthService) {
  }

 public login(event: LoginResponse) {
      console.log(event);
      if(!event.error){
        this.toastCtrl.create({
          message: `Welcome to Beep, ${event.result.email}`,
          duration: 3000
        }).present();


        this.authService.getAuthenticatedUser().subscribe((user) => {
           this.data.getProfile(user).subscribe((profile: Profile) => {
             profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
           });
        });



      } else {
        this.toastCtrl.create({
          message: event.error.message,
          duration: 3000
        }).present()
      }
  }

}
