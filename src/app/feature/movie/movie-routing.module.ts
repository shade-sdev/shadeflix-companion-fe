import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MoviehomeComponent } from './moviehome/moviehome.component';

const routes: Routes = [{
  path: '', component: MovieComponent,
  children: [
    { path: 'home', component: MoviehomeComponent },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
