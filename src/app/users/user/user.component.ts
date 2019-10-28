import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { isEmpty } from 'lodash';

import { Store, select } from '@ngrx/store';

import { IAppState } from '@store/states/app.state';
import { selectedUserSelector } from '@store/selectors/user.selectors';
import { GetUser } from '@store/actions/user.actions';
import { IUser } from '@shared/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: IUser;
  user$ = this.store.pipe(select(selectedUserSelector)).subscribe((res) => (this.user = res));

  get emptyUser() {
    return isEmpty(this.user);
  }

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
