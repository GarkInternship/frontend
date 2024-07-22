import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GroupService } from '../service/group.service'; // Adjust the import path
import {Router} from "@angular/router";

@Component({
    selector: 'app-group-create-dialog',
    templateUrl: './group-create-dialog.component.html',
    styleUrls: ['./group-create-dialog.component.scss']
})
export class GroupCreateDialogComponent {
    groupForm: FormGroup;
    niveaux: string[] = ['Poussin', 'Benjamin', 'Minime', 'Cadet', 'Junior', 'Senior'];

    constructor(
        public dialogRef: MatDialogRef<GroupCreateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private groupService: GroupService,
        private router: Router
    ) {
        this.groupForm = this.fb.group({
            niveau: ['', Validators.required]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
        this.router.navigate(['/']); // Replace '/' with your desired route
    }

    createGroup() {
        if (this.groupForm.valid) {
            const niveau = this.groupForm.value.niveau;
            const groupName = `${this.data.club.nom} ${niveau}`;
            const groupData = { nom: groupName, niveau: niveau, club: this.data.club };

            this.groupService.createGroup(groupData);
            this.dialogRef.close('createGroup');
            this.router.navigate(['/']); // Replace '/' with your desired route
        } else {
            console.error('Form is invalid');
        }
    }
}
