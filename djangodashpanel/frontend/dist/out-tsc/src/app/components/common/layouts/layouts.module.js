"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var blank_component_1 = require("./blank.component");
var basic_component_1 = require("./basic.component");
var navigation_module_1 = require("../navigation/navigation.module");
var topnavbar_module_1 = require("../topnavbar/topnavbar.module");
var footer_module_1 = require("../footer/footer.module");
var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    core_1.NgModule({
        declarations: [blank_component_1.blankComponent, basic_component_1.basicComponent],
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, navigation_module_1.NavigationModule, topnavbar_module_1.TopnavbarModule, footer_module_1.FooterModule],
        exports: [blank_component_1.blankComponent, basic_component_1.basicComponent]
    })
], LayoutsModule);
exports.LayoutsModule = LayoutsModule;
//# sourceMappingURL=layouts.module.js.map