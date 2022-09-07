import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayCardsComponent } from './play-cards/play-cards.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'play-cards/:id', component: PlayCardsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
