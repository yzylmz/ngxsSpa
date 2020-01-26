import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { Injectable } from '@angular/core';
import { ChangeStatus } from './state/auth.action';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store, private router: Router) { }

    token: string;

    canActivate() {

        this.checkToken();

        const isAuthenticated = this.store.selectSnapshot(AuthState.getStatus);

        if (isAuthenticated == true) {
            return isAuthenticated;
        } else {

            if (this.token == "true") {
                this.store.dispatch(new ChangeStatus({ authStatus: true }));
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        }
    }

    checkToken() {
        this.token = localStorage.getItem('token');
    }
}