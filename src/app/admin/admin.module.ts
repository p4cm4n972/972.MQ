/**
 * MDB Angular
 */
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from './adminMenu/admin-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/sign-up.component';

import { UserService } from './adminShared/user.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignUpComponent},
            {path: '', component: AdminMenuComponent, canActivate: [UserService]}
        ]
    }
]

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MDBBootstrapModulesPro.forRoot()
    ],

    exports: [RouterModule],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent
    ],
    providers: [MDBSpinningPreloader, UserService ]
})
export class AdminModule { }