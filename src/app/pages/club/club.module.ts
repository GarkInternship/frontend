import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClublistComponent } from './clubCreate/clublist.component';
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import { ClubListComponent } from './club-list/club-list.component';
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    ClublistComponent,
    ClubListComponent
  ],
    imports: [
        CommonModule,
        ClubRoutingModule,
        InputTextModule,
        AutoCompleteModule,
        FormsModule,
        CalendarModule,
        ReactiveFormsModule,
        TableModule,
        FileUploadModule
    ]
})
export class ClubModule { }
