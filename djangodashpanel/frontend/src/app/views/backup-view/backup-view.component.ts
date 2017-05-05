import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AppSettings } from '../../app.settings';
import { DataService } from '../../services/data.service';

declare var moment: any;

@Component({
    selector: 'backupView',
    templateUrl: 'backup-view.template.html'
})
export class backupViewComponent implements OnInit{ 

	loading: boolean = false;
	error_message: string = "";
    backupMakeUrl: string;
    backupMakeMediaUrl: string;
    backupGetMediaUrl: string;
    backups_daily:any = [];
    backups_weekly:any = [];
    backups_monthly:any = [];
    backups_enable:boolean = true;
    last_run_backup: null;
    result_last_run_backup: "";
    backups_media: any = [];

    mediadirs = [];
    model = {
        inputedDir: "",
        backuptime: ""
    }
    backuptime_is_dirty = false;
    backuptime_loaded;

	constructor (private dataService: DataService, private router: Router) {
    }

    ngOnInit() { 
    	let self = this;
        self.backupMakeUrl = AppSettings.backupMakeUrl;
        self.backupMakeMediaUrl = AppSettings.backupMakeMediaUrl;
        self.backupGetMediaUrl = AppSettings.backupGetMediaUrl;
        self.getBackups();
    }

    getBackups() {
        let self = this;
        self.loading = true;
        self.dataService.getData(AppSettings.backupsUrl, {})
        .subscribe(
            function(data) {
                self.loading = false;
                self.backups_daily = data.backups.daily;
                self.backups_weekly = data.backups.weekly;
                self.backups_monthly = data.backups.monthly;
                self.backups_enable = data.enable;
                self.last_run_backup = data.last_run_backup;
                self.mediadirs = data.media_directories;
                self.result_last_run_backup = data.result;
                self.model.backuptime = data.run_time;
                self.backuptime_loaded = data.run_time;
                self.backups_media = data.backups_media;

                if (!self.model.backuptime) {
                    self.model.backuptime = moment().toDate();
                    self.backuptime_is_dirty = true;
                }
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    getDateFromTimestap(value) {
        return moment(value, 'X').format('YYYY-MM-DD HH:mm')
    }
      
    backupSwitch() {
        let self = this;
        self.loading = true;
        self.dataService.postData(AppSettings.backupsEnableUrl, {})
        .subscribe(
            function(data) {
                self.loading = false;
                self.backups_enable = data.enable;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    addDirectory() {
        let self = this;

        self.mediadirs.push({
            path: this.model.inputedDir,
            checked: false
        });
        
        self.loading = true;
        self.dataService.postData(AppSettings.backupsPathDirUrl, {
            dirs:  self.mediadirs
        })
        .subscribe(
            function(data) {
                self.loading = false;
                self.model.inputedDir = "";
                self.mediadirs = data.media_directories;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );

    }

    deletePath(index) {
        let self = this;
        self.mediadirs.splice(index, 1);
        self.loading = true;
        self.dataService.postData(AppSettings.backupsPathDirUrl, {
            dirs:  self.mediadirs
        })
        .subscribe(
            function(data) {
                self.loading = false;
                self.mediadirs = data.media_directories;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    changedTime() {
        if (this.backuptime_loaded && 
                moment(this.backuptime_loaded).format('X') == moment(this.model.backuptime).format('X')) {
            this.backuptime_is_dirty = false;
        } else {
            this.backuptime_is_dirty = true;
        }
        
    }

    saveBackTime() {
        let self = this;
        self.loading = true;
        self.dataService.postData(AppSettings.backupsSetTimeUrl, {
            time: moment(self.model.backuptime).format('X')
        })
        .subscribe(
            function(data) {
                self.loading = false;
                self.backuptime_is_dirty = false;
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }
   

    public refresh() {
        this.getBackups();
    }

    public getFileUrl(filename) {
        return AppSettings.backupGetMediaUrl + filename;
    }
}