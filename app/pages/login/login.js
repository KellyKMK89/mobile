var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var common_1 = require('angular2/common');
var ionic_angular_2 = require('ionic-angular');
var auth_1 = require('../../services/auth/auth');
require('rxjs/add/operator/map');
var TestLoginPage = (function () {
    function TestLoginPage() {
        this.lock = new Auth0Lock('HwGp6YQdDAcX0BZ4vV4XN8XRCqGd0FP4', 'hospo360.auth0.com');
        this.local = new ionic_angular_2.Storage(ionic_angular_2.LocalStorage);
        this.auth = auth_1.AuthService;
        var profile = this.local.get('login')._result;
        if (profile) {
            this.user = JSON.parse(profile);
        }
    }
    TestLoginPage.prototype.login = function () {
        var _this = this;
        this.lock.show(function (err, profile, token) {
            if (err) {
                alert(err);
                return;
            }
            _this.local.set('profile', JSON.stringify(profile));
            _this.local.set('id_token', token);
            _this.user = profile;
        });
    };
    TestLoginPage.prototype.logout = function () {
        this.local.remove('profile');
        this.local.remove('id_token');
        this.user = null;
    };
    TestLoginPage = __decorate([
        ionic_angular_1.Page({
            template: "\n    <h1>Welcome to Angular2 with Auth0</h1>\n    <button (click)=\"login()\">Login</button>\n    <button (click)=\"logout()\">Logout</button>\n  ",
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TestLoginPage);
    return TestLoginPage;
})();
exports.TestLoginPage = TestLoginPage;
