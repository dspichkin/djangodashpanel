import { Routes} from "@angular/router";
import { mainViewComponent} from "./views/main-view/main-view.component";
import { perfViewComponent} from "./views/perf-view/perf-view.component";
import { processesViewComponent } from "./views/processes-view/processes-view.component";
import {basicComponent} from "./components/common/layouts/basic.component";


export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  //{path: '', redirectTo: '', pathMatch: 'full'},
  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'dash', component: mainViewComponent},
      {path: 'perf', component: perfViewComponent},
      {path: 'processes', component: processesViewComponent},
    ]
  },
  


  // Handle all other routes
  {path: '**', redirectTo: 'dash' }


];
