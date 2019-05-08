import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { Chart, MapChart } from 'angular-highcharts';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  artist_vote: any = {};
  home_tab_cnt: any = 1;
  analytics_days: any = 7;
  show_duration_date: any = '';
  artist_chart: any = '';
  top_location_bar_chart: any = '';
  top_location_chart: any = '';
  artist_info: any = [];
  private chart: AmChart;
  constructor(
    private HomeService: HomeService,
    private AmCharts: AmChartsService,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService
  ) {
    console.log('Admin dashboard component');
  }

  ngOnInit() {
    // this.ngxService.start();
    this.getMaxVoteAritst({ day: this.analytics_days });
    this.calculateDateFromDays(this.analytics_days);
  }

  ngAfterViewInit() { }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  openModal(template: any, id: any, type: any) {
    let data = {
      artist_id: id
    };
    if (type === 'track') {
      this.HomeService.getArtistTrackById(data).subscribe((response) => {
        this.artist_info = response['artist']['track'];
      });
    } else if (type === 'follower') {
      this.HomeService.getArtistFollowerById(data).subscribe((response) => {
        this.artist_info = response['artist']['artist'];
      });
    } else if (type === 'vote') {
      this.HomeService.getArtistVoteById(data).subscribe((response) => {
        this.artist_info = response['artist']['vote'];
      });
    } else {
      this.HomeService.getArtistCommentById(data).subscribe((response) => {
        this.artist_info = response['artist']['comment'];
      });
    }
    this.modalRef = this.modalService.show(template, { backdrop: 'static' });
  }

  homeTabChange(index: any) {
    this.home_tab_cnt = index;
    if (index === 1) {
      this.getMaxVoteAritst({ day: this.analytics_days });
    } else if (index === 2) {
      this.getMaxLikeAritst({ day: this.analytics_days });
    } else {
      this.getMaxCommentAritst({ day: this.analytics_days });
    }
  }

  calculateDateFromDays(days: any) {
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    this.show_duration_date = this.formatDate(last) + ' - ' + this.formatDate(date);
  }

  formatDate(date) {
    var monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
  }

  changeAnalyticsDays() {
    this.calculateDateFromDays(this.analytics_days);
    if (this.home_tab_cnt === 1) {
      this.getMaxVoteAritst({ day: this.analytics_days });
    } else if (this.home_tab_cnt === 2) {
      this.getMaxLikeAritst({ day: this.analytics_days });
    } else {
      this.getMaxCommentAritst({ day: this.analytics_days });
    }
  }

  // Get all aritst based on max vote
  getMaxVoteAritst(data: any) {
    this.HomeService.getMaxVoteArtists(data).subscribe(response => {
      console.log('first => ');
      this.artist_vote = response;
      this.artistChart(response['day_vote']);
      this.topLocationChart(response['location']);
      this.topLocationBarChart(response['location']);
      // this.ngxService.stop();
    });
  }

  // Get all aritst based on max vote
  getMaxLikeAritst(data: any) {
    this.HomeService.getMaxLikeArtists(data).subscribe(response => {
      this.artist_vote = response;
      this.artistChart(response['likes']);
      this.topLocationChart(response['location']);
      this.topLocationBarChart(response['location']);
    });
  }

  // Get all aritst based on max vote
  getMaxCommentAritst(data: any) {
    this.HomeService.getMaxCommentArtists(data).subscribe(response => {
      this.artist_vote = response;
      this.artistChart(response['comment']);
      this.topLocationChart(response['location']);
      this.topLocationBarChart(response['location']);
    });
  }

  // Artist chart
  artistChart(data: any) {
    let result = [0, 0, 0, 0, 0, 0, 0];

    data.forEach(ele => {
      result[ele['_id']] = ele.count;
    });
    this.artist_chart = new Chart({
      chart: {
        type: 'area',
        height: 200
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
          enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis: {
        visible: true
      },
      series: [
        {
          name: 'Artist',
          color: '#9b26b0',
          data: result
        }
      ]
    });
  }
  // Top location chart
  topLocationChart(data: any) {
    let final_data = [];
    let min = 0;
    let max = 0;
    if (data.length > 0) {
      max = data[data.length - 1]['value'];
    }
    data.forEach((ele) => {
      final_data.push({ id: 'US-' + ele['_id']['name'], value: ele['value'] });
    });
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'map',
      'theme': 'light',
      'dataProvider': {
        'map': 'usaLow',

        'colorSteps': 10,
        'areas': final_data
      },
      'areasSettings': {
        'autoZoom': true
      },
      'valueLegend': {
        'right': 10,
        'minValue': min,
        'maxValue': max
      }
    });

  }
  // Top location bar chart
  topLocationBarChart(data: any) {
    let cat = [];
    let final_data = [];
    data.forEach(ele => {
      cat.push(ele['_id']['_id']);
      final_data.push(ele['value']);
    });
    this.top_location_bar_chart = new Chart({
      chart: {
        type: 'bar',
        height: 200
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: cat,
        labels: {
          enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0,
        minorGridLineWidth: 0
      },
      yAxis: {
        visible: true,
        min: 0,
        labels: {
          overflow: 'justify'
        },

        tickLength: 0
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      series: [
        {
          name: 'Top Location',
          color: '#9b26b0',
          data: final_data
        }
      ]
    });
  }
}
