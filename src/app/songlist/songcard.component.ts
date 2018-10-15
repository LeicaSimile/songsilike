import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
  <a routerLink="/song/{{song.id}}">
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">{{song.title}}</h5>
        <p class="card-subtitle text-muted">{{song.artist}} — {{song.category}}</p>
      </div>
    </div>
  </a>
  `,
  styles: [
    `.card {
      background: rgb(235,250,255);
      margin-bottom: 0.2rem;
      min-width: 13rem;
    }`
  ]
})
export class SongcardComponent {
  @Input() song: Song;
}
