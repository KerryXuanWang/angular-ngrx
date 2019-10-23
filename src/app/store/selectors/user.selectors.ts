import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/states/app.state';
import { IUserState } from '@store/states/user.state';

const usersState = (state: IAppState) => state.users;

export const userListSelector = createSelector(
  usersState,
  (state: IUserState) => state.users,
);

export const selectedUserSelector = createSelector(
  usersState,
  (state: IUserState) => state.selectedUser,
);
