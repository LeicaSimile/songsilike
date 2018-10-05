import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="container navbar">
        <h1>{{title}}</h1>
        <a>Songs</a>
        <a>Categories</a>
        <a>About</a>
        <span>Search</span>
    </nav>
  `
})
export class NavbarComponent {
  title = 'Songs I Like';
}
