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
var sec_correct_login_component_1 = require("./sec-correct-login.component");
var ng2_charts_1 = require("../../libs/ng2-charts/ng2-charts");
var ng2_nouislider_1 = require("ng2-nouislider");
var SecCorrectLoginViewModule = (function () {
    function SecCorrectLoginViewModule() {
    }
    return SecCorrectLoginViewModule;
}());
SecCorrectLoginViewModule = __decorate([
    core_1.NgModule({
        declarations: [
            sec_correct_login_component_1.secCorrectLoginViewComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_charts_1.ChartsModule,
            ng2_nouislider_1.NouisliderModule
        ],
    })
], SecCorrectLoginViewModule);
exports.SecCorrectLoginViewModule = SecCorrectLoginViewModule;
//# sourceMappingURL=sec-correct-login.module.js.map