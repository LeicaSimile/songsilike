import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { DataService } from '../data.service';

@Component({
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let song of songs">
        <app-songcard [song]="song" (keypress.arrowdown)="navigate($event)"></app-songcard>
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
    this.songs.sort((a, b) => a.title.localeCompare(b.title));
  }

  navigate(event: any) {
    console.log('hi');
    let element: any;

    switch (event.key) {
      case 'Up':
      case 'ArrowUp':
        element = event.srcElement.previousElementSibling;
        break;
      case 'Down':
      case 'ArrowDown':
        element = event.srcElement.nextElementSibling;
        break;
    }

    if (element != null) {
      //
    }
  }
}
