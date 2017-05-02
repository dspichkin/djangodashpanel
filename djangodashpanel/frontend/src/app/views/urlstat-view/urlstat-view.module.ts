import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { FormsModule } from '@angular/forms';

import { urlstatViewComponent } from "./urlstat-view.component";

import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
        urlstatViewComponent
    ],
    imports: [
		BrowserModule,
		FormsModule,
		NouisliderModule,
        ChartsModule
    ],
})

export class UrlStatViewModule {}