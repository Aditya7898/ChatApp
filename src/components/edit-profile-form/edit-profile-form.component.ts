import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy{

  private authenticatedUser;
  private authenticatedUser$: Subscription;
  
  @Input() profile: Profile;

  ngOnInit(): void{
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }

  constructor(private dataService: DataService, private auth: AuthService) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
      // this.profile.email = user.email;
    })
  }
  
  async saveProfile() {
    if(this.authenticatedUser) {
      const result = await 
      this.dataService.saveProfile(this.authenticatedUser, this.profile)
      console.log(this.profile);
    }
  }

  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }
}
