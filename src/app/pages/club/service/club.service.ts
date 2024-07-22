import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClubService {

    private baseUrl = 'http://localhost:8081/clubs';

    constructor(private http: HttpClient) { }

    createClub(club: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/add`, club);
    }
    getClubs(): Observable<any> {
        return this.http.get(`${this.baseUrl}/view`);
    }
    deleteClub(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`);
    }
}
