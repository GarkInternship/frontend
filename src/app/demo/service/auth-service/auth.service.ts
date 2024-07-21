import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../../../model/User";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Token} from "../../../model/TokenResponse";
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private currentUser = new BehaviorSubject<User | null>(null);
    baseUrl:string = environment.baseUrl;

    constructor(private http: HttpClient,private router:Router) { }

    signUp(user:any): Observable<Object> {
        return this.http.post<Object>(this.baseUrl+'/auth/signup',user);
    }
    singIn(LoginRequest:any): Observable<Token> {
        return this.http.post<Token>(this.baseUrl+'/auth/signin',LoginRequest);
    }

    setCurrentUser(user: User) {
        this.currentUser.next(user);
    }

    getCurrentUser(): User | undefined | null {
        // let token = localStorage.getItem("token");
        // if(token == null){
        //     return null;
        // }
        // const decoded = jwtDecode(token);
        // if(decoded.exp){
        //    return null;
        // }
        return this.currentUser.value;
    }

    clearCurrentUser() {
        this.currentUser.next(null);
    }
}
