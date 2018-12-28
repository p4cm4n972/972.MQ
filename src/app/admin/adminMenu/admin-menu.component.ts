import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.scss']
})

export class AdminMenuComponent implements OnInit {
    theUser: string;

    constructor( private _userSVC: UserService, private _router: Router) {}

    ngOnInit() {
        this.theUser = this._userSVC.loggedInUser;
    }

    logout() {
        this._userSVC.logout();
        this._router.navigate(['']);
    }
}
