import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorsListComponent } from './tutors-list/tutors-list.component';

const routes: Routes = [
  {
    path:'',
    component:TutorsListComponent,
    outlet:"tutors"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorsRoutingModule { }
