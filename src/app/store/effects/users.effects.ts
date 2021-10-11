import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadUsers, loadUsersError, loadUsersSuccess} from "../actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {UserService} from "../../service/user.service";
import {of} from "rxjs";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(
        () => this.userSvc.getUsers().pipe(
          map((users) => loadUsersSuccess({users})),
          catchError((error) => of(loadUsersError({payload: error})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userSvc: UserService) {}
}
