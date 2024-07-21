import { Component, OnInit } from '@angular/core';
import {LayoutService} from "../../../../../layout/service/app.layout.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../../environments/environment";
import {AuthService} from "../../../../service/auth-service/auth.service";
import {User} from "../../../../../model/User";
import {Role} from "../../../../../model/Role";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
    styles:[`
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
        :host ::ng-deep .p-multiselect {
            min-width: 15rem;
        }

        :host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {
            min-width: 20rem;
        }

        :host ::ng-deep .multiselect-custom .p-multiselect-label {
            padding-top: .25rem;
            padding-bottom: .25rem;

        }

        :host ::ng-deep .multiselect-custom .country-item.country-item-value {
            padding: .25rem .5rem;
            border-radius: 3px;
            display: inline-flex;
            margin-right: .5rem;
            background-color: var(--primary-color);
            color: var(--primary-color-text);
        }

        :host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {
            width: 17px;
        }

        :host ::ng-deep .multiselect-custom .country-item {
            display: flex;
            align-items: center;
        }

        :host ::ng-deep .multiselect-custom .country-item img.flag {
            width: 18px;
            margin-right: .5rem;
        }

        :host ::ng-deep .multiselect-custom .country-placeholder {
            padding: 0.25rem;
        }
        :host ::ng-deep .p-colorpicker {
            width: 2.5em
        }

    `]
})
export class RegisterComponent implements OnInit {

  constructor(public layoutService: LayoutService,private router:Router,private authService:AuthService) { }

    password!: string;
    selectedCountryAdvanced: any[] = [];
    user: { roles:any, username: string;password:string } = {
        username:"",
        roles: [],
        password: ""
    }

    roles : any[] = [
        {name: "Directeur Technique", code: "DIRECTEUR_TECHNIQUE"},
        {name: "Personnel Administrative", code: "PERSONNEL_ADMINISTRATIVE"},
        {name: "Entraineur", code: "ENTRAINEUR"},
        {name: "Joueur", code: "JOUEUR"},
    ];
    selectedMulti: any[] = [];

  ngOnInit(): void {
      console.log("Current user: ",this.authService.getCurrentUser());
  }
    signUpUser(){
        if (this.user.username == "" || this.selectedMulti == [] || this.password == "") {
            console.log("FORM ERROR!");
        } else {
            this.user.roles = [];
            this.selectedMulti.forEach(role=>{
                this.user.roles.push(role.code);
            })
            this.user.password = this.password;
            console.log(this.user);
            this.authService.signUp(this.user).subscribe(result => {
                console.log("result : ",result);
            });
        }
    }

    goToLogin() {
        this.router.navigateByUrl("/auth/login");
    }
}
