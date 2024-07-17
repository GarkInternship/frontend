import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanlistComponent} from "./planlist/planlist.component";

const routes: Routes = [
    { path: 'list', component: PlanlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanificationRoutingModule {

}
