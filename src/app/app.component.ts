import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IAppState } from './store/states/app.state';
import { GetConfig } from './store/actions/config.actions';
import { configSelector } from './store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this.store.pipe(select(configSelector));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
