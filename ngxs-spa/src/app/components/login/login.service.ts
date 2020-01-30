import { Injectable } from '@angular/core';
import { RegisterService } from '../register.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private registerService: RegisterService) { }

  checkUser(username: string, password: string): boolean {
    return this.registerService.checkUser(username, password);
  }
}
