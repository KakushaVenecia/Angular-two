import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[];
  constructor(private http: HttpClient) {
    this.user = [];
  }
  async getData(userName: string) {
    const search = this.http.get<User>(`${environment.APIURL}${userName}`);
    return await lastValueFrom(search).then((result) => {
      //  console.log(result);
      return result;
    });
  }
  async getRepo(userName: string) {
    const search = this.http.get<any>(`${environment.APIURL}${userName}/repos`);
    return await lastValueFrom(search).then((result) => {
      console.log(result);
      return result;
    });
  }
  ngOnInit(): void {}
}
