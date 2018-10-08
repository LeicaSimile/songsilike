import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
    <div class="container">
      <h2>{{song.title}}</h2>
      <p>{{song.artist}}</p>
    </div>
  `,
  styles: [
    `.container {
      background: rgba(250,250,250,0.8);
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      max-width: 90%;
    }`
  ]
})
export class SongcardComponent {
  @Input() song: Song;
}
