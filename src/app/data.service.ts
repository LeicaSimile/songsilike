import { Injectable } from '@angular/core';
import { Song } from './songlist/song';

@Injectable()
export class DataService {
    songs: Song[];
    constructor() {
        this.songs = [
            new Song('The Dawn Will Come', 'Trevor Morris', 'Dragon Age'),
            new Song('Leliana\'s Song (In Uthenera)', 'Aubrey Ashburn, Inon Zur', 'Dragon Age'),
            new Song('We Were So Close', 'Christophe Beck', 'Frozen'),
            new Song('Falling (Lambert Rework)', 'Enkidu', 'Enkidu'),
            new Song('Wake Up', 'EDEN', 'EDEN'),
            new Song('How Far I\'ll Go', 'Auli\'i Cravalho', 'Moana'),
            new Song('Project Ashe', 'League of Legends', 'League of Legends'),
            new Song('Winterbliss', 'cycerin', 'cycerin'),
            new Song('I Don’t Wanna Live Forever', 'Taylor Swift ft. Zayn', 'Taylor Swift'),
            new Song('Child of Light', 'Lindsey Stirling', 'Lindsey Stirling'),
            new Song('Song of the Caged Bird', 'Lindsey Stirling', 'Lindsey Stirling'),
            new Song('Evermore', 'Dan Stevens', 'The Beauty and the Beast'),
            new Song('Shelter', 'Porter Robinson & Madeon', 'Shelter'),
            new Song('Diary of Jane', 'Breaking Benjamin', 'Breaking Benjamin'),
            new Song('Look What You Made Me Do', 'Taylor Swift', 'Taylor Swift'),
            new Song('Photograph', 'Ed Sheeran', 'Ed Sheeran'),
            new Song('Legends Never Die', 'League of Legends ft. Against The Current', 'League of Legends'),
            new Song('Call It What You Want', 'Taylor Swift', 'Taylor Swift'),
            new Song('Getaway Car', 'Taylor Swift', 'Taylor Swift'),
            new Song('New Year\'s Day', 'Taylor Swift', 'Taylor Swift'),
            new Song('Delicate', 'Taylor Swift', 'Taylor Swift'),
            new Song('Satisfied', 'Hamilton', 'Hamilton'),
            new Song('Forever & Always (Piano version)', 'Taylor Swift', 'Taylor Swift'),
            new Song('You don\'t have to say you\'re okay', 'Xeuphoria', 'Xeuphoria')
        ];
    }
}
