import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { FormsModule } from '@angular/forms';

import { secCorrectLoginViewComponent } from "./sec-correct-login-view.component";

import { ChartCorrectLoginComponent } from "../../components/charts/sec/correct-login/correct-login.component";
import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
        secCorrectLoginViewComponent,
        ChartCorrectLoginComponent
    ],
    imports: [
		BrowserModule,
		FormsModule,
		ChartsModule,
		NouisliderModule,

        
    ],
})

export class SecCorrectLoginViewModule {}