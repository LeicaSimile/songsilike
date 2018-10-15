import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top">
        <div class="navbar-header">
          <h1 class="navbar-brand">{{title}}</h1>
        </div>
        <div id="navbar">
          <ul class="list-inline nav-tabs">
            <li class="list-inline-item nav-item">
              <a routerLink="" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Songs</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="about" class="nav-link" routerLinkActive="active">About</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="search" class="nav-link" routerLinkActive="active">Search</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavbarComponent {
  title = 'Songs I Like';
}
