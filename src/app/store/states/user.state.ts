import { IUser } from '@shared/models';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initUserState: IUserState = {
  users: null,
  selectedUser: null,
};
