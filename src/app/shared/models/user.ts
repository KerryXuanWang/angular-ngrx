interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
  postcode: string;
}

interface Registered {
  date: string;
  age: number;
}

interface Login {
  uuid: string;
  userName: string;
  md5: string;
}

export interface IUser {
  id: string;
  name: Name;
  email?: string;
  phone?: string;
  gender?: string;
  location?: Location;
  registered?: Registered;
  login?: Login;
}
