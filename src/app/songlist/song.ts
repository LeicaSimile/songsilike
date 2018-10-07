import { Input } from '@angular/core';

export class Song {
  static _id = 1;
  id: number;
  @Input() title: string;
  @Input() artist: string;

  constructor() {
    this.id = Song._id++;
  }
}
