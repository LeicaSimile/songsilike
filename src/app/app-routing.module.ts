import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { SonglistComponent } from './songlist/songlist.component';
import { LyricpageComponent } from './lyricpage.component';
import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
  {path: '', component: SonglistComponent},
  {path: 'about', component: AboutComponent},
  {path: 'song/:id', component: LyricpageComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
