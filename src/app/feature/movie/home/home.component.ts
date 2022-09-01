import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { movieGenres, TmdbMovie, TmdbMovieResult } from 'src/app/core/models/tmdb.movie';
import { TmdbService } from 'src/app/core/services/tmdb.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: TmdbMovieResult[] = [];
  public totalPages: number = 68;

  constructor(private tmdbService: TmdbService, private toast: HotToastService) {

  }

  ngOnInit(): void {
    this.loadMovies(1);
  }

  public changeMoviePage(page: number) {
    this.loadMovies(page);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  private loadMovies(page: number) {
    const params = {
      page: page
    };
    this.tmdbService.popularMovies(params)
      .subscribe((movies: TmdbMovie) => {
        this.totalPages = movies.total_pages;
        const moviesResponse: TmdbMovieResult[] = movies.results.map((movie: TmdbMovieResult) => {
          const movieItem = {} as TmdbMovieResult;
          movieItem.backdrop_path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
          movieItem.id = movie.id;
          movieItem.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
          movieItem.release_date = movie.release_date;
          movieItem.vote_average = movie.vote_average;
          movieItem.genre_ids = this.getGenres(movie.genre_ids);
          movieItem.title = movie.title;
          return movieItem;
        })
        this.movies = moviesResponse;
      });
  }

  private getGenres(genre: string[]): string[] {

    const sanitizedGenres: string[] = [];

    genre.forEach(g => {
      const x = movieGenres.genres.filter((gen) => {
        return gen.id.toString() == g;
      })
      sanitizedGenres.push(x[0].name);
    })

    return sanitizedGenres;
  }

}
