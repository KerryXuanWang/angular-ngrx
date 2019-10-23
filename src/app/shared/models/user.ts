export interface IUser {
  id: string;
  name: string;
  cardNumber: string;
  cardType: string;
}

export interface IUsers {
  users: IUser[];
}
