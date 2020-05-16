import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventosFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
