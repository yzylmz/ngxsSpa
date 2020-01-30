import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ChangeStatus } from 'src/app/state/auth.action';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store: Store, private router: Router, private registerService: RegisterService) { }

  username: string;
  password: string;

  alertMessage: string = "";

  ngOnInit() {
    if (localStorage.getItem('token') == "true") {
      this.store.dispatch(new ChangeStatus({ authStatus: true })).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  register() {

    const authRes = this.registerService.registerUser(this.username, this.password);
    if (authRes == true) {
      this.alertMessage = "";
      this.router.navigate(['/login']);
    } else {
      this.alertMessage = "Register failed: Invalid username or password!"
    }

  }
} 
