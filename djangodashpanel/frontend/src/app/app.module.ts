import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";

import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { ROUTES } from "./app.routes";

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";

// App views
import { MainViewModule } from "./views/main-view/main-view.module";
import { MinorViewModule } from "./views/minor-view/minor-view.module";
import { PerfViewModule } from "./views/perf-view/perf-view.module";

// App services
import { ChartsService } from "./services/charts.services";
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    NouisliderModule,

    // Views
    MainViewModule,
    MinorViewModule,
    PerfViewModule,

    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ChartsService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
