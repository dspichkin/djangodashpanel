import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CpuComponent } from "./cpu.component";

@NgModule({
    declarations: [
    	CpuComponent
    ],
    imports: [
    	BrowserModule,
    ],
    exports     : [],
})

export class CpuModule {}