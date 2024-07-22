import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupcreateComponent} from "./groupcreate/groupcreate.component";

const routes: Routes = [
    { path: 'add', component: GroupcreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
