import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";
import {loadUsers} from "../../../store/actions";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: []
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading: boolean = false;
  error: any;
  private destroy$ = new Subject<any>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //TODO: No estoy seguro si la destructuración pasa la rederencia o hace una copia del valor
    this.store.select('users').subscribe(({users, loading, error}) => {
      this.users = [...users];
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUsers());
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
