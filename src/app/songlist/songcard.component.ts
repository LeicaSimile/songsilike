import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
    <div class="container">
      <h2>{{song.title}}</h2>
      <p>{{song.artist}}</p>
    </div>
  `
})
export class SongcardComponent {
  @Input() song: Song;
}
