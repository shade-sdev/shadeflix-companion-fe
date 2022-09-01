import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Page } from 'src/app/core/models/model.front';
import { Movie } from 'src/app/core/models/model.movie';
import { MovieService } from 'src/app/core/services/local.movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  public movies: Movie[] = [];
  public totalPages: number = 444;
  public currentPage: number = 1;

  constructor(private movieService: MovieService, private toast: HotToastService) {
    this.changeMoviePage(0);
  }

  ngOnInit(): void {
  }

  public changeMoviePage(page: number) {
    this.currentPage = page;
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    if (page == 0) {
      this.loadMovies(0);
    } else if (page > 0 && page <= this.totalPages) {
      this.loadMovies(page - 1);
    } else {
      this.loadMovies(this.totalPages - 1);
    }
  }

  private loadMovies(page: number) {
    const params = {
      page: page,
      size: environment.pageSize
    };

    this.movieService.getMovies(params)
      .subscribe(
        {
          next: (movies: Page<Movie[]>) => {
            this.movies = movies.content;
            this.totalPages = movies.totalPages;
          }
        })
  }

  public unMonitorMovie(id: string) {
    this.movieService.deleteMovie(id)
      .pipe(
        this.toast.observe(
          {
            loading: 'Deleteing...',
            success: 'Deleted',
            error: 'Deleting failed',
          })
      )
      .subscribe(
        {
          complete: () => {
            this.changeMoviePage(this.currentPage);
          }
        }
      );

  }

}
