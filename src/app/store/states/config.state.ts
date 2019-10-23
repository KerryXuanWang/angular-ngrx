import { IConfig } from '@shared/models';

export interface IConfigState {
  config: IConfig;
}

export const initConfigState: IConfigState = {
  config: null,
};
