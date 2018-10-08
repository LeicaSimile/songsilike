import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
    <div class="container-fluid">
      <h2>{{song.id}}. {{song.title}}</h2>
      <p>{{song.artist}}</p>
    </div>
  `,
  styles: [
    `.container-fluid {
      background: rgb(250,250,250);
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      width: 90%;
    }`
  ]
})
export class SongcardComponent {
  @Input() song: Song;
}
