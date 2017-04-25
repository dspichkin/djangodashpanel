import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {mainViewComponent} from "./main-view.component";

import { FormsModule } from '@angular/forms';

import { CpuComponent } from "../../components/charts/cpu/cpu.component";
import { MemoryComponent } from "../../components/charts/memory/memory.component";

import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
    	mainViewComponent,
    	CpuComponent,
        MemoryComponent
    ],
    imports: [
		BrowserModule,
		FormsModule,
		ChartsModule,
		NouisliderModule
    ],
})

export class MainViewModule {}