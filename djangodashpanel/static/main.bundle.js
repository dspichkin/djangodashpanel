webpackJsonp([1,5],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.baseUrl = '/dash/api/';
AppSettings.perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
AppSettings.perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
AppSettings.perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
AppSettings.perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';
AppSettings.BootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
AppSettings.UsersUrl = AppSettings.baseUrl + 'perf/users/';
AppSettings.DashUrl = AppSettings.baseUrl + 'perf/dash/';
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });

//# sourceMappingURL=ng2-charts.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartsService = (function () {
    function ChartsService(http) {
        this.http = http;
    }
    ChartsService.prototype.getPerf = function (url, _params) {
        var data = _params || {};
        data.t = new Date().getTime();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ChartsService;
}());
ChartsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ChartsService);

var _a;
//# sourceMappingURL=charts.services.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 219;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(254);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(371),
        styles: [__webpack_require__(358)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_layouts_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_main_view_main_view_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_minor_view_minor_view_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_perf_view_perf_view_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_charts_services__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dashboard_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// App modules/components

// App views



// App services


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
            // Views
            __WEBPACK_IMPORTED_MODULE_9__views_main_view_main_view_module__["a" /* MainViewModule */],
            __WEBPACK_IMPORTED_MODULE_10__views_minor_view_minor_view_module__["a" /* MinorViewModule */],
            __WEBPACK_IMPORTED_MODULE_11__views_perf_view_perf_view_module__["a" /* PerfViewModule */],
            // Modules
            __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_charts_services__["a" /* ChartsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_dashboard_service__["a" /* DashboardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_layouts_basic_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });


//import {minorViewComponent} from "./views/minor-view/minor-view.component";
//import {loginComponent} from "./views/login/login.component";
//import {registerComponent} from "./views/register/register.component";
//import {blankComponent} from "./components/common/layouts/blank.component";

var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    //{path: '', redirectTo: '', pathMatch: 'full'},
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_common_layouts_basic_component__["a" /* basicComponent */],
        children: [
            { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__["a" /* mainViewComponent */] },
            { path: 'perf', component: __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__["a" /* perfViewComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dash' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_charts_services__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CpuComponent = (function () {
    function CpuComponent(chartService, chRef) {
        this.chartService = chartService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 5,
                            stepValue: 5,
                            max: 100,
                            callback: function (value, index, values) {
                                return value + "%";
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(10,159,177,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    CpuComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    CpuComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    CpuComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    CpuComponent.prototype.onChange = function ($event) {
        //console.log('this.dateRange', this.dateRange)
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    CpuComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return CpuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]) === "function" && _a || Object)
], CpuComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], CpuComponent.prototype, "slider", void 0);
CpuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cpu-chart',
        template: __webpack_require__(372),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], CpuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cpu.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_charts_services__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiskComponent = (function () {
    function DiskComponent(chartService, chRef) {
        this.chartService = chartService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 5,
                            stepValue: 5,
                            max: 100,
                            callback: function (value, index, values) {
                                return value + "%";
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(248,172,89,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    DiskComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    DiskComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DiskComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DiskComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    DiskComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return DiskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]) === "function" && _a || Object)
], DiskComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], DiskComponent.prototype, "slider", void 0);
DiskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disk-chart',
        template: __webpack_require__(373),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], DiskComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=disk.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_charts_services__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemoryComponent = (function () {
    function MemoryComponent(chartService) {
        this.chartService = chartService;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }, { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                var k = 1000, dm = 2;
                                var bytes = value;
                                if (value == 0) {
                                    return '0 Bytes';
                                }
                                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
                                var data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                                return data;
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(28,132,198,0.3)',
                borderColor: 'rgba(35,198,200,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(200,159,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(35,198,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    MemoryComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    MemoryComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    MemoryComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    MemoryComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    MemoryComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return MemoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]) === "function" && _a || Object)
], MemoryComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], MemoryComponent.prototype, "slider", void 0);
MemoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'memory-chart',
        template: __webpack_require__(374),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */]) === "function" && _c || Object])
], MemoryComponent);

var _a, _b, _c;
//# sourceMappingURL=memory.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_charts_services__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NetworkComponent = (function () {
    function NetworkComponent(chartService) {
        this.chartService = chartService;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                var k = 1000, dm = 2;
                                var bytes = value;
                                if (value == 0) {
                                    return '0 Bytes';
                                }
                                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
                                var data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                                return data;
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(28,132,198,0.3)',
                borderColor: 'rgba(35,198,200,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(200,159,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    NetworkComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    NetworkComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    NetworkComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    NetworkComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    NetworkComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.chartService.getPerf(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return NetworkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["b" /* BaseChartDirective */]) === "function" && _a || Object)
], NetworkComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], NetworkComponent.prototype, "slider", void 0);
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'network-chart',
        template: __webpack_require__(375),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_charts_services__["a" /* ChartsService */]) === "function" && _c || Object])
], NetworkComponent);

var _a, _b, _c;
//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__(376)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var blankComponent = (function () {
    function blankComponent() {
    }
    blankComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    blankComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    return blankComponent;
}());
blankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blank',
        template: __webpack_require__(378)
    })
], blankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */], __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__["a" /* TopnavbarModule */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__["a" /* FooterModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]]
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__(379),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_component__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopnavbarComponent = (function () {
    function TopnavbarComponent() {
        this.menuState = 'out';
    }
    TopnavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        // smoothlyMenu();
    };
    return TopnavbarComponent;
}());
TopnavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__(380),
    })
], TopnavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnavbar_component__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopnavbarModule = (function () {
    function TopnavbarModule() {
    }
    return TopnavbarModule;
}());
TopnavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
    })
], TopnavbarModule);

//# sourceMappingURL=topnavbar.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            if (changes.hasOwnProperty('labels')) {
                this.chart.data.labels = changes.labels.currentValue;
            }
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "datasets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "labels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseChartDirective.prototype, "chartType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BaseChartDirective.prototype, "legend", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BaseChartDirective.prototype, "chartClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], BaseChartDirective.prototype, "chartHover", void 0);
BaseChartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'canvas[baseChart]', exportAs: 'base-chart' }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], BaseChartDirective);

function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            BaseChartDirective
        ],
        exports: [
            BaseChartDirective
        ],
        imports: []
    })
], ChartsModule);

var _a, _b, _c;
//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_charts__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_view_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainViewModule = (function () {
    function MainViewModule() {
    }
    return MainViewModule;
}());
MainViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__main_view_component__["a" /* mainViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
        ],
    })
], MainViewModule);

//# sourceMappingURL=main-view.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minorViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var minorViewComponent = (function () {
    function minorViewComponent() {
    }
    return minorViewComponent;
}());
minorViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'minorView',
        template: __webpack_require__(382)
    })
], minorViewComponent);

//# sourceMappingURL=minor-view.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minor_view_component__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinorViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinorViewModule = (function () {
    function MinorViewModule() {
    }
    return MinorViewModule;
}());
MinorViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__minor_view_component__["a" /* minorViewComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
    })
], MinorViewModule);

//# sourceMappingURL=minor-view.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perf_view_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_charts_cpu_cpu_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_charts_memory_memory_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_charts_disk_disk_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_charts_network_network_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PerfViewModule = (function () {
    function PerfViewModule() {
    }
    return PerfViewModule;
}());
PerfViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__perf_view_component__["a" /* perfViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_charts_cpu_cpu_component__["a" /* CpuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_charts_memory_memory_component__["a" /* MemoryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_charts_disk_disk_component__["a" /* DiskComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_charts_network_network_component__["a" /* NetworkComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__["a" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__["NouisliderModule"]
        ],
    })
], PerfViewModule);

//# sourceMappingURL=perf-view.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 86,
	"./af.js": 86,
	"./ar": 93,
	"./ar-dz": 87,
	"./ar-dz.js": 87,
	"./ar-kw": 88,
	"./ar-kw.js": 88,
	"./ar-ly": 89,
	"./ar-ly.js": 89,
	"./ar-ma": 90,
	"./ar-ma.js": 90,
	"./ar-sa": 91,
	"./ar-sa.js": 91,
	"./ar-tn": 92,
	"./ar-tn.js": 92,
	"./ar.js": 93,
	"./az": 94,
	"./az.js": 94,
	"./be": 95,
	"./be.js": 95,
	"./bg": 96,
	"./bg.js": 96,
	"./bn": 97,
	"./bn.js": 97,
	"./bo": 98,
	"./bo.js": 98,
	"./br": 99,
	"./br.js": 99,
	"./bs": 100,
	"./bs.js": 100,
	"./ca": 101,
	"./ca.js": 101,
	"./cs": 102,
	"./cs.js": 102,
	"./cv": 103,
	"./cv.js": 103,
	"./cy": 104,
	"./cy.js": 104,
	"./da": 105,
	"./da.js": 105,
	"./de": 108,
	"./de-at": 106,
	"./de-at.js": 106,
	"./de-ch": 107,
	"./de-ch.js": 107,
	"./de.js": 108,
	"./dv": 109,
	"./dv.js": 109,
	"./el": 110,
	"./el.js": 110,
	"./en-au": 111,
	"./en-au.js": 111,
	"./en-ca": 112,
	"./en-ca.js": 112,
	"./en-gb": 113,
	"./en-gb.js": 113,
	"./en-ie": 114,
	"./en-ie.js": 114,
	"./en-nz": 115,
	"./en-nz.js": 115,
	"./eo": 116,
	"./eo.js": 116,
	"./es": 118,
	"./es-do": 117,
	"./es-do.js": 117,
	"./es.js": 118,
	"./et": 119,
	"./et.js": 119,
	"./eu": 120,
	"./eu.js": 120,
	"./fa": 121,
	"./fa.js": 121,
	"./fi": 122,
	"./fi.js": 122,
	"./fo": 123,
	"./fo.js": 123,
	"./fr": 126,
	"./fr-ca": 124,
	"./fr-ca.js": 124,
	"./fr-ch": 125,
	"./fr-ch.js": 125,
	"./fr.js": 126,
	"./fy": 127,
	"./fy.js": 127,
	"./gd": 128,
	"./gd.js": 128,
	"./gl": 129,
	"./gl.js": 129,
	"./gom-latn": 130,
	"./gom-latn.js": 130,
	"./he": 131,
	"./he.js": 131,
	"./hi": 132,
	"./hi.js": 132,
	"./hr": 133,
	"./hr.js": 133,
	"./hu": 134,
	"./hu.js": 134,
	"./hy-am": 135,
	"./hy-am.js": 135,
	"./id": 136,
	"./id.js": 136,
	"./is": 137,
	"./is.js": 137,
	"./it": 138,
	"./it.js": 138,
	"./ja": 139,
	"./ja.js": 139,
	"./jv": 140,
	"./jv.js": 140,
	"./ka": 141,
	"./ka.js": 141,
	"./kk": 142,
	"./kk.js": 142,
	"./km": 143,
	"./km.js": 143,
	"./kn": 144,
	"./kn.js": 144,
	"./ko": 145,
	"./ko.js": 145,
	"./ky": 146,
	"./ky.js": 146,
	"./lb": 147,
	"./lb.js": 147,
	"./lo": 148,
	"./lo.js": 148,
	"./lt": 149,
	"./lt.js": 149,
	"./lv": 150,
	"./lv.js": 150,
	"./me": 151,
	"./me.js": 151,
	"./mi": 152,
	"./mi.js": 152,
	"./mk": 153,
	"./mk.js": 153,
	"./ml": 154,
	"./ml.js": 154,
	"./mr": 155,
	"./mr.js": 155,
	"./ms": 157,
	"./ms-my": 156,
	"./ms-my.js": 156,
	"./ms.js": 157,
	"./my": 158,
	"./my.js": 158,
	"./nb": 159,
	"./nb.js": 159,
	"./ne": 160,
	"./ne.js": 160,
	"./nl": 162,
	"./nl-be": 161,
	"./nl-be.js": 161,
	"./nl.js": 162,
	"./nn": 163,
	"./nn.js": 163,
	"./pa-in": 164,
	"./pa-in.js": 164,
	"./pl": 165,
	"./pl.js": 165,
	"./pt": 167,
	"./pt-br": 166,
	"./pt-br.js": 166,
	"./pt.js": 167,
	"./ro": 168,
	"./ro.js": 168,
	"./ru": 169,
	"./ru.js": 169,
	"./sd": 170,
	"./sd.js": 170,
	"./se": 171,
	"./se.js": 171,
	"./si": 172,
	"./si.js": 172,
	"./sk": 173,
	"./sk.js": 173,
	"./sl": 174,
	"./sl.js": 174,
	"./sq": 175,
	"./sq.js": 175,
	"./sr": 177,
	"./sr-cyrl": 176,
	"./sr-cyrl.js": 176,
	"./sr.js": 177,
	"./ss": 178,
	"./ss.js": 178,
	"./sv": 179,
	"./sv.js": 179,
	"./sw": 180,
	"./sw.js": 180,
	"./ta": 181,
	"./ta.js": 181,
	"./te": 182,
	"./te.js": 182,
	"./tet": 183,
	"./tet.js": 183,
	"./th": 184,
	"./th.js": 184,
	"./tl-ph": 185,
	"./tl-ph.js": 185,
	"./tlh": 186,
	"./tlh.js": 186,
	"./tr": 187,
	"./tr.js": 187,
	"./tzl": 188,
	"./tzl.js": 188,
	"./tzm": 190,
	"./tzm-latn": 189,
	"./tzm-latn.js": 189,
	"./tzm.js": 190,
	"./uk": 191,
	"./uk.js": 191,
	"./ur": 192,
	"./ur.js": 192,
	"./uz": 194,
	"./uz-latn": 193,
	"./uz-latn.js": 193,
	"./uz.js": 194,
	"./vi": 195,
	"./vi.js": 195,
	"./x-pseudo": 196,
	"./x-pseudo.js": 196,
	"./yo": 197,
	"./yo.js": 197,
	"./zh-cn": 198,
	"./zh-cn.js": 198,
	"./zh-hk": 199,
	"./zh-hk.js": 199,
	"./zh-tw": 200,
	"./zh-tw.js": 200
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 363;


/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        Version: <strong>0.0.1</strong>\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2017\n    </div>\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        <span class=\"block m-t-xs\"> <strong class=\"font-bold\">Example user</strong> </span>\n                        <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span>\n                    </a>\n                    <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n                <div class=\"logo-element\">\n                    IN+\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('dash')}\">\n                <a [routerLink]=\"['/']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('perf')}\">\n                <a [routerLink]=\"['/perf']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Perfomance</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['/minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Security</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('minorView')}\">\n                <a [routerLink]=\"['/minorView']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Database</span> </a>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"#\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"text-muted font-thin pull-right\" style=\"font-size: 12px;margin: 10px;\">\n        Running time: {{ boottime || 0 }}\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <div class=\"wrapper-md\">\n                <small>Last {{ avarage.hours || 0}} hours</small>\n                <div class=\"row row-sm\">\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_cpu > 60 && avarage.avarage_cpu < 90,\n                            'bg-danger': avarage.avarage_cpu >= 90\n                        }\" style=\"height: 90px;\" >\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_cpu || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage cpu used</span><br>\n\n                            <div class=\"top text-info text-right w-full\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_memory > 60 && avarage.avarage_memory < 90,\n                            'bg-danger': avarage.avarage_memory >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_memory || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage memory used</span><br>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_disk > 60 && avarage.avarage_disk < 90,\n                            'bg-danger': avarage.avarage_disk >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_disk || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage disk space used</span>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"panel panel-default\" style=\"padding-top: 20px;\">\n                <div class=\"text-center wrapper m-b-sm\">              \n                    <h4>Current users</h4>\n                    <ul class=\"list-group\" stlye=\"text-align: left;\">\n                        <li class=\"list-group-item\" style=\"text-align: left;\" *ngFor=\"let user of users; let i = index;\">\n                            <p style=\"margin:0;font-size: 8px;text-align: right;\">{{getDateFromTimestap(user[3])}}</p>\n                            <div>\n                                <span class=\"label bg-primary\">{{i}}</span>\n                                <span>{{user[0]}} / {{user[1]}}</span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\" style=\"margin-bottom: 20px;\">\n                <h1>\n                    Perfomance charts\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n\n            <div class=\"col-md-6\">\n                <cpu-chart></cpu-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <memory-chart></memory-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <disk-chart></disk-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <network-chart></network-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicComponent = (function () {
    function basicComponent() {
    }
    return basicComponent;
}());
basicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic',
        template: __webpack_require__(377)
    })
], basicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getData = function (url, _params) {
        var data = _params || {};
        data.t = new Date().getTime();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DashboardService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var mainViewComponent = (function () {
    function mainViewComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.loading = false;
        this.error_message = "";
        this.boottime = "";
        this.avarage = {};
    }
    mainViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getBootTime(function () {
            self.getCurrentUsers(function () {
                self.getAvarageValues();
            });
        });
    };
    mainViewComponent.prototype.getBootTime = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].BootTimeUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.boottime = data.boottime;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getCurrentUsers = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].UsersUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.users = data.users;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('YYYY-DD-MM HH:mm');
    };
    mainViewComponent.prototype.getAvarageValues = function () {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].DashUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.avarage = data;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return mainViewComponent;
}());
mainViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mianView',
        template: __webpack_require__(381)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], mainViewComponent);

var _a;
//# sourceMappingURL=main-view.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perfViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var perfViewComponent = (function () {
    function perfViewComponent() {
    }
    return perfViewComponent;
}());
perfViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'perfView',
        template: __webpack_require__(383)
    })
], perfViewComponent);

//# sourceMappingURL=perf-view.component.js.map

/***/ })

},[427]);
//# sourceMappingURL=main.bundle.js.map