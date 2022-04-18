import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() repos: any;
  userName: string = '';
  @Input() public user: User = {
    avatar_url: '',
    login: '',
    name: '',
    avatar: '',
    bio: '',
    followers: 0,
    following: 0,
    created_at: '',
    public_repos: '',
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.repos);
  }
  receiveRepos(repos: any) {
    this.repos = repos;
  }
}
