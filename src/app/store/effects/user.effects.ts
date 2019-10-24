import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '@store/states/app.state';
import {
  GetUsersSuccess,
  GetUsers,
  UserActionTypes,
  GetUserSuccess,
  GetUser,
  GetTotalUsers,
  GetTotalUsersSuccess,
} from '@store/actions/user.actions';

import { UserService } from '@shared/services/user.service';
import { userListSelector } from '@store/selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(UserActionTypes.GET_USERS),
    map((action) => action.payload),
    switchMap((pagination) => this.userService.getUsers(pagination)),
    switchMap((res) => of(new GetUsersSuccess(res))),
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(UserActionTypes.GET_USER),
    map((action) => action.payload),
    withLatestFrom(this.store.pipe(select(userListSelector))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter((user) => user.id === id)[0];
      return of(new GetUserSuccess(selectedUser));
    }),
  );

  @Effect()
  getTotalUsers$ = this.actions$.pipe(
    ofType<GetTotalUsers>(UserActionTypes.GET_TOTAL_USERS),
    map((action) => action.payload),
    switchMap((filter) => this.userService.getTotalUsers(filter)),
    switchMap((res) => of(new GetTotalUsersSuccess(res))),
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>,
  ) {}
}
