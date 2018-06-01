import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myProfile',
  templateUrl: './myProfile.component.html',
  styleUrls: []
})
export class MyProfileComponent implements OnInit {
  
  tab_cnt : Number = 1;
  userdata : any = {};
  constructor() {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.artist) {
      this.userdata = data['artist'];
    } else {
      this.userdata = data['user'];
    }
  }

  ngOnInit() {
  }

  tabChange(cnt : Number) {
    this.tab_cnt = cnt;
  }
}
