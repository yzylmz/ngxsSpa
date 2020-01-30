import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  dummyUsers: UserModel[] = [];
  status: boolean;

  registerUser(username: string, password: string): boolean {

    if (username != undefined && password != undefined) {

      if (this.dummyUsers.length > 0) {
        var res = this.dummyUsers.filter(user => user.username == username)
        if (res.length < 1) {

          var _newUser: UserModel = {
            username: username,
            password: password
          }

          this.dummyUsers.push(_newUser);
          this.status = true;
        } else {
          this.status = false;
        }

      } else {
        var _newUser: UserModel = {
          username: username,
          password: password
        }
        this.dummyUsers.push(_newUser);
        this.status = true;
      }

    } else {
      this.status = false;
    }
    return this.status;
  }

  checkUser(username: string, password: string): boolean {

    if (username != undefined && password != undefined) {

      if (this.dummyUsers.length > 0) {
        var res = this.dummyUsers.filter(user => user.username == username && user.password == password)
        if (res.length > 0) {
          this.status = true;
        } else {
          this.status = false;
        }
      } else {
        this.status = false;
      }
    } else {
      this.status = false;
    }
    return this.status;
  }
}
