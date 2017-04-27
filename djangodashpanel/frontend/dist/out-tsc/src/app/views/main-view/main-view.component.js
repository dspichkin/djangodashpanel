"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("../../app.settings");
var data_service_1 = require("../../services/data.service");
var mainViewComponent = (function () {
    function mainViewComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.loading = false;
        this.error_message = "";
        this.boottime = "";
        this.avarage = {};
    }
    mainViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getBootTime(function () {
            self.getCurrentUsers(function () {
                self.getAvarageValues();
            });
        });
    };
    mainViewComponent.prototype.getBootTime = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(app_settings_1.AppSettings.BootTimeUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.boottime = data.boottime;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getCurrentUsers = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(app_settings_1.AppSettings.UsersUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.users = data.users;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('YYYY-DD-MM HH:mm');
    };
    mainViewComponent.prototype.getAvarageValues = function () {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(app_settings_1.AppSettings.DashUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.avarage = data;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return mainViewComponent;
}());
mainViewComponent = __decorate([
    core_1.Component({
        selector: 'mianView',
        templateUrl: 'main-view.template.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], mainViewComponent);
exports.mainViewComponent = mainViewComponent;
//# sourceMappingURL=main-view.component.js.map