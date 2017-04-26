import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { FormsModule } from '@angular/forms';

import { processesViewComponent } from "./processes-view.component";

import { ProcessesComponent } from "../../components/charts/processes/processes.component";
import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
        processesViewComponent,
        ProcessesComponent,
    ],
    imports: [
		BrowserModule,
		FormsModule,
		ChartsModule,
		NouisliderModule
    ],
})

export class ProcessesViewModule {}