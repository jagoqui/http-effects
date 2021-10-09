import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  onSearchUserById(id: string) {
    console.log(id);
    if (id) {
      this.router.navigate(['/user', id]).then();
    }
  }

  ngOnInit(): void {
  }
}
