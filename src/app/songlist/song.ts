import { Input } from '@angular/core';

export class Song {
  @Input() title: string;
  @Input() artist: string;
}
