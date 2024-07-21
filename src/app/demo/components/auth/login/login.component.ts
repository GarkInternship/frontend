import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth-service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    valCheck: string[] = ['remember'];
    username: string = "";
    password!: string;

    constructor(public layoutService: LayoutService,private router:Router,private authService:AuthService) { }

    signIn(){
        if(this.username == "" ||this.password == ""){
            console.log("FORM ERROR!");
        }else{
            this.authService.singIn({username:this.username,password:this.password}).subscribe((response) =>{
                localStorage.setItem("token",response.token);
                this.authService.setCurrentUser(response.user);
                this.router.navigateByUrl("/plan/list");
            });
        }
    }

    goToSignUp() {
        this.router.navigateByUrl("/auth/register")
    }
}
