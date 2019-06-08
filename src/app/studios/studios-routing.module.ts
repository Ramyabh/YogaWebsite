import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudiosListComponent } from './studios-list/studios-list.component';

const routes: Routes = [
  {
    path:'',
    component:StudiosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosRoutingModule { }
