import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { CategorylistComponent } from './categories/categorylist.component';
import { AboutComponent } from './about.component';
import { SonglistComponent } from './songlist/songlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SonglistComponent,
    CategorylistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
