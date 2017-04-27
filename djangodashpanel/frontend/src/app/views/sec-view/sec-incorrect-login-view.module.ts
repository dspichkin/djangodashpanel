import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { FormsModule } from '@angular/forms';

import { secIncorrectLoginViewComponent } from "./sec-incorrect-login-view.component";

import { ChartIncorrectLoginComponent } from "../../components/charts/sec/incorrect-login/incorrect-login.component";
import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
        secIncorrectLoginViewComponent,
        ChartIncorrectLoginComponent,
    ],
    imports: [
		BrowserModule,
		FormsModule,
		ChartsModule,
		NouisliderModule
    ],
})

export class SecIncorrectLoginViewModule {}