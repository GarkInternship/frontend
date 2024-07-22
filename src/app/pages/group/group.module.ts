import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupcreateComponent } from './groupcreate/groupcreate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import { GroupCreateDialogComponent } from './group-create-dialog/group-create-dialog.component';


@NgModule({
  declarations: [
    GroupcreateComponent,
    GroupCreateDialogComponent
  ],
    imports: [
        CommonModule,
        GroupRoutingModule,
        FormsModule,
        DropdownModule,
        ReactiveFormsModule
    ]
})
export class GroupModule { }
