import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { IUsers } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = `${environment.apiUrl}${environment.apiPrefix}`;
  usersUrl = `${this.baseUrl}/echo/admin`;

  constructor(private readonly http: HttpClient) {}

  getUsers() {
    return this.http.get<IUsers>(this.usersUrl);
  }
}
