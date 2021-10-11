import {usersReducer, UsersState} from "./reducers";
import {ActionReducerMap} from "@ngrx/store";
import {userReducer, UserState} from "./reducers/user.reducer";

export interface AppState {
  users: UsersState,
  user: UserState
}

export const appReducer: ActionReducerMap<AppState> = {
  users: usersReducer,
  user: userReducer
}
