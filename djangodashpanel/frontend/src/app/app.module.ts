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
import { ProcessesViewModule  } from "./views/processes-view/processes-view.module";
import { SecCorrectLoginViewModule } from "./views/sec-view/sec-correct-login-view.module";
import { SecIncorrectLoginViewModule } from "./views/sec-view/sec-incorrect-login-view.module";

// App services
import { ChartsService } from "./services/charts.services";
import { DataService } from './services/data.service';

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
    ProcessesViewModule,
    SecCorrectLoginViewModule,
    SecIncorrectLoginViewModule,
    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ChartsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
