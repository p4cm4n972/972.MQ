import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    validatingLogin: FormGroup;
    email: string;
    password1: string;

    constructor(private _userSVC: UserService, private _router: Router) {}

    ngOnInit() {
        this.validatingLogin = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password1: new FormControl(null, Validators.required)
        });
    }
    login() {
        this._userSVC.login(this.email, this.password1);
        this._userSVC.verifyUser();
    }

    signup() {
        this._router.navigate(['/admin/signup']);
    }

    cancel() {
        this._router.navigate(['']);
    }
}
