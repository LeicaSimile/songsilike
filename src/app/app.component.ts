import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <app-navbar></app-navbar>
  </div>
  <main class="container">
    <router-outlet></router-outlet>
  </main>
  `,
  styles: [
    `.header {
      background: rgb(20,20,50);
      color: white;
    }`,
    `main {
      background: rgba(30,30,80);
      height: 80%;
    }`
  ]
})
export class AppComponent {
  
}
