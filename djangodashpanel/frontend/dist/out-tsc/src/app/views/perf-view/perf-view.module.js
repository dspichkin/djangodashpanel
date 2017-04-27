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
var perf_view_component_1 = require("./perf-view.component");
var cpu_component_1 = require("../../components/charts/cpu/cpu.component");
var memory_component_1 = require("../../components/charts/memory/memory.component");
var disk_component_1 = require("../../components/charts/disk/disk.component");
var network_component_1 = require("../../components/charts/network/network.component");
var ng2_charts_1 = require("../../libs/ng2-charts/ng2-charts");
var ng2_nouislider_1 = require("ng2-nouislider");
var PerfViewModule = (function () {
    function PerfViewModule() {
    }
    return PerfViewModule;
}());
PerfViewModule = __decorate([
    core_1.NgModule({
        declarations: [
            perf_view_component_1.perfViewComponent,
            cpu_component_1.CpuComponent,
            memory_component_1.MemoryComponent,
            disk_component_1.DiskComponent,
            network_component_1.NetworkComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_charts_1.ChartsModule,
            ng2_nouislider_1.NouisliderModule
        ],
    })
], PerfViewModule);
exports.PerfViewModule = PerfViewModule;
//# sourceMappingURL=perf-view.module.js.map