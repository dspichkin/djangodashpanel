"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ChartsService = (function () {
    function ChartsService(http) {
        this.http = http;
    }
    ChartsService.prototype.getPerf = function (url, _params) {
        var data = _params || {};
        data.t = new Date().getTime();
        var params = new http_1.URLSearchParams();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ChartsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ChartsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ChartsService;
}());
ChartsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChartsService);
exports.ChartsService = ChartsService;
//# sourceMappingURL=charts.services.js.map