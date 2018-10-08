import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { CategorylistComponent } from './categories/categorylist.component';
import { AboutComponent } from './about.component';
import { SonglistComponent } from './songlist/songlist.component';
import { Song } from './songlist/song';
import { SongcardComponent } from './songlist/songcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SonglistComponent,
    SongcardComponent,
    CategorylistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Song],
  bootstrap: [AppComponent]
})
export class AppModule { }
