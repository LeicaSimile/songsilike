import { Component } from '@angular/core';

@Component({
  template: `
    <div class="text-center">
      <h1 class="display-1 ">404 Not Found</h1>
      <hr>
      <p class="lead">We couldn't find the page you're looking for.</p>
      <button type="button" class="btn btn-primary btn-lg" routerLink="">Go home, you're drunk.</button>
    </div>
  `
})
export class NotfoundComponent {}
