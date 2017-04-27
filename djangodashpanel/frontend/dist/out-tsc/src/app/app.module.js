"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_nouislider_1 = require("ng2-nouislider");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
// App modules/components
var layouts_module_1 = require("./components/common/layouts/layouts.module");
// App views
var main_view_module_1 = require("./views/main-view/main-view.module");
var minor_view_module_1 = require("./views/minor-view/minor-view.module");
var perf_view_module_1 = require("./views/perf-view/perf-view.module");
var processes_view_module_1 = require("./views/processes-view/processes-view.module");
var sec_correct_login_module_1 = require("./views/sec-view/sec-correct-login.module");
var sec_incorrect_login_module_1 = require("./views/sec-view/sec-incorrect-login.module");
// App services
var charts_services_1 = require("./services/charts.services");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_nouislider_1.NouisliderModule,
            // Views
            main_view_module_1.MainViewModule,
            minor_view_module_1.MinorViewModule,
            perf_view_module_1.PerfViewModule,
            processes_view_module_1.ProcessesViewModule,
            sec_correct_login_module_1.SecCorrectLoginViewModule,
            sec_incorrect_login_module_1.SecIncorrectLoginViewModule,
            // Modules
            layouts_module_1.LayoutsModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
        ],
        providers: [
            charts_services_1.ChartsService,
            data_service_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map