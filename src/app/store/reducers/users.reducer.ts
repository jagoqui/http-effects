import {User} from "../../models/user.model";
import {Action, createReducer, on} from "@ngrx/store";
import {loadUsers, loadUsersError, loadUsersSuccess} from "../actions";

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const _usersReducer = createReducer(initialState,
  on(loadUsers, (state) => ({...state, loading: true})),
  on(loadUsersSuccess, (state, {users}) => ({
    ...state,
    users: [...users],
    loading: false,
    loaded: true,
    error: null
  })),
  on(loadUsersError, (state, {payload}) => ({
    ...state,
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

export function usersReducer(state: UsersState | undefined, actions: Action) {
  return _usersReducer(state, actions);
}
