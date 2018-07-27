import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Chart, MapChart } from 'angular-highcharts';
import { country_data } from '../../../assets/data/us-all';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  artist_vote : any = {};
  home_tab_cnt : any = 1;
  analytics_days : any = 7;
  show_duration_date : any = '';
  artist_chart : any = '';
  top_location_chart : any = '';
  constructor(private HomeService : HomeService) {
    console.log("Admin dashboard component");
  }

  ngOnInit() {
    this.getMaxVoteAritst({day : this.analytics_days});
    this.calculateDateFromDays(this.analytics_days);
    this.topLocationChart({});
  }

  homeTabChange(index : any) {    
    this.home_tab_cnt = index;
    if(index == 1)  {
      this.getMaxVoteAritst({day : this.analytics_days});
    } else if (index == 2) {
      this.getMaxLikeAritst({day : this.analytics_days});
    } else {
      this.getMaxCommentAritst({day : this.analytics_days});
    }
  }

  calculateDateFromDays(days : any) {
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    this.show_duration_date = this.formatDate(last)+' - '+this.formatDate(date);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return  monthNames[monthIndex] + ' '+day+ ', '+ year;
  }

  changeAnalyticsDays() {
    this.calculateDateFromDays(this.analytics_days);
    if(this.home_tab_cnt == 1)  {
      this.getMaxVoteAritst({day : this.analytics_days});
    } else if (this.home_tab_cnt == 2) {
      this.getMaxLikeAritst({day : this.analytics_days});
    } else {
      this.getMaxCommentAritst({day : this.analytics_days});
    }
  }

  // Get all aritst based on max vote
  getMaxVoteAritst(data : any) {
    this.HomeService.getMaxVoteArtists(data).subscribe(response => {
      this.artist_vote = response;
      this.artistChart(response['day_vote']);
    });
  }

  // Get all aritst based on max vote
  getMaxLikeAritst(data : any) {
    this.HomeService.getMaxLikeArtists(data).subscribe(response => {
      this.artist_vote = response;
      this.artistChart(response['likes']);
    });
  }

  // Get all aritst based on max vote
  getMaxCommentAritst(data : any) {
    this.HomeService.getMaxCommentArtists(data).subscribe(response => {
      this.artist_vote = response;
      this.artistChart(response['comment']);
    });
  }

  // Artist chart
  artistChart(data : any) {
    let result = [0,0,0,0,0,0,0];
    
    data.forEach(ele => {
      result[ele['_id']] = ele.count;
    });
    this.artist_chart = new Chart({
      chart: {
        type: 'area',
        height:200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true
      },
      series: [
        {
          name : 'Artist',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }
  // Top location chart
  topLocationChart(data : any) {
    let options = {
      series: [{
        chart : {
          map : country_data
        },
        title: {
          text: 'Highmaps basic demo'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          min: 0
        },
        data: [
          {
            "value": 438,
            "code": "nj"
            },
            {
            "value": 387.35,
            "code": "ri"
            }
        ],
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
      }]
    };
    this.top_location_chart = new MapChart({ 
      series: [{
        chart : {
          map : country_data
        },
        title: {
          text: 'Highmaps basic demo'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          min: 0
        },
        data: [
          {
            "value": 438,
            "code": "nj"
            },
            {
            "value": 387.35,
            "code": "ri"
            }
        ],
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
      }]
     });
  }
}
