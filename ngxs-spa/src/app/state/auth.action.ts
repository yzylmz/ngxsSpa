import { AuthStatus } from '../models/authStatus';

export class ChangeStatus {
  static readonly type = '[AuthStatus] ChangeStatus';
  constructor(public payload: AuthStatus) { }
}
