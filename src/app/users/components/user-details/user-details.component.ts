import {ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../../models/user.model";
import {Subject} from "rxjs";
import {UserService} from "../../../service/user.service";
import {takeUntil} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit, OnChanges,OnDestroy {

  user: User | undefined;
  private destroy$ = new Subject<any>();

  constructor(private userSvc: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['userId'];
    this.userSvc.getUserById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        //TODO: Si ya está abierta la vista, ésta no hacer la llamada de nuevo
        console.log(id, user);
        this.user = user;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('entra', changes.id.currentValue, changes.id.previousValue);
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }

}
