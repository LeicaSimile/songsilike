import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <ul>
        <li *ngFor="let song of songs">
          <app-song></app-song>
        </li>
      </ul>
    </div>
  `
})
export class SonglistComponent {
  songs: any[];
}
