import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  dummyUsername: string = "admin"
  dummyPassword: string = "cloudfactory"

  status: boolean;

  checkUser(username: string, password: string): boolean {
    if (username == this.dummyUsername && password == this.dummyPassword) {  
      this.status = true;
    } else {
      this.status = false;
    }
    return this.status;
  }
}
