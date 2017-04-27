import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../app.settings';
import { DataService } from '../../services/data.service';

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
    avarage = {
    };

	constructor (private dashboardService: DataService) {
    }

    ngOnInit() { 
    	let self = this;
    	self.getBootTime(function() {
    		self.getCurrentUsers(function() {
                self.getAvarageValues();
            });
    	})

    }

    getBootTime(callback?) {
    	let self = this;
    	self.loading = true;
    	self.dashboardService.getData(AppSettings.bootTimeUrl, {})
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

    getCurrentUsers(callback) {
    	let self = this;
    	self.loading = true;
    	self.dashboardService.getData(AppSettings.usersUrl, {})
    	.subscribe(
            function(data) {
                self.loading = false;
                self.users = data.users;
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

    getDateFromTimestap(value) {
    	return moment(value, 'X').format('YYYY-DD-MM HH:mm')
    }

    getAvarageValues() {
        let self = this;
        self.loading = true;
        self.dashboardService.getData(AppSettings.dashUrl, {})
        .subscribe(
            function(data) {
                self.loading = false;
                self.avarage = data;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }
}