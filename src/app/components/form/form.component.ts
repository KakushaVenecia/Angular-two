import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() public userSelected = new EventEmitter();
  userName: string = '';
  user: any;

  constructor(private userservice: UserService) {}

  findUser(userName: string) {
    console.log('findUser', userName);
    this.userservice.getData(userName).then((result) => {
      this.user = result;
      console.log('beforeemit', this.user);
      this.userSelected.emit(this.user);
    });
  }
  ngOnInit(): void {
    this.findUser('KakushaVenecia');
  }
}
