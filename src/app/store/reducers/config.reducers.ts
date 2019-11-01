import { ConfigActionTypes, ConfigActions } from '@store/actions/config.actions';
import { initConfigState } from '@store/states/config.state';

export function configReducers(state = initConfigState, action: ConfigActions) {
  switch (action.type) {
    case ConfigActionTypes.GET_CONFIG_SUCCESS: {
      return {
        ...state,
        config: action.payload,
      };
    }

    default:
      return state;
  }
}
