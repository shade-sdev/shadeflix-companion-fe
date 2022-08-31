import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotToastModule } from '@ngneat/hot-toast';
import { HeroIconModule } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './feature/movie/movie.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    HeroIconModule.forRoot({}, {
      defaultHostDisplay: 'inlineBlock',
      attachDefaultDimensionsIfNoneFound: true
    }),
    SharedModule,
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
