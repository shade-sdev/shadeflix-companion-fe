import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { TmdbService } from 'src/app/core/services/tmdb.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() score?: string;
  @Input() genres?: string[];
  @Input() title?: string;
  @Input() imgSrc?: string;
  @Input() tmdbId!: number;
  @Input() magnet?: boolean = false;
  @Input() monitor?: boolean = false;
  @Input() download?: boolean = false;
  @Input() unmonitor?: boolean = false;

  constructor(private tmdbService: TmdbService, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  public monitorMovie(tmdbId: number) {
    this.tmdbService.monitorMovie(tmdbId)
      .pipe(
        this.toast.observe(
          {
            loading: 'Monitoring...',
            success: 'Monitored',
            error: 'Monitoring failed',
          })
      )
      .subscribe();
  }


}
