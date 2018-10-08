import { Component, OnInit } from '@angular/core';
import { Song } from './song';

@Component({
  template: `
    <div class="container">
      <ul>
        <li *ngFor="let song of songs">
          <app-songcard [song]="song"></app-songcard>
        </li>
      </ul>
    </div>
  `
})
export class SonglistComponent implements OnInit {
  songs: Song[];

  ngOnInit() {
    this.songs = [
      new Song('Let It Go', 'Idina Menzel'),
      new Song('For the First Time in Forever (Reprise)', 'Kristen Bell & Idina Menzel')
    ];
  }
}
