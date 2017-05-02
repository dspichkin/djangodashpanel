webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.baseUrl = '/dash/api/';
AppSettings.userUrl = AppSettings.baseUrl + 'user/';
AppSettings.perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
AppSettings.perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
AppSettings.perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
AppSettings.perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';
AppSettings.bootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
AppSettings.usersUrl = AppSettings.baseUrl + 'perf/users/';
AppSettings.dashUrl = AppSettings.baseUrl + 'perf/dash/';
AppSettings.processesUrl = AppSettings.baseUrl + 'processes/';
AppSettings.processesAvarageNumberUrl = AppSettings.baseUrl + 'processes/hours/';
AppSettings.processesLastUrl = AppSettings.baseUrl + 'processes/last/';
AppSettings.secCorrectLoginUrl = AppSettings.baseUrl + 'security/correctlogins/';
AppSettings.secIncorrectLoginUrl = AppSettings.baseUrl + 'security/incorrectlogins/';
AppSettings.backupMakeUrl = AppSettings.baseUrl + 'backups/make/';
AppSettings.backupMakeMediaUrl = AppSettings.baseUrl + 'backups/make/media/';
AppSettings.backupsUrl = AppSettings.baseUrl + 'backups/';
AppSettings.backupsEnableUrl = AppSettings.baseUrl + 'backups/stoprun/';
AppSettings.backupsSetTimeUrl = AppSettings.baseUrl + 'backups/time/';
AppSettings.backupsPathDirUrl = AppSettings.baseUrl + 'backups/dirs/';
AppSettings.backupGetMediaUrl = AppSettings.baseUrl + 'backups/file/';
AppSettings.urlStatUrl = AppSettings.baseUrl + 'urlstat/';
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(270);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.title = 'app works!';
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("AppComponent");
    };
    AppComponent.prototype.getUser = function () {
        var self = this;
        self.loading = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(388),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_timepicker__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_layouts_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_main_view_main_view_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_minor_view_minor_view_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_perf_view_perf_view_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_processes_view_processes_view_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_sec_view_sec_correct_login_view_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_sec_view_sec_incorrect_login_view_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_backup_view_backup_view_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_urlstat_view_urlstat_view_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_charts_services__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_window_service__ = __webpack_require__(260);
/* unused harmony export CookieXSRFStrategyFactory */
/* unused harmony export AppCSRF */
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




function CookieXSRFStrategyFactory() {
    return new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* CookieXSRFStrategy */]('csrftoken', 'X-CSRFToken');
}
var AppCSRF = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XSRFStrategy */],
    useFactory: CookieXSRFStrategyFactory,
};
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
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
            // Views
            __WEBPACK_IMPORTED_MODULE_10__views_main_view_main_view_module__["a" /* MainViewModule */],
            __WEBPACK_IMPORTED_MODULE_11__views_minor_view_minor_view_module__["a" /* MinorViewModule */],
            __WEBPACK_IMPORTED_MODULE_12__views_perf_view_perf_view_module__["a" /* PerfViewModule */],
            __WEBPACK_IMPORTED_MODULE_13__views_processes_view_processes_view_module__["a" /* ProcessesViewModule */],
            __WEBPACK_IMPORTED_MODULE_14__views_sec_view_sec_correct_login_view_module__["a" /* SecCorrectLoginViewModule */],
            __WEBPACK_IMPORTED_MODULE_15__views_sec_view_sec_incorrect_login_view_module__["a" /* SecIncorrectLoginViewModule */],
            __WEBPACK_IMPORTED_MODULE_16__views_backup_view_backup_view_module__["a" /* BackupViewModule */],
            __WEBPACK_IMPORTED_MODULE_17__views_urlstat_view_urlstat_view_module__["a" /* UrlStatViewModule */],
            // Modules
            __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot()
        ],
        providers: [
            AppCSRF,
            __WEBPACK_IMPORTED_MODULE_18__services_charts_services__["a" /* ChartsService */],
            __WEBPACK_IMPORTED_MODULE_19__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_21__services_window_service__["a" /* WindowRef */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_processes_view_processes_view_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basic_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_sec_view_sec_correct_login_view_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_sec_view_sec_incorrect_login_view_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_urlstat_view_urlstat_view_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_backup_view_backup_view_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });








var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    //{path: '', redirectTo: '', pathMatch: 'full'},
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basic_component__["a" /* basicComponent */],
        children: [
            { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__["a" /* mainViewComponent */] },
            { path: 'perf', component: __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__["a" /* perfViewComponent */] },
            { path: 'processes', component: __WEBPACK_IMPORTED_MODULE_2__views_processes_view_processes_view_component__["a" /* processesViewComponent */] },
            { path: 'correctlogin', component: __WEBPACK_IMPORTED_MODULE_4__views_sec_view_sec_correct_login_view_component__["a" /* secCorrectLoginViewComponent */] },
            { path: 'incorrectlogin', component: __WEBPACK_IMPORTED_MODULE_5__views_sec_view_sec_incorrect_login_view_component__["a" /* secIncorrectLoginViewComponent */] },
            { path: 'urlstat', component: __WEBPACK_IMPORTED_MODULE_6__views_urlstat_view_urlstat_view_component__["a" /* urlstatViewComponent */] },
            { path: 'backups', component: __WEBPACK_IMPORTED_MODULE_7__views_backup_view_backup_view_component__["a" /* backupViewComponent */] },
            { path: 'backups/result', component: __WEBPACK_IMPORTED_MODULE_7__views_backup_view_backup_view_component__["a" /* backupViewComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dash' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
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
    function CpuComponent(dataService, chRef) {
        this.dataService = dataService;
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, {})
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, params)
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
    CpuComponent.prototype.refresh = function () {
        this.getData();
    };
    return CpuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], CpuComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], CpuComponent.prototype, "slider", void 0);
CpuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cpu-chart',
        template: __webpack_require__(389),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], CpuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cpu.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
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
    function DiskComponent(dataService, chRef) {
        this.dataService = dataService;
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, {})
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, params)
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
    DiskComponent.prototype.refresh = function () {
        this.getData();
    };
    return DiskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], DiskComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], DiskComponent.prototype, "slider", void 0);
DiskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disk-chart',
        template: __webpack_require__(390),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], DiskComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=disk.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
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
    function MemoryComponent(dataService) {
        this.dataService = dataService;
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, {})
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, params)
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
    MemoryComponent.prototype.refresh = function () {
        this.getData();
    };
    return MemoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], MemoryComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], MemoryComponent.prototype, "slider", void 0);
MemoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'memory-chart',
        template: __webpack_require__(391),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], MemoryComponent);

var _a, _b, _c;
//# sourceMappingURL=memory.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
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
    function NetworkComponent(dataService) {
        this.dataService = dataService;
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, {})
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
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, params)
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
    NetworkComponent.prototype.refresh = function () {
        this.getData();
    };
    return NetworkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], NetworkComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], NetworkComponent.prototype, "slider", void 0);
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'network-chart',
        template: __webpack_require__(392),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], NetworkComponent);

var _a, _b, _c;
//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessesComponent = (function () {
    function ProcessesComponent(dataService, chRef) {
        this.dataService = dataService;
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
            responsive: true
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
    ProcessesComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].processesUrl, {})
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
    ProcessesComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ProcessesComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ProcessesComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    ProcessesComponent.prototype.getData = function (callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].processesUrl, params)
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
    ProcessesComponent.prototype.refresh = function () {
        this.getData();
    };
    return ProcessesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], ProcessesComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], ProcessesComponent.prototype, "slider", void 0);
ProcessesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'processes-chart',
        template: __webpack_require__(393),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], ProcessesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=processes.component.js.map

/***/ }),

/***/ 249:
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
        template: __webpack_require__(394)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_component__ = __webpack_require__(249);
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

/***/ 251:
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
        template: __webpack_require__(396)
    })
], blankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__ = __webpack_require__(250);
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
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
    function NavigationComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: ""
        };
        this.apps = {
            backup: false
        };
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var self = this;
        this.userService.getUserFromServer(function (data) {
            self.user = data.user;
            self.apps = data.apps;
        });
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__(397),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_component__ = __webpack_require__(253);
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

/***/ 255:
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
        template: __webpack_require__(398),
    })
], TopnavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnavbar_component__ = __webpack_require__(255);
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartsModule; });
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

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_charts__ = __webpack_require__(257);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
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
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object])
], ChartsService);

var _a;
//# sourceMappingURL=charts.services.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () {
        return window;
    };
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WindowRef);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backup_view_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BackupViewModule = (function () {
    function BackupViewModule() {
    }
    return BackupViewModule;
}());
BackupViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__backup_view_component__["a" /* backupViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot()
        ],
    })
], BackupViewModule);

//# sourceMappingURL=backup-view.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_view_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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

/***/ 263:
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
        template: __webpack_require__(401)
    })
], minorViewComponent);

//# sourceMappingURL=minor-view.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minor_view_component__ = __webpack_require__(263);
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perf_view_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_charts_cpu_cpu_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_charts_memory_memory_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_charts_disk_disk_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_charts_network_network_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__ = __webpack_require__(7);
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
            __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__["NouisliderModule"]
        ],
    })
], PerfViewModule);

//# sourceMappingURL=perf-view.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__processes_view_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_charts_processes_processes_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProcessesViewModule = (function () {
    function ProcessesViewModule() {
    }
    return ProcessesViewModule;
}());
ProcessesViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__processes_view_component__["a" /* processesViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_charts_processes_processes_component__["a" /* ProcessesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__["NouisliderModule"]
        ],
    })
], ProcessesViewModule);

//# sourceMappingURL=processes-view.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sec_correct_login_view_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecCorrectLoginViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SecCorrectLoginViewModule = (function () {
    function SecCorrectLoginViewModule() {
    }
    return SecCorrectLoginViewModule;
}());
SecCorrectLoginViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sec_correct_login_view_component__["a" /* secCorrectLoginViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
        ],
    })
], SecCorrectLoginViewModule);

//# sourceMappingURL=sec-correct-login-view.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sec_incorrect_login_view_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecIncorrectLoginViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SecIncorrectLoginViewModule = (function () {
    function SecIncorrectLoginViewModule() {
    }
    return SecIncorrectLoginViewModule;
}());
SecIncorrectLoginViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sec_incorrect_login_view_component__["a" /* secIncorrectLoginViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"]
        ],
    })
], SecIncorrectLoginViewModule);

//# sourceMappingURL=sec-incorrect-login-view.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlstat_view_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlStatViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UrlStatViewModule = (function () {
    function UrlStatViewModule() {
    }
    return UrlStatViewModule;
}());
UrlStatViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__urlstat_view_component__["a" /* urlstatViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */]
        ],
    })
], UrlStatViewModule);

//# sourceMappingURL=urlstat-view.module.js.map

/***/ }),

/***/ 270:
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

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 94,
	"./af.js": 94,
	"./ar": 101,
	"./ar-dz": 95,
	"./ar-dz.js": 95,
	"./ar-kw": 96,
	"./ar-kw.js": 96,
	"./ar-ly": 97,
	"./ar-ly.js": 97,
	"./ar-ma": 98,
	"./ar-ma.js": 98,
	"./ar-sa": 99,
	"./ar-sa.js": 99,
	"./ar-tn": 100,
	"./ar-tn.js": 100,
	"./ar.js": 101,
	"./az": 102,
	"./az.js": 102,
	"./be": 103,
	"./be.js": 103,
	"./bg": 104,
	"./bg.js": 104,
	"./bn": 105,
	"./bn.js": 105,
	"./bo": 106,
	"./bo.js": 106,
	"./br": 107,
	"./br.js": 107,
	"./bs": 108,
	"./bs.js": 108,
	"./ca": 109,
	"./ca.js": 109,
	"./cs": 110,
	"./cs.js": 110,
	"./cv": 111,
	"./cv.js": 111,
	"./cy": 112,
	"./cy.js": 112,
	"./da": 113,
	"./da.js": 113,
	"./de": 116,
	"./de-at": 114,
	"./de-at.js": 114,
	"./de-ch": 115,
	"./de-ch.js": 115,
	"./de.js": 116,
	"./dv": 117,
	"./dv.js": 117,
	"./el": 118,
	"./el.js": 118,
	"./en-au": 119,
	"./en-au.js": 119,
	"./en-ca": 120,
	"./en-ca.js": 120,
	"./en-gb": 121,
	"./en-gb.js": 121,
	"./en-ie": 122,
	"./en-ie.js": 122,
	"./en-nz": 123,
	"./en-nz.js": 123,
	"./eo": 124,
	"./eo.js": 124,
	"./es": 126,
	"./es-do": 125,
	"./es-do.js": 125,
	"./es.js": 126,
	"./et": 127,
	"./et.js": 127,
	"./eu": 128,
	"./eu.js": 128,
	"./fa": 129,
	"./fa.js": 129,
	"./fi": 130,
	"./fi.js": 130,
	"./fo": 131,
	"./fo.js": 131,
	"./fr": 134,
	"./fr-ca": 132,
	"./fr-ca.js": 132,
	"./fr-ch": 133,
	"./fr-ch.js": 133,
	"./fr.js": 134,
	"./fy": 135,
	"./fy.js": 135,
	"./gd": 136,
	"./gd.js": 136,
	"./gl": 137,
	"./gl.js": 137,
	"./gom-latn": 138,
	"./gom-latn.js": 138,
	"./he": 139,
	"./he.js": 139,
	"./hi": 140,
	"./hi.js": 140,
	"./hr": 141,
	"./hr.js": 141,
	"./hu": 142,
	"./hu.js": 142,
	"./hy-am": 143,
	"./hy-am.js": 143,
	"./id": 144,
	"./id.js": 144,
	"./is": 145,
	"./is.js": 145,
	"./it": 146,
	"./it.js": 146,
	"./ja": 147,
	"./ja.js": 147,
	"./jv": 148,
	"./jv.js": 148,
	"./ka": 149,
	"./ka.js": 149,
	"./kk": 150,
	"./kk.js": 150,
	"./km": 151,
	"./km.js": 151,
	"./kn": 152,
	"./kn.js": 152,
	"./ko": 153,
	"./ko.js": 153,
	"./ky": 154,
	"./ky.js": 154,
	"./lb": 155,
	"./lb.js": 155,
	"./lo": 156,
	"./lo.js": 156,
	"./lt": 157,
	"./lt.js": 157,
	"./lv": 158,
	"./lv.js": 158,
	"./me": 159,
	"./me.js": 159,
	"./mi": 160,
	"./mi.js": 160,
	"./mk": 161,
	"./mk.js": 161,
	"./ml": 162,
	"./ml.js": 162,
	"./mr": 163,
	"./mr.js": 163,
	"./ms": 165,
	"./ms-my": 164,
	"./ms-my.js": 164,
	"./ms.js": 165,
	"./my": 166,
	"./my.js": 166,
	"./nb": 167,
	"./nb.js": 167,
	"./ne": 168,
	"./ne.js": 168,
	"./nl": 170,
	"./nl-be": 169,
	"./nl-be.js": 169,
	"./nl.js": 170,
	"./nn": 171,
	"./nn.js": 171,
	"./pa-in": 172,
	"./pa-in.js": 172,
	"./pl": 173,
	"./pl.js": 173,
	"./pt": 175,
	"./pt-br": 174,
	"./pt-br.js": 174,
	"./pt.js": 175,
	"./ro": 176,
	"./ro.js": 176,
	"./ru": 177,
	"./ru.js": 177,
	"./sd": 178,
	"./sd.js": 178,
	"./se": 179,
	"./se.js": 179,
	"./si": 180,
	"./si.js": 180,
	"./sk": 181,
	"./sk.js": 181,
	"./sl": 182,
	"./sl.js": 182,
	"./sq": 183,
	"./sq.js": 183,
	"./sr": 185,
	"./sr-cyrl": 184,
	"./sr-cyrl.js": 184,
	"./sr.js": 185,
	"./ss": 186,
	"./ss.js": 186,
	"./sv": 187,
	"./sv.js": 187,
	"./sw": 188,
	"./sw.js": 188,
	"./ta": 189,
	"./ta.js": 189,
	"./te": 190,
	"./te.js": 190,
	"./tet": 191,
	"./tet.js": 191,
	"./th": 192,
	"./th.js": 192,
	"./tl-ph": 193,
	"./tl-ph.js": 193,
	"./tlh": 194,
	"./tlh.js": 194,
	"./tr": 195,
	"./tr.js": 195,
	"./tzl": 196,
	"./tzl.js": 196,
	"./tzm": 198,
	"./tzm-latn": 197,
	"./tzm-latn.js": 197,
	"./tzm.js": 198,
	"./uk": 199,
	"./uk.js": 199,
	"./ur": 200,
	"./ur.js": 200,
	"./uz": 202,
	"./uz-latn": 201,
	"./uz-latn.js": 201,
	"./uz.js": 202,
	"./vi": 203,
	"./vi.js": 203,
	"./x-pseudo": 204,
	"./x-pseudo.js": 204,
	"./yo": 205,
	"./yo.js": 205,
	"./zh-cn": 206,
	"./zh-cn.js": 206,
	"./zh-hk": 207,
	"./zh-hk.js": 207,
	"./zh-tw": 208,
	"./zh-tw.js": 208
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
webpackContext.id = 379;


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;padding: 0;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        Version: <strong>0.0.1</strong>\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2017\n    </div>\n</div>"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <a href=\"#\">\n                    <i class=\"fa fa-user\"></i>\n                    <span class=\"nav-label\"> <strong class=\"font-bold\">{{user.username}}</strong> </span>\n                        <!-- <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span> -->\n                </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('dash')}\">\n                <a [routerLink]=\"['/']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('perf')}\">\n                <a [routerLink]=\"['/perf']\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Perfomance</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('processes')}\">\n                <a [routerLink]=\"['/processes']\"><i class=\"fa fa-tasks\"></i> <span class=\"nav-label\">Processes</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('correctlogin') || activeRoute('incorrectlogin')}\">\n                <a href=\"\" class=\"auto\">      \n                  <span class=\"pull-right text-muted\">\n                    <i class=\"fa fa-fw fa-angle-right text\"></i>\n                    <i class=\"fa fa-fw fa-angle-down text-active\"></i>\n                  </span>\n                  <i class=\"fa fa-shield\"></i>\n                  <span>Security</span>\n                </a>\n                <ul class=\"nav nav-sub dk\">\n                  <li class=\"nav-sub-header\">\n                    <a [routerLink]=\"['/correctlogin']\" style=\"font-size: 11px;\">\n                      <i class=\"fa fa-square-o\"></i><span>Number of login </span>\n                    </a>\n                  </li>\n                  <li ui-sref-active=\"active\">\n                    <a [routerLink]=\"['/incorrectlogin']\" style=\"font-size: 11px;\">\n                      <i class=\"fa  fa-square\"></i><span>Incorrect attempt login</span>\n                    </a>\n                  </li>\n                </ul>\n            </li>\n            <li *ngIf=\"apps.urlstat\" [ngClass]=\"{active: activeRoute('urlstat')}\">\n                <a [routerLink]=\"['/urlstat']\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">Url statistics</span> </a>\n            </li>\n            <li *ngIf=\"apps.backup\" [ngClass]=\"{active: activeRoute('backups')}\">\n                <a [routerLink]=\"['/backups']\"><i class=\"fa fa-truck\"></i> <span class=\"nav-label\">Backups</span> </a>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <!--\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n            -->\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"/admin/logout/\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    \n    <a [href]=\"backupMakeUrl\" class=\"btn btn-success\" target=\"_blank\">Make and download database backup</a>\n    <a [href]=\"backupMakeMediaUrl\" class=\"btn btn-primary\" target=\"_blank\">Make and download media backup</a>\n    \n\n    <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-lg-9\">\n            <div class=\"wrapper-md\">\n                <div class=\"tab-container\">\n                    <ul class=\"nav nav-tabs nav-stacked nav-justified\">\n                        <li [ngClass]=\"{active: router.url=='/backups'}\">\n                            <a [routerLink]=\"['/backups']\">Settings</a>\n                        </li>\n                        <li [ngClass]=\"{active: router.url=='/backups/result'}\">\n                            <a [routerLink]=\"['/backups/result']\">Result</a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div *ngIf=\"router.url=='/backups'\" class=\"tab-pane active\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <label>Day time for running backup (will be run everyday):</label>\n                                            <div style=\"display: flex;align-items: center;\">\n                                                <timepicker [(ngModel)]=\"model.backuptime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"changedTime()\"></timepicker>\n                                                <button type=\"button\" class=\"btn btn-info\" style=\"margin-left: 20px;height:40px;\" (click)=\"saveBackTime()\">Save</button>\n                                                <span *ngIf=\"backuptime_is_dirty\" class=\"text-warning\" style=\"margin-left: 10px;\">Time is not save</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Absolute path for media directory (if required):</label>\n                                            <div class=\"input-group\">\n                                                <input name=\"inputedDir\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model.inputedDir\" (keyup.enter)=\"addDirectory()\"/>\n                                                <span class=\"input-group-addon\" style=\"padding: 0;\"> \n                                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"addDirectory()\" [disabled]=\"!model.inputedDir || loading\" style=\"margin: -2px;\">Add</button></span>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"mediadirs.length > 0\" class=\"form-group\">\n                                            <div class=\"panel panel-default\">\n                                                <div class=\"panel-body\">\n                                                    <p *ngIf=\"mediadirs.length == 0\">No directories specified</p>\n                                                    <div *ngFor=\"let obj of mediadirs; let i = index;\" style=\"margin-top: 2px;\">\n                                                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"deletePath(i)\" [disabled]=\"loading\"><i class=\"fa fa-times\"></i></button>\n                                                        <span style=\"margin-left:20px;\">{{obj.path}}</span>\n                                                        <span>\n                                                            <i *ngIf=\"obj.checked\" class=\"fa fa-check text-info\"></i>\n                                                        </span>\n                                                        <span *ngIf=\"!obj.checked\">\n                                                            <i class=\"fa fa-exclamation text-warning\"></i> \n                                                            <small>(Path doesn't exist)</small>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"router.url=='/backups/result'\" class=\"tab-pane active\">\n                            \n\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    <div *ngIf=\"backups_daily\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Daily Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_daily\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"backups_weekly\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Weekly Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_weekly\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"backups_monthly\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Monthly Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_monthly\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n        <div class=\"col-lg-3\">\n            <div class=\"wrapper-md\">\n                <div class=\"panel panel-success\">\n\n                    <div class=\"panel-heading \">\n                        Info\n                        <button type=\"button\" class=\"btn btn-success btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <span class=\"text-success\">Last run: </span>\n                        <span>{{ last_run_backup| date: 'yyyy-MM-dd HH:mm' || \"None\"}} </span>\n\n                        <span class=\"text-success\">State: </span>\n                        <span *ngIf=\"backups_enable\" class=\"text-primary\" style=\"margin-right: 20px;\">backup is enable</span>\n                        <span *ngIf=\"!backups_enable\" class=\"text-danger\" style=\"margin-right: 20px;\">backup is disabled</span>\n                        <div style=\"margin-top: 20px\">\n                            <button *ngIf=\"backups_enable\" type=\"button\" class=\"btn btn-primary\" (click)=\"backupSwitch()\">Turn off backup</button>\n                            <button *ngIf=\"!backups_enable\" type=\"button\" class=\"btn btn-danger\" (click)=\"backupSwitch()\">Turn on backup</button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"text-muted font-thin pull-right\" style=\"font-size: 12px;margin: 10px;\">\n        Running time: {{ boottime || 0 }}\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <div class=\"wrapper-md\">\n                <small>Last {{ avarage.hours || 0}} hours</small>\n                <div class=\"row row-sm\">\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_cpu > 60 && avarage.avarage_cpu < 90,\n                            'bg-danger': avarage.avarage_cpu >= 90\n                        }\" style=\"height: 90px;\" >\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_cpu || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage cpu used</span><br>\n\n                            <div class=\"top text-info text-right w-full\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_memory > 60 && avarage.avarage_memory < 90,\n                            'bg-danger': avarage.avarage_memory >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_memory || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage memory used</span><br>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_disk > 60 && avarage.avarage_disk < 90,\n                            'bg-danger': avarage.avarage_disk >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_disk || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage disk space used</span>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"panel panel-default\" style=\"padding-top: 20px;\">\n                <div class=\"text-center wrapper m-b-sm\">              \n                    <h4>Current users</h4>\n                    <ul class=\"list-group\" stlye=\"text-align: left;\">\n                        <li class=\"list-group-item\" style=\"text-align: left;\" *ngFor=\"let user of users; let i = index;\">\n                            <p style=\"margin:0;font-size: 8px;text-align: right;\">{{getDateFromTimestap(user[3])}}</p>\n                            <div>\n                                <span class=\"label bg-primary\">{{i}}</span>\n                                <span>{{user[0]}} / {{user[1]}}</span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\" style=\"margin-bottom: 20px;\">\n                <h1>\n                    Perfomance charts\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n\n            <div class=\"col-md-6\">\n                <cpu-chart></cpu-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <memory-chart></memory-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <disk-chart></disk-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <network-chart></network-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Last time update: {{last_time }}</small>\n                        <button type=\"button\" class=\"btn btn-info btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr *ngFor=\"let p of last_processes\">\n                                <td>\n                                    <span style=\"font-size: 8px;\">{{p.pid}}</span>\n                                </td>\n                                <td><b>{{p.name}}</b> </td>\n                                <td>{{p.status}}</td>\n                                <td>{{p.cpu}}</td>\n                                <td>{{p.create_time}}</td>\n                            </tr>\n                        </table>\n\n                        <!-- Loading -->\n                        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                            </div>\n                            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                            </div>\n                        </div>\n                        <!-- END Loading -->\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"wrapper-md\">\n                            <small>Last {{ hours }} hours</small>\n                            <div class=\"row row-sm\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel padder-v item text-center bg-primary\" style=\"height: 90px;\" >\n                                        <div class=\"h1 text-white font-thin\">{{ avarage_number || 0 }}</div>\n                                        <span class=\"text-white text-xs\" translate>Number of processes</span><br>\n\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <processes-chart></processes-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Top 100 source IP address</small>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr *ngFor=\"let p of hosts\">\n                                <td>\n                                    {{p.host}}\n                                </td>\n                                <td><b>{{p.count}}</b> </td>\n                                <td>{{p.last_date}}</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"wrapper-md\">\n                            <div class=\"row row-sm\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel padder-v item text-center bg-primary\" style=\"height: 90px;\">\n                                        <div class=\"h1 text-white font-thin\">{{ count_correct_attempt || 0 }}</div>\n                                        <span class=\"text-white text-xs\" translate>Number of correct attempts login</span><br>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div style=\"text-align: center;\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refreshChart()\">\n                                <i class=\"fa fa-refresh\"></i>\n                            </button>\n                            \n                            <canvas baseChart\n                                        [datasets]=\"lineChartData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartColors\"\n                                        [chartType]=\"lineChartType\"\n                                        (chartHover)=\"chartHovered($event)\"\n                                        (chartClick)=\"chartClicked($event)\"></canvas>\n\n                            <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n                            <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n                            <!-- Loading -->\n                            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                                </div>\n                                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                                </div>\n                            </div>\n                            <!-- END Loading -->\n                        </div>\n\n\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading \">\n                                <small>Top 100 usernames</small>\n                            </div>\n                            <div class=\"panel-body\">\n                                <table class=\"table\">\n                                    <tr *ngFor=\"let p of users\">\n                                        <td>\n                                            {{p.username}}\n                                        </td>\n                                        <td><b>{{p.count}}</b> </td>\n                                        <td>{{p.last_date}}</td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Top 100 source IP address</small>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr *ngFor=\"let p of hosts\">\n                                <td>\n                                    {{p.host}}\n                                </td>\n                                <td><b>{{p.count}}</b> </td>\n                                <td>{{p.last_date}}</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"wrapper-md\">\n                            <div class=\"row row-sm\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel padder-v item text-center bg-primary\" style=\"height: 90px;\" [ngClass]=\"{\n                                    'bg-warning': count_incorrect_attepmt > 0 && count_incorrect_attepmt <= 100,\n                                    'bg-danger': count_incorrect_attepmt > 100 }\">\n                                        <div class=\"h1 text-white font-thin\">{{ count_incorrect_attepmt || 0 }}</div>\n                                        <span class=\"text-white text-xs\" translate>Number of incorrect attempts login</span><br>\n\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div style=\"text-align: center;\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refreshChart()\">\n                                <i class=\"fa fa-refresh\"></i>\n                            </button>\n\n                            <canvas baseChart\n                                        [datasets]=\"lineChartData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartColors\"\n                                        [chartType]=\"lineChartType\"\n                                        (chartHover)=\"chartHovered($event)\"\n                                        (chartClick)=\"chartClicked($event)\"></canvas>\n\n                            <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n                            <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n                            <!-- Loading -->\n                            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                                </div>\n                                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                                </div>\n                            </div>\n                            <!-- END Loading -->\n                            \n                        </div>\n\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading \">\n                                <small>Top 100 usernames</small>\n                            </div>\n                            <div class=\"panel-body\">\n                                <table class=\"table\">\n                                    <tr *ngFor=\"let p of users\">\n                                        <td>\n                                            {{p.username}}\n                                        </td>\n                                        <td><b>{{p.count}}</b> </td>\n                                        <td>{{p.last_date}}</td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Last time update: {{last_time }}</small>\n                        <button type=\"button\" class=\"btn btn-info btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"font-size: 10px;\">Count</th>\n                                        <th style=\"font-size: 10px;\">URL</th>\n                                        <th style=\"font-size: 10px;\">Duration</th>\n                                        <th style=\"font-size: 10px;\">Queries count</th>\n                                        <th style=\"font-size: 10px;\">Max query durations</th>\n                                        <th style=\"font-size: 10px;\">Last req</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let p of allRequests\">\n                                        <td>\n                                            <span>{{p.count}}</span>\n                                        </td>\n                                        <td style=\"word-break: break-word;\">\n                                            <b>{{p.url}}</b> \n                                            <p style=\"font-size: 8px\">{{p.method }} {{p.request_code}}</p>\n                                        </td>\n                                        <td>{{toFixed(p.request_duration)}}</td>\n                                        <td>{{p.request_sql_count}}</td>\n                                        <td>{{toFixed(p.request_sql_time)}}</td>\n                                        <td>{{getDateFromTimestap(p.last_time_request)}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- Loading -->\n                        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                            </div>\n                            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                            </div>\n                        </div>\n                        <!-- END Loading -->\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div style=\"text-align: center;padding: 0;\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n                                <i class=\"fa fa-refresh\"></i>\n                            </button>\n                            <div>\n                                <canvas baseChart\n                                        [datasets]=\"lineChartData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartColors\"\n                                        [chartType]=\"lineChartType\"\n                                        ></canvas>\n                            </div>\n                            <div>\n                                <canvas baseChart\n                                        [datasets]=\"lineChartTimeData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartTimeColors\"\n                                        [chartType]=\"lineChartType\"\n                                        ></canvas>\n                            </div>\n\n                            <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n                            <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n                            <!-- Loading -->\n                            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                                </div>\n                                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                                </div>\n                            </div>\n                            <!-- END Loading -->\n                            \n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserFromServer = function (callback) {
        var self = this;
        var data = {
            t: new Date().getTime()
        };
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].userUrl, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (data) {
            if (!data.is_authenticated) {
                window.location.href = "/";
            }
            self.user = data.user;
            if (callback) {
                callback(data);
            }
        }, function (error) {
        });
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
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
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),

/***/ 72:
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
        template: __webpack_require__(395)
    })
], basicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backupViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backupViewComponent = (function () {
    function backupViewComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.loading = false;
        this.error_message = "";
        this.backups_daily = [];
        this.backups_weekly = [];
        this.backups_monthly = [];
        this.backups_enable = true;
        this.mediadirs = [];
        this.model = {
            inputedDir: "",
            backuptime: ""
        };
        this.backuptime_is_dirty = false;
    }
    backupViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.backupMakeUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupMakeUrl;
        self.backupMakeMediaUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupMakeMediaUrl;
        self.backupGetMediaUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupGetMediaUrl;
        self.getBackups();
    };
    backupViewComponent.prototype.getBackups = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.backups_daily = data.backups.daily;
            self.backups_weekly = data.backups.weekly;
            self.backups_monthly = data.backups.monthly;
            self.backups_enable = data.enable;
            self.last_run_backup = data.last_run_backup;
            self.mediadirs = data.media_directories;
            self.result_last_run_backup = data.result;
            self.model.backuptime = data.run_time;
            self.backuptime_loaded = data.run_time;
            if (!self.model.backuptime) {
                self.model.backuptime = moment().toDate();
                self.backuptime_is_dirty = true;
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('YYYY-DD-MM HH:mm');
    };
    backupViewComponent.prototype.backupSwitch = function () {
        var self = this;
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsEnableUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.backups_enable = data.enable;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.addDirectory = function () {
        var self = this;
        self.mediadirs.push({
            path: this.model.inputedDir,
            checked: false
        });
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsPathDirUrl, {
            dirs: self.mediadirs
        })
            .subscribe(function (data) {
            self.loading = false;
            self.model.inputedDir = "";
            self.mediadirs = data.media_directories;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.deletePath = function (index) {
        var self = this;
        self.mediadirs.splice(index, 1);
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsPathDirUrl, {
            dirs: self.mediadirs
        })
            .subscribe(function (data) {
            self.loading = false;
            self.mediadirs = data.media_directories;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.changedTime = function () {
        if (this.backuptime_loaded &&
            moment(this.backuptime_loaded).format('X') == moment(this.model.backuptime).format('X')) {
            this.backuptime_is_dirty = false;
        }
        else {
            this.backuptime_is_dirty = true;
        }
    };
    backupViewComponent.prototype.saveBackTime = function () {
        var self = this;
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsSetTimeUrl, {
            time: moment(self.model.backuptime).format('X')
        })
            .subscribe(function (data) {
            self.loading = false;
            self.backuptime_is_dirty = false;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.refresh = function () {
        this.getBackups();
    };
    backupViewComponent.prototype.getFileUrl = function (filename) {
        return __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupGetMediaUrl + filename;
    };
    return backupViewComponent;
}());
backupViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'backupView',
        template: __webpack_require__(399)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], backupViewComponent);

var _a, _b;
//# sourceMappingURL=backup-view.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(9);
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
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].bootTimeUrl, {})
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
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].usersUrl, {})
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
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].dashUrl, {})
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
        template: __webpack_require__(400)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], mainViewComponent);

var _a;
//# sourceMappingURL=main-view.component.js.map

/***/ }),

/***/ 75:
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
        template: __webpack_require__(402)
    })
], perfViewComponent);

//# sourceMappingURL=perf-view.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processesViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var processesViewComponent = (function () {
    function processesViewComponent(dataService) {
        this.dataService = dataService;
        this.loading = false;
        this.last_processes = [];
    }
    processesViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getAvarageNumber(function () {
            self.getProcesses();
        });
    };
    processesViewComponent.prototype.getProcesses = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].processesLastUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.last_time = data.time;
            self.last_processes = data.processes;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    processesViewComponent.prototype.getAvarageNumber = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].processesAvarageNumberUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.hours = data.hours;
            self.avarage_number = data.avarage_number;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    processesViewComponent.prototype.refresh = function () {
        this.getProcesses();
    };
    return processesViewComponent;
}());
processesViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'processesView',
        template: __webpack_require__(403)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], processesViewComponent);

var _a;
//# sourceMappingURL=processes-view.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secCorrectLoginViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var secCorrectLoginViewComponent = (function () {
    function secCorrectLoginViewComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.count_correct_attempt = 0;
        this.users = [];
        this.hosts = [];
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
    secCorrectLoginViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].secCorrectLoginUrl, {})
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
            self.count_correct_attempt = data.count_correct_attempt;
            self.hosts = data.hosts;
            self.users = data.users;
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    secCorrectLoginViewComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    secCorrectLoginViewComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    secCorrectLoginViewComponent.prototype.onChange = function ($event) {
        //console.log('this.dateRange', this.dateRange)
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    secCorrectLoginViewComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].secCorrectLoginUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.count_correct_attempt = data.count_correct_attempt;
            self.hosts = data.hosts;
            self.users = data.users;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    secCorrectLoginViewComponent.prototype.refreshChart = function () {
        this.getData();
    };
    return secCorrectLoginViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], secCorrectLoginViewComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], secCorrectLoginViewComponent.prototype, "slider", void 0);
secCorrectLoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'secCorrectLoginView',
        template: __webpack_require__(404)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], secCorrectLoginViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sec-correct-login-view.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secIncorrectLoginViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var secIncorrectLoginViewComponent = (function () {
    function secIncorrectLoginViewComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.count_incorrect_attepmt = 0;
        this.hosts = [];
        this.users = [];
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
            responsive: true
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(237,85,101,0.8)',
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
    secIncorrectLoginViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].secIncorrectLoginUrl, {})
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
            self.count_incorrect_attepmt = data.count_incorrect_attepmt;
            self.hosts = data.hosts;
            self.users = data.users;
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    secIncorrectLoginViewComponent.prototype.onChange = function ($event) {
        //console.log('this.dateRange', this.dateRange)
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    secIncorrectLoginViewComponent.prototype.getData = function () {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].secIncorrectLoginUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.count_incorrect_attepmt = data.count_incorrect_attepmt;
            self.hosts = data.hosts;
            self.users = data.users;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    secIncorrectLoginViewComponent.prototype.refreshChart = function () {
        this.getData();
    };
    return secIncorrectLoginViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], secIncorrectLoginViewComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], secIncorrectLoginViewComponent.prototype, "slider", void 0);
secIncorrectLoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'secIncorrectLoginView',
        template: __webpack_require__(405)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], secIncorrectLoginViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sec-incorrect-login-view.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlstatViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var urlstatViewComponent = (function () {
    function urlstatViewComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.allRequests = [];
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
        this.lineChartTimeData = [
            { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(10,159,177,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(248,172,89,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartTimeColors = [{
                backgroundColor: 'rgba(51,122,183,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(138,109,59,0.5)',
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
    urlstatViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlStatUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartTimeData = data.values_time;
            self.lineChartLabels = data.dates;
            self.allRequests = data.all_requests;
            self.last_time = data.last_time;
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
    urlstatViewComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    urlstatViewComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    urlstatViewComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    urlstatViewComponent.prototype.getData = function (callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlStatUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartTimeData = data.values_time;
            self.lineChartLabels = data.dates;
            self.allRequests = data.all_requests;
            self.last_time = data.last_time;
            self.chart.ngOnChanges({});
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    urlstatViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('MMM DD HH:mm');
    };
    urlstatViewComponent.prototype.refresh = function () {
        this.getData();
    };
    urlstatViewComponent.prototype.toFixed = function (value) {
        return value.toFixed(2);
    };
    return urlstatViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], urlstatViewComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], urlstatViewComponent.prototype, "slider", void 0);
urlstatViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'urlstatView',
        template: __webpack_require__(406),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], urlstatViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=urlstat-view.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(258);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });

//# sourceMappingURL=ng2-charts.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function (url, _params) {
        var data = _params || {};
        data.t = new Date().getTime();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.postData = function (url, _params) {
        var data = _params || {};
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.post(url, data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
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
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ })

},[450]);
//# sourceMappingURL=main.bundle.js.map