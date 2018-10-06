import { Component } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
    <div class="container">
      <h2>{{song.title}}</h2>
      <span>{{song.artist}}</span>
    </div>
  `
})
export class SongcardComponent {
  song: Song;
}
