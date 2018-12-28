import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../adminShared/must-match.validator';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

    validatingRegister: FormGroup;
    pseudo: string;
    email: string;
    password1: string;
    password2: string;
    passwordFail: boolean = false;

    constructor(private _userSVC: UserService, private _router: Router, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.validatingRegister = this._formBuilder.group({
            pseudo: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password1: [null, Validators.required],
            password2: [null, Validators.required]
        }, {
                validator: MustMatch('password1', 'password2')
            });
    }



    signUp(validatingRegister) {
        console.log(validatingRegister.password1)
        if (validatingRegister.password1 !== validatingRegister.password2) {
            this.passwordFail = true;
        } else {
            this.passwordFail = false;
            this._userSVC.register(validatingRegister.email, validatingRegister.password1);
            this._userSVC.verifyUser();
        }
    }
    cancel() {
        this._router.navigate(['/']);
    }

}
