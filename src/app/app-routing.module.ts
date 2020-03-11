import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import {StumbleHomeComponent} from './stumble-home/stumble-home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: StumbleHomeComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
