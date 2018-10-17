import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { AboutComponent } from './about.component';
import { SonglistComponent } from './songlist/songlist.component';
import { Song } from './songlist/song';
import { SongcardComponent } from './songlist/songcard.component';
import { DataService } from './data.service';
import { LyricpageComponent } from './lyricpage.component';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SonglistComponent,
    SongcardComponent,
    AboutComponent,
    LyricpageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Song, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
