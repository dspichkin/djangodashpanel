import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


import { CpuModule } from "./cpu/cpu.module";
import { MemoryModule } from "./memory/memory.module";

@NgModule({
    declarations: [],
    imports     : [
    	CpuModule,
    	MemoryModule
    ],
    exports     : []
})

export class MyChartsModule {}
