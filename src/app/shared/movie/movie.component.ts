import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { MovieService } from 'src/app/core/services/local.movie.service';
import { TmdbService } from 'src/app/core/services/tmdb.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() id?: string;
  @Input() score?: string;
  @Input() genres?: string[];
  @Input() title?: string;
  @Input() imgSrc?: string;
  @Input() tmdbId!: number;
  @Input() downloadStatus?: string;

  @Input() magnet?: boolean = false;
  @Input() monitor?: boolean = false;
  @Input() download?: boolean = false;
  @Input() unmonitor?: boolean = false;

  @Output() unMonitorAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(private tmdbService: TmdbService, private toast: HotToastService, private movieService: MovieService) { }

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

  public emitUnMonitorAction(id: string) {
    this.unMonitorAction.emit(id);
  }




}
