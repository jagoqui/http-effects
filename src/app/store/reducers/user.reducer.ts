import {User} from "../../models/user.model";
import {Action, createReducer, on} from "@ngrx/store";
import {loadUser, loadUserError, loadUserSuccess, unsetUser} from "../actions";

export interface UserState {
  id: string;
  user: User | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null
};

const _userReducer = createReducer(initialState,
  on(loadUser, (state, {id}) => ({
    ...state,
    id: id,
    loading: true,
  })),
  on(unsetUser, (state) => ({
    ...state,
    user: null,
    id: '',
    loading: false,
    error: {}
  })),
  on(loadUserSuccess, (state, {user}) => ({
    ...state,
    user: {...user},
    loading: false,
    loaded: true,
    error: null
  })),
  on(loadUserError, (state, {payload}) => ({
    ...state,
    user: null,
    loading: false,
    load: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
      ok: payload.ok
    }
  })),
);

export function userReducer(state: UserState | undefined, actions: Action) {
  return _userReducer(state, actions);
}
