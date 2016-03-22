import {Page, NavController, NavParams} from 'ionic-angular';
import {Component, View, provide} from 'angular2/core';
import {RouteConfig, Router, APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Storage, LocalStorage} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';
import 'rxjs/add/operator/map';

declare var Auth0Lock: any;

@Page({
    templateUrl: './build/pages/login/login.html',
    directives: [FORM_DIRECTIVES]
})

export class LoginPage {
    auth: AuthService;
    lock = new Auth0Lock('HwGp6YQdDAcX0BZ4vV4XN8XRCqGd0FP4', 'hospo360.auth0.com');

    local: Storage = new Storage(LocalStorage);
    user: Object;

    constructor(private nav: NavController, navParams: NavParams) {
        this.auth = AuthService;
        let profile = this.local.get('login')._result;
        if (profile) {
            this.user = JSON.parse(profile);
        }
    }

    login() {
        this.lock.show((err, profile, token) => {
            if (err) {
                alert(err);
                return;
            }

            this.local.set('profile', JSON.stringify(profile));
            this.local.set('id_token', token);
            this.user = profile;
        });
    }

    logout() {
        this.local.remove('profile');
        this.local.remove('id_token');
        this.user = null;
    }
}

