import { Injectable } from '@angular/core';
import { Song } from './songlist/song';

@Injectable()
export class DataService {
    songs: Song[];
    constructor() {
        this.songs = [
            new Song('The Dawn Will Come', 'Trevor Morris'),
            new Song('Leliana\'s Song (In Uthenera)', 'Aubrey Ashburn, Inon Zur'),
            new Song('We Were So Close', 'Christophe Beck'),
            new Song('Falling (Lambert Rework)', 'Enkidu'),
            new Song('Wake Up', 'EDEN'),
            new Song('How Far I\'ll Go', 'Auli\'i Cravalho'),
            new Song('Project Ashe', 'League of Legends'),
            new Song('Winterbliss', 'cycerin'),
            new Song('How Far I\'ll Go (Reprise)', 'Auli\'i Cravalho'),
            new Song('I Don’t Wanna Live Forever', 'Taylor Swift ft. Zayn'),
            new Song('Riptide (Taylor Swift Cover)', 'Taylor Swift'),
            new Song('Sweet Escape (Cover)', 'Taylor Swift'),
            new Song('Child of Light', 'Lindsey Stirling'),
            new Song('Song of the Caged Bird', 'Lindsey Stirling'),
            new Song('Evermore', 'Dan Stevens'),
            new Song('Shelter', 'Porter Robinson & Madeon'),
            new Song('Diary of Jane', 'Breaking Benjamin'),
            new Song('Look What You Made Me Do', 'Taylor Swift'),
            new Song('Photograph', 'Ed Sheeran'),
            new Song('Legends Never Die', 'League of Legends ft. Against The Current'),
            new Song('Call It What You Want', 'Taylor Swift'),
            new Song('Getaway Car', 'Taylor Swift'),
            new Song('New Year\'s Day', 'Taylor Swift'),
            new Song('Delicate', 'Taylor Swift'),
            new Song('Satisfied', 'Hamilton'),
            new Song('September (Taylor Swift Cover)', 'Taylor Swift'),
            new Song('American Girl (Taylor Swift Cover)', 'Taylor Swift'),
            new Song('Delicate (Acoustic)', 'Taylor Swift'),
            new Song('Forever & Always (Piano version)', 'Taylor Swift'),
            new Song('You don\'t have to say you\'re okay', 'Xeuphoria')
        ];
    }
}
