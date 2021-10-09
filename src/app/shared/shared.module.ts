import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";


const exports = [
  NavbarComponent
]

@NgModule({
  declarations: [
     exports
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    exports
  ]
})
export class SharedModule {
}
