import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { backupViewComponent } from "./backup-view.component";

import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
    declarations: [
    	backupViewComponent,
    ],
    imports: [
		BrowserModule,
		FormsModule,
		RouterModule,

		TimepickerModule.forRoot()
    ],
})

export class BackupViewModule {}