import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'app-songcard',
  template: `
  <a routerLink="/song/{{song.id}}">
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">{{song.title}}</h5>
        <p class="card-subtitle text-muted">{{song.artist}}<span *ngIf="song.artist != song.category"> — {{song.category}}</span></p>
      </div>
    </div>
  </a>
  `,
  styles: [
    `.card {
      background: rgb(235,250,255);
      margin-bottom: 0.2rem;
      min-width: 13rem;
    }
    h5 {
      color: rgb(60,200,250);
    }
    a {
      text-decoration: none;
    }
    .card:hover {
      background: rgb(100, 200, 250);
    }
    .card:hover h5 {
      color: rgb(250,250,250);
    }`
  ]
})
export class SongcardComponent {
  @Input() song: Song;
}
