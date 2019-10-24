import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { isEmpty } from 'lodash';

import { environment } from '@env/environment';
import { IUser, IPageModel, IPagination } from '@shared/models';
import { setParams } from '@shared/utils/pagination-util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = `${environment.apiUrl}${environment.apiPrefix}`;

  constructor(private readonly http: HttpClient) {}

  getUsers(pagination?: IPagination) {
    let params = setParams(pagination);

    const { genders } = pagination;
    if (!isEmpty(genders)) {
      genders.forEach((gender) => {
        params = params.append('gender', gender);
      });
    }

    // return this.http.get<IPageModel<IUser>>(this.usersUrl, { params });
    return this.http.get<IUser[]>(`${this.baseUrl}/users`, { params });
  }

  getTotalUsers(filter?: string[]) {
    let params = new HttpParams();

    if (!isEmpty(filter)) {
      filter.forEach((gender) => {
        params = params.append('gender', gender);
      });
    }
    return this.http.get<number>(`${this.baseUrl}/total-users`, { params });
  }
}
