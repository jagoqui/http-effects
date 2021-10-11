import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../../models/user.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.reducers";
import {loadUser} from "../../../store/actions";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: User | undefined | null;
  loading: boolean = false;
  error: any;
  private destroy$ = new Subject<any>();

  constructor(private storeSvc: Store<AppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['userId'];
    this.storeSvc.select('user')
      .pipe(takeUntil(this.destroy$))
      .subscribe(({user, loading, error}) => {
        this.user = user;
        this.loading = loading;
        this.error = error;
      })
    this.storeSvc.dispatch(loadUser({id}));
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
