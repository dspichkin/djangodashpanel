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
var ng2_charts_1 = require("../../../libs/ng2-charts/ng2-charts");
var ng2_nouislider_1 = require("ng2-nouislider");
var app_settings_1 = require("../../../app.settings");
var data_service_1 = require("../../../services/data.service");
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
        self.dataService.getData(app_settings_1.AppSettings.ProcessesUrl, {})
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
        self.dataService.getData(app_settings_1.AppSettings.ProcessesUrl, params)
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
    return ProcessesComponent;
}());
__decorate([
    core_1.ViewChild(ng2_charts_1.BaseChartDirective),
    __metadata("design:type", ng2_charts_1.BaseChartDirective)
], ProcessesComponent.prototype, "chart", void 0);
__decorate([
    core_1.ViewChild(ng2_nouislider_1.NouisliderComponent),
    __metadata("design:type", ng2_nouislider_1.NouisliderComponent)
], ProcessesComponent.prototype, "slider", void 0);
ProcessesComponent = __decorate([
    core_1.Component({
        selector: 'processes-chart',
        templateUrl: 'processes.template.html',
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, core_1.ChangeDetectorRef])
], ProcessesComponent);
exports.ProcessesComponent = ProcessesComponent;
//# sourceMappingURL=processes.component.js.map