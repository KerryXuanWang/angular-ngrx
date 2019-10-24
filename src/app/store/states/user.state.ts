import { IUser } from '@shared/models';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
  totalUsers: number;
}

export const initUserState: IUserState = {
  users: null,
  selectedUser: null,
  totalUsers: null,
};
