"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var processes_view_component_1 = require("./processes-view.component");
var processes_component_1 = require("../../components/charts/processes/processes.component");
var ng2_charts_1 = require("../../libs/ng2-charts/ng2-charts");
var ng2_nouislider_1 = require("ng2-nouislider");
var ProcessesViewModule = (function () {
    function ProcessesViewModule() {
    }
    return ProcessesViewModule;
}());
ProcessesViewModule = __decorate([
    core_1.NgModule({
        declarations: [
            processes_view_component_1.processesViewComponent,
            processes_component_1.ProcessesComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_charts_1.ChartsModule,
            ng2_nouislider_1.NouisliderModule
        ],
    })
], ProcessesViewModule);
exports.ProcessesViewModule = ProcessesViewModule;
//# sourceMappingURL=processes-view.module.js.map