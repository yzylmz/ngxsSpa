import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthStatus } from '../../models/authStatus';
import { UserModel } from 'src/app/models/userModel';
import { ChangeStatus } from 'src/app/state/auth.action';
import { LoginService } from './login.service';
import { AuthState } from 'src/app/state/auth.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store, private loginService: LoginService, private router: Router) { }

  username: string;
  password: string;

  alertMessage: string = "";

  ngOnInit() {
    const isAuthenticated = this.store.selectSnapshot(AuthState.getStatus);

    if (isAuthenticated == true) { 
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  Login() {

    const authRes = this.loginService.checkUser(this.username, this.password);
    if (authRes == true) {
      this.alertMessage = ""; 
      this.store.dispatch(new ChangeStatus({ authStatus: authRes })).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.alertMessage = "Kullanıcı adı veya şifre hatalı!"
    }

  }
}
