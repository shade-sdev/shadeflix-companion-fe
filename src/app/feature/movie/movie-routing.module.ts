import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MovieComponent } from './movie.component';

const routes: Routes = [{
  path: '', component: MovieComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'monitor', component: MonitorComponent },
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
