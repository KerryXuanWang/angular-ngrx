import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initUserState } from './user.state';
import { IConfigState, initConfigState } from './config.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfigState;
}

export const initAppState = {
  users: initUserState,
  config: initConfigState,
};

export function getInitState() {
  return initAppState;
}
