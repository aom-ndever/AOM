import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './myProfile.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-myProfile',
  templateUrl: './myProfile.component.html',
  styleUrls: []
})
export class MyProfileComponent implements OnInit {
  show_spinner : boolean = false;
  tab_cnt : Number = 1;
  userdata : any = {
    day : '',
    month : '',
    year : ''
  };
  public day : any = [];
  public month : any = [];
  public year : any = [];
  music_types : any = [];
  constructor(private MyProfileService : MyProfileService, private toastr: ToastrService) {
    let data = JSON.parse(localStorage.getItem('user'));
    this.day = [];
    this.month = [];
    this.year = [];
    for(let i = 1; i<= 31; i++ ) {
      this.day.push(i);
    }
    for(let i = 1; i<= 12; i++ ) {
      this.month.push(i);
    }
    for(let i = 1900; i<= (new Date()).getFullYear(); i++ ) {
      this.year.push(i);
    }
    if(data && data.artist) {
      this.userdata = {...data['artist']};
      this.userdata['type'] = 'artist';
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth() + 1;
        this.userdata['year'] = dt.getFullYear();
      }
    } else {
      this.userdata = {...data['user']};
      this.userdata['type'] = 'user';
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth() + 1;
        this.userdata['year'] = dt.getFullYear();
      }
    }
    this.MyProfileService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
    });
  }

  ngOnInit() {
  }

  tabChange(cnt : Number) {
    this.tab_cnt = cnt;
  }

  // Update user profile
  update() {
    if(this.userdata.type == 'artist') {
      this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
      this.userdata['share_url'] = this.userdata['social_media'];
      this.MyProfileService.updateArtistProfile(this.userdata).subscribe(response => {
        console.log(response);
        this.toastr.success(response['message'], 'Success!');
        this.MyProfileService.getArtistById().subscribe(res => {
          console.log('artist', res);
          let data = JSON.parse(localStorage.getItem('user'));
          data['artist'] = res['artist'];
          localStorage.setItem('user', JSON.stringify(data));
        });
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.show_spinner = true;
      this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
      this.MyProfileService.updateUserProfile(this.userdata).subscribe(response => {
        console.log(response);
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
  }
}
