import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TmdbMovie } from '../models/tmdb.movie';

@Injectable()
export class TmdbService {

  private readonly tmdbBaseUrl = `https://api.themoviedb.org/3`
  private readonly localTmdbBaseUrl = `${environment.baseUrl}/tmdb`

  constructor(private httpClient: HttpClient) { }

  public popularMovies(param: Params): Observable<TmdbMovie> {
    return this.httpClient.get<TmdbMovie>(`${this.tmdbBaseUrl}/movie/popular?api_key=${environment.key}`, { params: param });
  }

  public monitorMovie(tmdbId: number): Observable<void> {
    return this.httpClient.get<void>(`${this.localTmdbBaseUrl}/movie/${tmdbId}`);
  }

}
