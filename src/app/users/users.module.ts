import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const exports = [
  UsersListComponent,
  UserDetailsComponent
]

@NgModule({
  declarations: [exports],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [exports]
})
export class UsersModule {
}
