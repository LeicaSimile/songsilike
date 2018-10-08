import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">{{song.title}}</h5>
        <p class="card-subtitle text-muted">{{song.artist}}</p>
      </div>
    </div>
  `,
  styles: [
    `.card {
      background: rgb(250,250,250);
      margin-bottom: 0.2rem;
      min-width: 13rem;
    }`
  ]
})
export class SongcardComponent {
  @Input() song: Song;
}
