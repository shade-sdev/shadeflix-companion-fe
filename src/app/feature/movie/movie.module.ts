import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MoviehomeComponent } from './moviehome/moviehome.component';
import { IconModule } from 'src/app/shared/heroicon/icon/icon.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TmdbService } from 'src/app/core/services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';


@NgModule({
  declarations: [
    MovieComponent,
    MoviehomeComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    IconModule,
    SharedModule,
    HttpClientModule,
    HotToastModule.forRoot()
  ],
  providers: [TmdbService]
})
export class MovieModule { }
