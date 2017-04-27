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
var network_component_1 = require("./network.component");
var NetworkModule = (function () {
    function NetworkModule() {
    }
    return NetworkModule;
}());
NetworkModule = __decorate([
    core_1.NgModule({
        declarations: [
            network_component_1.NetworkComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
        ],
        exports: [],
    })
], NetworkModule);
exports.NetworkModule = NetworkModule;
//# sourceMappingURL=network.module.js.map