import { Component, OnInit, Output } from '@angular/core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ChangeStatus } from 'src/app/state/auth.action';
import { AuthState } from 'src/app/state/auth.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    console.log(this.store.selectSnapshot(AuthState.getStatus));
  }

  Logout() {
    this.store.dispatch(new ChangeStatus({ authStatus: false })).subscribe(() => {
      this.router.navigate(['/login']); 
    });
  }

}
