import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <ul>
        <li *ngFor="let song of songs">
          <app-songcard></app-songcard>
        </li>
      </ul>
    </div>
  `
})
export class SonglistComponent {
  songs: any[];
}
