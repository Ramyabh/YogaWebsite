import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'homepage',
    loadChildren:'./homepage/homepage.module#HomepageModule'

  },
  {
    path:'news',
    loadChildren:'./news/news.module#NewsModule'
  },
  {
    path:'studios',
    loadChildren:'./studios/studios.module#StudiosModule'
    
  },
  {
    path:'tutors',
    loadChildren:'./tutors/tutors.module#TutorsModule'
  },
  {
    path:'youtube',
    loadChildren:'./youtube/youtube.module#YoutubeModule'
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
