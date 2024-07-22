import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GroupService {


    private baseUrl = 'http://localhost:8081/groups';

    constructor(private http: HttpClient,private router: Router) { }

    createGroup(group: any): void {
        this.http.post(`${this.baseUrl}/add`, group).subscribe(
            response => {
                console.log('Group created successfully:', response);
                this.router.navigate(['/']); // Replace '/' with your desired route
            }
        );
        // return this.http.post(`${this.baseUrl}/add`, group);
    }
}
