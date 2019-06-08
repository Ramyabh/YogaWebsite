import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNavigationRoutingModule } from './global-navigation-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    GlobalNavigationRoutingModule
  ]
})
export class GlobalNavigationModule { }
