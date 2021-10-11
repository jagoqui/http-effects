import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadUser, loadUserError, loadUserSuccess} from "../actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {UserService} from "../../service/user.service";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => this.actions$.pipe(
      ofType(loadUser),
      mergeMap(
        (action) => this.userSvc.getUserById(action.id).pipe(
          map((user) => loadUserSuccess({user}), tap((user) => console.log(user))),
          catchError((error) => of(loadUserError({payload: error})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userSvc: UserService) {
  }
}
