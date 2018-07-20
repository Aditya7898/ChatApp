import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { User } from 'firebase/app';
import { LoadingController, Loading } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{


  public userProfile: Profile;
  public loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;
  
  constructor(private data: DataService, 
    private auth: AuthService, private loding: LoadingController) {
    this.loader = loding.create({
       content: 'Loading Profile...'
    });
    this.existingProfile = new EventEmitter<Profile>();
  }


  ngOnInit() {

    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe((profile: Profile) => {
        console.log(profile);
        this.userProfile = profile;
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      });
    });
  }

}
