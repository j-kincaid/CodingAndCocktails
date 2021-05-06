import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Route[] = [
  { path: 'trivia', component: TriviaComponent },
  { path: '', component: TriviaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TriviaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
