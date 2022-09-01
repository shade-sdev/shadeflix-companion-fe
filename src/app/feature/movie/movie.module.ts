import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { TmdbService } from 'src/app/core/services/tmdb.service';
import { IconModule } from 'src/app/shared/heroicon/icon/icon.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MovieService } from 'src/app/core/services/local.movie.service';


@NgModule({
  declarations: [
    MovieComponent,
    HomeComponent,
    MonitorComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    IconModule,
    SharedModule,
    HttpClientModule,
    HotToastModule.forRoot()
  ],
  providers: [TmdbService, MovieService]
})
export class MovieModule { }
