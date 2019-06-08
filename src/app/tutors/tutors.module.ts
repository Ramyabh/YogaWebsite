import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorsRoutingModule } from './tutors-routing.module';
import { TutorsListComponent } from './tutors-list/tutors-list.component';

@NgModule({
  declarations: [TutorsListComponent],
  imports: [
    CommonModule,
    TutorsRoutingModule
  ]
})
export class TutorsModule { }
