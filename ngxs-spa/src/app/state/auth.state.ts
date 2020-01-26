import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AuthStatus } from '../models/authStatus';
import { ChangeStatus } from './auth.action';
import { tap } from 'rxjs/operators';


export class AuthStateModel {
    authState: boolean
}
@State<AuthStateModel>({
    name: 'authState',
    defaults: {
        authState: false
    }
})

export class AuthState {

    @Selector()
    static getStatus(state: AuthStateModel) {
        return state.authState;
    }

    static mystore: any;

    constructor( ) {

    }

    @Action(ChangeStatus)
    changeStatus({ getState, patchState }: StateContext<AuthStateModel>, { payload }: ChangeStatus) {

        if (payload.authStatus == true) {
            localStorage.setItem('token', 'true');
        } else {
            localStorage.removeItem('token');
        }
        patchState({
            authState: payload.authStatus
        })
    } 

}
