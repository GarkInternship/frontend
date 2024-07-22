import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {GroupService} from "../../group/service/group.service";

@Component({
  selector: 'app-groupcreate',
  templateUrl: './groupcreate.component.html',
  styleUrls: ['./groupcreate.component.scss']
})
export class GroupcreateComponent implements OnInit {
    creatingGroup = false;
    groupForm: FormGroup;
    niveaux: string[] = ['Poussin', 'Benjamin', 'Minime', 'Cadet', 'Junior', 'Senior'];
    clubName: string = 'NomDuClub'; // Replace with the actual club name or fetch it from your service

    constructor(
        private fb: FormBuilder,
        private groupService: GroupService
    ) {
        this.groupForm = this.fb.group({
            niveau: ['']
        });
    }

    ngOnInit(): void {}

    startCreatingGroup() {
        this.creatingGroup = true;
    }

    skipCreatingGroup() {
        // Handle skipping group creation
    }

    createGroup() {
        const niveau = this.groupForm.value.niveau;
        const clubName = localStorage.getItem('club_nom');
        const groupName = `${clubName} ${niveau}`;
        // Call your service to create the group with the generated groupName
        console.log('Creating group:', groupName);
    }
}
