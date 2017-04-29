import { Component, OnInit } from '@angular/core';

import { AppSettings } from '../../app.settings';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'processesView',
    templateUrl: 'processes-view.template.html'
})
export class processesViewComponent implements OnInit { 

	loading: boolean = false;
	error_message;
	hours;
    avarage_number;
    last_time;
    last_processes = [];


	constructor (private dataService: DataService) {
    }

	ngOnInit() { 
    	let self = this;
    	self.getAvarageNumber(function() {
    		self.getProcesses();
    	});
    }

    private getProcesses(callback?) {
    	let self = this;
    	self.loading = true;
    	self.dataService.getData(AppSettings.processesLastUrl, {})
    	.subscribe(
            function(data) {
                self.loading = false;
                self.last_time = data.time;
                self.last_processes = data.processes;
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

    private getAvarageNumber(callback) {

        let self = this;
       
        self.loading = true;
        self.dataService.getData(AppSettings.processesAvarageNumberUrl, {})
        .subscribe(
            function(data) {
                self.loading = false;
                self.hours = data.hours;
                self.avarage_number = data.avarage_number;
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

    public refresh() {
        this.getProcesses();
    }
}