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
export class UserDetailsComponent implements OnInit, OnChanges, OnDestroy {

  user: User | undefined | null;
  private destroy$ = new Subject<any>();

  constructor(private storeSvc: Store<AppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['userId'];
    this.storeSvc.select('user')
      .pipe(takeUntil(this.destroy$))
      .subscribe(({user}) => this.user = user)
    this.storeSvc.dispatch(loadUser({id}));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('entra', changes.id.currentValue, changes.id.previousValue);
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
