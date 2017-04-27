import { Routes} from "@angular/router";
import { mainViewComponent} from "./views/main-view/main-view.component";
import { perfViewComponent} from "./views/perf-view/perf-view.component";
import { processesViewComponent } from "./views/processes-view/processes-view.component";
import { basicComponent } from "./components/common/layouts/basic.component";
import { secCorrectLoginViewComponent } from "./views/sec-view/sec-correct-login-view.component";
import { secIncorrectLoginViewComponent } from "./views/sec-view/sec-incorrect-login-view.component";


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
      {path: 'correctlogin', component: secCorrectLoginViewComponent},
      {path: 'incorrectlogin', component: secIncorrectLoginViewComponent},
    ]
  },
  


  // Handle all other routes
  {path: '**', redirectTo: 'dash' }


];
