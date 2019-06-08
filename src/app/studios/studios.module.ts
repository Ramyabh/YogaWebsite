import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiosRoutingModule } from './studios-routing.module';
import { StudiosListComponent } from './studios-list/studios-list.component';

@NgModule({
  declarations: [StudiosListComponent],
  imports: [
    CommonModule,
    StudiosRoutingModule
  ]
})
export class StudiosModule { }
