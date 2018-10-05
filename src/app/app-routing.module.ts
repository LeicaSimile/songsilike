import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategorylistComponent } from './categories/categorylist.component';
import { AboutComponent } from './about.component';
import { SonglistComponent } from './songlist/songlist.component';

const routes: Routes = [
  {path: '', component: SonglistComponent},
  {path: 'categories', component: CategorylistComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
