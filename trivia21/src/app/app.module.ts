import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Trivia21Component } from './trivia21/trivia21.component';

const routes: Route[] = [
  { path: 'trivia', component: Trivia21Component },
  { path: '', component: Trivia21Component }, 
  { path: '**', redirectTo: '' }
 ];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, Trivia21Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
