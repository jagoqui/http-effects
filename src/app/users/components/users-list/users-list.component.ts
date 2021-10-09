import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../models/user.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent implements OnInit, OnDestroy{
  users:User[]=[];
  private destroy$ = new Subject<any>();
  constructor(private userSvc:UserService) { }

  ngOnInit(): void {
    this.userSvc.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users)=>this.users= users);
  }

  ngOnDestroy() {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}
