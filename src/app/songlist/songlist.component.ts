import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { DataService } from '../data.service';

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
  private _data: DataService;

  constructor(data: DataService) {
    this._data = data;
  }

  ngOnInit() {
    this.songs = this._data.songs;
  }
}
