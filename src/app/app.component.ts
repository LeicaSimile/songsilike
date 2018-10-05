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
      background: rgba(40,40,100);
      height: 80%;
    }`
  ]
})
export class AppComponent {
  
}
