import { Action } from '@ngrx/store';

import { IUser, IPagination } from '@shared/models';

export enum UserActionTypes {
  GET_USERS = '[User] Get Users',
  GET_USERS_SUCCESS = '[User] Get Users Success',
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Get User Success',
  GET_TOTAL_USERS = '[User] Get Total Users',
  GET_TOTAL_USERS_SUCCESS = '[User] Get Total Users Success',
}

export class GetUsers implements Action {
  public readonly type = UserActionTypes.GET_USERS;
  constructor(public payload: IPagination) {}
}

export class GetUsersSuccess implements Action {
  public readonly type = UserActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = UserActionTypes.GET_USER;
  constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
  public readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export class GetTotalUsers implements Action {
  public readonly type = UserActionTypes.GET_TOTAL_USERS;
  constructor(public payload?: string[]) {}
}

export class GetTotalUsersSuccess implements Action {
  public readonly type = UserActionTypes.GET_TOTAL_USERS_SUCCESS;
  constructor(public payload: number) {}
}

export type UserActions =
  | GetUsers
  | GetUsersSuccess
  | GetUser
  | GetUserSuccess
  | GetTotalUsers
  | GetTotalUsersSuccess;
