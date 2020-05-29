import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

const APP_ROUTES: Route[] = [
  {path: 'eventos', component: EventosShowComponent},
  {path: 'eventos/add', component: EventoAddComponent},
  {path: 'eventos/:id', component: EventoDetailComponent},
  {path: '', redirectTo: '/eventos', pathMatch: 'full'},
  {path: '**', redirectTo: '/eventos', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventosFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
