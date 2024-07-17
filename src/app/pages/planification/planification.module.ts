import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanificationRoutingModule } from './planification-routing.module';
import { PlanlistComponent } from './planlist/planlist.component';


@NgModule({
  declarations: [
    PlanlistComponent
  ],
  imports: [
    CommonModule,
    PlanificationRoutingModule
  ]
})
export class PlanificationModule { }
