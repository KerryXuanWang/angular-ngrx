import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { GetUsers, GetTotalUsers } from '@store/actions/user.actions';
import { IAppState } from '@store/states/app.state';
import { userListSelector, totalUsersSelector } from '@store/selectors/user.selectors';
import { IPagination, IUser } from '@shared/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  pagination: IPagination = {
    page: 1,
    limit: 10,
    sort: '',
    order: '',
    genders: [],
  };

  vo = {
    total: 0,
    loading: true,
  };

  userList: IUser[] = [];

  filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
  mapOfExpandData: { [key: string]: boolean } = {};

  sort(sort: { key: string; value: 'ascend' | 'descend' | null }) {
    this.pagination.sort = sort.key;
    this.pagination.order = sort.value != null ? sort.value.replace('end', '') : '';
    this.searchData();
  }

  constructor(private store: Store<IAppState>, private router: Router) {}

  searchData(reset = false) {
    if (reset) {
      this.pagination.page = 1;
      this.store.dispatch(new GetTotalUsers(this.pagination.genders));
    }
    this.vo.loading = true;
    this.store.dispatch(new GetUsers(this.pagination));
  }

  updateFilter(value: string[]) {
    this.pagination.genders = value;
    this.searchData(true);
  }

  initFetchData() {
    this.searchData();
    this.store.dispatch(new GetTotalUsers());
  }

  ngOnInit() {
    this.initFetchData();

    this.store.pipe(select(userListSelector)).subscribe((res) => {
      this.vo.loading = false;
      this.userList = res;
    });

    this.store.pipe(select(totalUsersSelector)).subscribe((res) => (this.vo.total = res));
  }
}
