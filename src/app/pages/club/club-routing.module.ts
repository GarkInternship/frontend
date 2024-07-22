import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClublistComponent} from "./clubCreate/clublist.component";
import {ClubListComponent} from "./club-list/club-list.component";


const routes: Routes = [
    { path: 'clubform', component: ClublistComponent },
    { path: 'clubview', component: ClubListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
