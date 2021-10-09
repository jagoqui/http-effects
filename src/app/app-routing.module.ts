import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from "./users/components/users-list/users-list.component";
import {UserDetailsComponent} from "./users/components/user-details/user-details.component";

const routes: Routes = [
  {
    path: 'home',
    component: UsersListComponent
  }, {
    path: 'user/:userId',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
