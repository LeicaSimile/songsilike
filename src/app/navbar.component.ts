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
          <ul class="navbar list-inline">
            <li class="list-inline-item"><a routerLink="">Songs</a></li>
            <li class="list-inline-item"><a routerLink="categories">Categories</a></li>
            <li class="list-inline-item"><a routerLink="about">About</a></li>
            <li class="list-inline-item"><a>Search</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavbarComponent {
  title = 'Songs I Like';
}
