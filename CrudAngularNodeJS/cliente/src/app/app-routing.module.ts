import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    component: SongListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'songs/add',
    component: SongFormComponent
  },
  {
    path: 'songs/edit/:id',
    component: SongFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
