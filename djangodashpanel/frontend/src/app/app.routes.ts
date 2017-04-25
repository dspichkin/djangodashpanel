import {Routes} from "@angular/router";
import {mainViewComponent} from "./views/main-view/main-view.component";
import {perfViewComponent} from "./views/perf-view/perf-view.component";
//import {minorViewComponent} from "./views/minor-view/minor-view.component";
//import {loginComponent} from "./views/login/login.component";
//import {registerComponent} from "./views/register/register.component";
//import {blankComponent} from "./components/common/layouts/blank.component";
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
    ]
  },
  


  // Handle all other routes
  {path: '**', redirectTo: 'dash' }


];
