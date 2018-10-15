import { Input } from '@angular/core';

export class Song {
  private static _id = 1;
  public id: number;
  public title: string;
  public artist: string;
  public category: string;

  constructor(@Input() title: string, @Input() artist: string, @Input() category: string) {
    this.id = Song._id++;
    this.title = title;
    this.artist = artist;
    this.category = category;
  }
}
