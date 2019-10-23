import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/states/app.state';
import { IConfigState } from '@store/states/config.state';

const configState = (state: IAppState) => state.config;

export const configSelector = createSelector(
  configState,
  (state: IConfigState) => state.config,
);
