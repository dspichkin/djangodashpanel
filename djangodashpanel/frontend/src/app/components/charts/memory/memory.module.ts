import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MemoryComponent } from "./memory.component";

@NgModule({
    declarations: [
    	MemoryComponent
    ],
    imports: [
    	BrowserModule,
    ],
    exports     : [],
})

export class MemoryModule {}