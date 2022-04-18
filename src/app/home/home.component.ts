import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user: any;
  public repos: any = [];

  constructor(private repo: UserService) {}

  ngOnInit(): void {}

  userSelected(user: User) {
    // console.log('userSelected:user', user);
    this.user = user;
    // console.log(user);
    this.getRepos(user.login);
  }
  getRepos(userName: string) {
    this.repo.getRepo(userName).then((result) => {
      this.repos = result;
      console.log(this.repos);
    });
  }
}
