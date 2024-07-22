import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClubService } from '../service/club.service'; // Adjust the path accordingly
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-club-list',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.scss'],
    providers: [ConfirmationService]
})
export class ClubListComponent implements OnInit {
    clubs: any[] = [];
    loading: boolean = true;

    @ViewChild('globalFilter') globalFilter!: ElementRef;

    constructor(private clubService: ClubService, private confirmationService: ConfirmationService) { }

    ngOnInit(): void {
        this.loadClubs();
    }

    loadClubs() {
        this.clubService.getClubs().subscribe(data => {
            this.clubs = data;
            this.loading = false;
        });
    }

    deleteClub(id: number) {
        // this.confirmationService.confirm({
        //     message: 'Are you sure you want to delete this club?',
        //     accept: () => {
                this.clubService.deleteClub(id).subscribe(() => {
                    this.loadClubs(); // Reload clubs after deletion
            //     });
            // }
        });
    }

    onGlobalFilter(table: any, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: any) {
        table.clear();
        this.globalFilter.nativeElement.value = '';
    }
}
