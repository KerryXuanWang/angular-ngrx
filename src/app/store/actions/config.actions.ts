import { Action } from '@ngrx/store';

import { IConfig } from '@shared/models';

export enum ConfigActionTypes {
  GET_CONFIG = '[Config] Get Config',
  GET_CONFIG_SUCCESS = '[Config] Get Config Success',
}

export class GetConfig implements Action {
  public readonly type = ConfigActionTypes.GET_CONFIG;
}

export class GetConfigSuccess implements Action {
  public readonly type = ConfigActionTypes.GET_CONFIG_SUCCESS;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
