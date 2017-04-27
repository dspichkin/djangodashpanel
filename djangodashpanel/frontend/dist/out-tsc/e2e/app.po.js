"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var DashPage = (function () {
    function DashPage() {
    }
    DashPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    DashPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return DashPage;
}());
exports.DashPage = DashPage;
//# sourceMappingURL=app.po.js.map