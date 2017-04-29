import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';


import { BaseChartDirective } from '../../../libs/ng2-charts/ng2-charts';

import { NouisliderComponent } from 'ng2-nouislider';

import { AppSettings } from '../../../app.settings';
import { DataService } from '../../../services/data.service';

declare var moment: any;

interface NouiFormatter {
    to(value: number): string;
    from(value: string): any;
}


@Component({
    selector: 'cpu-chart',
    templateUrl: 'cpu.template.html',
})
export class CpuComponent implements OnInit { 
    @ViewChild( BaseChartDirective ) chart: BaseChartDirective;
    @ViewChild( NouisliderComponent ) slider: NouisliderComponent;

    error_message;
    loading:boolean = false;

    dateRange = [0, 100];
    rangeStartDate;
    rangeEndDate;
   
    
    formatter: NouiFormatter = {
         to(value: number): string {
            if (value) {
                return moment(value, 'X').format('YYYY-DD-MM HH:mm');
            }
          },
          from(value: string): any {
              if (value) {
                  if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                      let d = moment(value, 'YYYY-DD-MM HH:mm').format('X')
                      return parseFloat(d);
                  }
                  return value;
              }
          }
         

    };

    constructor (private dataService: DataService, private chRef: ChangeDetectorRef) {
    }

    public lineChartData:Array<any> = [
        {data: [], label: ''}
    ];
    public lineChartLabels:Array<any> = [];

    public lineChartOptions:any = {
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
                    callback: function(value: number, index, values) {
                        return value + "%";
                    }
                }
            }]
        }
    };
    public lineChartColors:Array<any> = [{
      backgroundColor: 'rgba(10,159,177,0.5)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(10,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(10,10,24,0.2)'
    }];


    

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    

    dateRangeMin = 0;
    dateRangeMax = 10;
    onInitTime = false;
    ngOnInit() { 
        let self = this;
        self.loading = true;
        self.dataService.getData(AppSettings.perfCpuUrl,{})
        .subscribe(
            function(data) {
                self.loading = false;
                self.lineChartData = data.values;
                self.lineChartLabels = data.dates;
                self.chart.ngOnChanges({});

                self.onInitTime = true;
                self.dateRangeMin =  data.date_range.start_date;
                self.dateRangeMax =  data.date_range.end_date;
                self.slider.slider.updateOptions({
                    start: [data.date_range.start, data.date_range.end_date],
                    range: {
                        'min': data.date_range.start,
                        'max': data.date_range.end_date
                    }
                });
                self.dateRange = [data.date_range.start, data.date_range.end_date];
                self.chRef.detectChanges();
                    
                setTimeout(function() {
                    self.onInitTime = false;
                }, 1000);
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
        
    }

    public chartClicked(e:any):void {
        console.log(e);
    }
 
    public chartHovered(e:any):void {
        console.log(e);
    }

    public onChange($event) {
        //console.log('this.dateRange', this.dateRange)
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    }

    private getData() {
        if (this.loading || this.onInitTime ) {
            return;
        }

        let self = this;
        let params = {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        }
        self.loading = true;
        self.dataService.getData(AppSettings.perfCpuUrl, params)
        .subscribe(
            function(data) {
                self.loading = false;
                self.lineChartData = data.values;
                self.lineChartLabels = data.dates;
                self.chart.ngOnChanges({});
            },
            function(error) {
                self.loading = false;
                self.error_message = <any>error;
            }
        );
    }

    public refresh() {
        this.getData();
    }
}
