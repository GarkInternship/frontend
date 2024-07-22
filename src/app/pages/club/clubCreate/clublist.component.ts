import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../../demo/service/country.service";
import { ClubService } from '../service/club.service'; // Adjust the import path as needed
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { GroupCreateDialogComponent } from "../../group/group-create-dialog/group-create-dialog.component";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-clubCreate',
    templateUrl: './clublist.component.html',
    styleUrls: ['./clublist.component.scss'],
    providers: [MessageService]
})
export class ClublistComponent implements OnInit {

    clubForm: FormGroup;
    selectedCountryAdvanced: any[] = [];
    countries: any[] = [];
    filteredCountries: any[] = [];
    selectedImage: File | null = null;
    uploadedFiles: any[] = [];


    constructor(
        private countryService: CountryService,
        private clubService: ClubService,
        private router: Router,
        private fb: FormBuilder,
        private dialog: MatDialog,
        private messageService: MessageService
    ) {
        this.clubForm = this.fb.group({
            nom: ['', Validators.required],
            president: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            foundationYear: ['', Validators.required],
            location: ['', Validators.required],
            image: [null, Validators.required]
        });
    }

    ngOnInit(): void {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
    }

    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    onImageSelected(event: any): void {
        this.selectedImage = event.target.files[0];
    }

    createClub(): void {
        if (this.clubForm.valid && this.selectedImage) {
            const formData: FormData = new FormData();
            console.log(this.clubForm.get("foundationYear"))
            console.log(this.clubForm.get("foundationYear"))
            formData.append('nom', this.clubForm.get('nom')?.value);
            formData.append('president', this.clubForm.get('president')?.value);
            formData.append('foundationYear', this.clubForm.get('foundationYear')?.value);
            formData.append('location', this.clubForm.get('location')?.value);
            formData.append('image', this.selectedImage);

            this.clubService.createClub(formData).subscribe(
                response => {
                    console.log('Club created successfully:', response);
                    this.openGroupCreateDialog(response);
                },
                error => {
                    console.error('Error creating club:', error);
                }
            );
        } else {
            console.error('Form is invalid');
        }
    }

    openGroupCreateDialog(club: any) {
        const dialogRef = this.dialog.open(GroupCreateDialogComponent, {
            width: '400px',
            data: { club },
            disableClose: true,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'createGroup') {
                console.log('User chose to create a group');
                // Handle additional actions if needed
            } else {
                console.log('User chose to skip group creation');
            }
        });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}
