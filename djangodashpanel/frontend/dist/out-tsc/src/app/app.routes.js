"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_component_1 = require("./views/main-view/main-view.component");
var perf_view_component_1 = require("./views/perf-view/perf-view.component");
var processes_view_component_1 = require("./views/processes-view/processes-view.component");
var basic_component_1 = require("./components/common/layouts/basic.component");
var sec_correct_login_component_1 = require("./views/sec-view/sec-correct-login.component");
var sec_incorrect_login_component_1 = require("./views/sec-view/sec-incorrect-login.component");
exports.ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    //{path: '', redirectTo: '', pathMatch: 'full'},
    // App views
    {
        path: '', component: basic_component_1.basicComponent,
        children: [
            { path: 'dash', component: main_view_component_1.mainViewComponent },
            { path: 'perf', component: perf_view_component_1.perfViewComponent },
            { path: 'processes', component: processes_view_component_1.processesViewComponent },
            { path: 'correctlogin', component: sec_correct_login_component_1.secCorrectLoginViewComponent },
            { path: 'incorrectlogin', component: sec_incorrect_login_component_1.secIncorrectLoginViewComponent },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dash' }
];
//# sourceMappingURL=app.routes.js.map