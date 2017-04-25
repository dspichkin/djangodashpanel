import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {mainViewComponent} from "./main-view.component";

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
    	mainViewComponent,
    ],
    imports: [
		BrowserModule,
		FormsModule,
    ],
})

export class MainViewModule {}