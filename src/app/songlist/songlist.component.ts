import { Component, OnInit } from '@angular/core';
import { Song } from './song';

@Component({
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let song of songs">
        <app-songcard [song]="song"></app-songcard>
      </li>
    </ul>
  `
})
export class SonglistComponent implements OnInit {
  songs: Song[];

  ngOnInit() {
    this.songs = [
      new Song('Look What You Made Me Do', 'Taylor Swift'),
      new Song('Look What You Made Me Do', 'Taylor Swift'),
      new Song('Look What You Just Made Me Do', 'Taylor Swift'),
      new Song('Look What You Just Made Me oo', 'Taylor Swift'),
      new Song('Look What You Made Me Do', 'Taylor Swift'),
      new Song('Look What You Made Me Do', 'Taylor Swift'),
      new Song('Look What You Just Made Me Do', 'Taylor Swift'),
      new Song('Look What You Just Made Me Do', 'Taylor Swift')
    ];
  }
}
