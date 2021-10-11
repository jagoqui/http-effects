import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import { AppState } from 'src/app/store/app.reducers';
import {unsetUser} from "../../../store/actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private storeSvc: Store<AppState>) {
  }

  onSearchUserById(id: string) {
    if (id) {
      //TODO: La action puede ser inecesaria, no se está rederizando la tarjeta una vez está en la vista de detalles
      this.storeSvc.dispatch(unsetUser());
      this.router.navigate(['/user', id]).then();
    }
  }

  ngOnInit(): void {
  }
}
