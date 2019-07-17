import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { GameStartComponent } from './game-start/game-start.component';

const routes: Routes = [
  {path: '', component: GameOverviewComponent},
  {path: 'start/:id', component: GameStartComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameOverviewComponent,
    GameStartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
