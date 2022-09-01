import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/model.front';
import { Movie } from '../models/model.movie';

@Injectable()
export class MovieService {

  private readonly movieBaseUrl = `${environment.baseUrl}/movies`

  constructor(private httpClient: HttpClient) { }

  public getMovies(param: Params): Observable<Page<Movie[]>> {
    return this.httpClient.get<Page<Movie[]>>(`${this.movieBaseUrl}`, { params: param });
  }

  public deleteMovie(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.movieBaseUrl}/${id}`);
  }

}
