import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { SerieComponent } from './serie/serie.component';
import { IconModule } from './heroicon/icon/icon.module';
import { RouterModule } from '@angular/router';
import { TmdbService } from '../core/services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { PaginationComponent } from './pagination/pagination.component';
import { MovieService } from '../core/services/local.movie.service';

const reUsables = [FooterComponent, NavbarComponent, MovieComponent, SerieComponent, PaginationComponent]

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MovieComponent,
    SerieComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    HttpClientModule,
    HotToastModule.forRoot()
  ],
  exports: [reUsables],
  providers: [TmdbService, MovieService]
})
export class SharedModule { }
