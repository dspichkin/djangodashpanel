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
var processesViewComponent = (function () {
    function processesViewComponent(dataService) {
        this.dataService = dataService;
        this.loading = false;
        this.last_processes = [];
    }
    processesViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getAvarageNumber(function () {
            self.getProcesses();
        });
    };
    processesViewComponent.prototype.getProcesses = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(app_settings_1.AppSettings.ProcessesLastUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            console.log('data', data);
            self.last_time = data.time;
            self.last_processes = data.processes;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    processesViewComponent.prototype.getAvarageNumber = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(app_settings_1.AppSettings.ProcessesAvarageNumberUrl, {})
            .subscribe(function (data) {
            console.log('data', data);
            self.loading = false;
            self.hours = data.hours;
            self.avarage_number = data.avarage_number;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return processesViewComponent;
}());
processesViewComponent = __decorate([
    core_1.Component({
        selector: 'processesView',
        templateUrl: 'processes-view.template.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], processesViewComponent);
exports.processesViewComponent = processesViewComponent;
//# sourceMappingURL=processes-view.component.js.map