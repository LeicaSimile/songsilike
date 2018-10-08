import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <app-navbar></app-navbar>
  </div>
  <main class="container-fluid scrollbar">
    <router-outlet></router-outlet>
  </main>
  `,
  styles: [
    `main {
      background: rgba(200,240,255);
      padding: 1rem;
      height: 85%;
      width: 65%;
      overflow-y: scroll;
    }`
  ]
})
export class AppComponent {}
