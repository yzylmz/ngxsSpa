import { Component, OnInit } from '@angular/core';
import { ofActionDispatched, Actions } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs-spa yz';

  constructor(private actions: Actions, private router: Router) {

  }

  ngOnInit() {
     
  }
}
