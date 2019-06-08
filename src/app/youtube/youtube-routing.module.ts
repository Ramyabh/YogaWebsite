import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';

const routes: Routes = [
  {
    path:'',
    component : YoutubeListComponent,
    outlet:"youtube"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
