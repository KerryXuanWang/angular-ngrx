import { UserActionTypes, UserActions } from '@store/actions/user.actions';
import { initUserState } from '@store/states/user.state';

export function userReducers(state = initUserState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case UserActionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }

    case UserActionTypes.GET_TOTAL_USERS_SUCCESS: {
      return {
        ...state,
        totalUsers: action.payload,
      };
    }

    default:
      return state;
  }
}
