import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../app.settings';
import { DashboardService } from '../../services/dashboard.service';

declare var moment: any;

@Component({
    selector: 'mianView',
    templateUrl: 'main-view.template.html'
})
export class mainViewComponent implements OnInit{ 

	loading: boolean = false;
	error_message: string = "";
	boottime:string = "";
	users;

	constructor (private dashboardService: DashboardService) {
    }

    ngOnInit() { 
    	let self = this;
    	self.getBootTime(function() {
    		self.getCurrentUsers();
    	})

    }

    getBootTime(callback?) {
    	let self = this;
    	self.loading = true;
    	self.dashboardService.getData(AppSettings.BootTimeUrl, {})
    	.subscribe(
            function(data) {
                self.loading = false;
                self.boottime = data.boottime;
                if (callback) {
                	callback();
                }
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    getCurrentUsers() {
    	let self = this;
    	self.loading = true;
    	self.dashboardService.getData(AppSettings.UsersUrl, {})
    	.subscribe(
            function(data) {
                self.loading = false;
                self.users = data.users;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    getDateFromTimestap(value) {
    	return moment(value, 'X').format('YYYY-DD-MM HH:mm')
    }
}