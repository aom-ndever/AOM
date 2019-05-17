import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../src/environments/environment';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { element } from '../../../../node_modules/protractor';
import * as socketClient from 'socket.io-client';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  images: any = [];
  data: any = {
    finalist: [],
    new_uploads: []
  };
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  audio_ins: any = [];
  music_type_index: any = -1;
  music_type_list: any = [];
  toggFleilter: boolean = false;
  toggSearch: boolean = false;
  show_loader: boolean = false;
  search_str: any = '';
  private socket;
  user: any;

  subscription: Subscription;
  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService,
    private MessageService: MessageService,
    private ngxService: NgxUiLoaderService
  ) {
    this.ngxService.start();
    this.getAllData({});
    this.getAllMusicType();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if (response && response['list'] !== 2) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
      }
      if (response && response['action'] === 'stop' && response['list'] === 2) {
        this.audio_ins[response['index']] = false;
      }
      if (response && response['action'] === 'start' && response['list'] === 2) {
        this.audio_ins[response['index']] = true;
      }
      if (response && response['list'] === 2 && response['action'] === 'next' || response['action'] === 'prev') {
        if (response['track_action'] && response['track_action'] === 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
          this.audio_ins[response['index']] = true;
        }
      }
      if (response && response['action'] === 'bottom_play' && response['list'] === 2) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
        this.audio_ins[response['index']] = true;
      }
    });
  }

  ngOnInit() {
    this.socket = socketClient(environment.socketUrl);
    this.socket.emit('join', this.user.token);
    this.socket.on('receive_artist_notification_count', (data) => {
      console.log('socket data', data);
      this.MessageService.checkCount(data);
    });
    console.log('Dashboard componenet is running');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onChange(index: any) {
    if (this.images[index]['enable']) {
      this.images[index]['enable'] = false;
    } else {
      this.images[index]['enable'] = true;
    }
  }

  getDataByMusicType(obj: any, index: any) {
    this.music_type_index = index;
    this.getAllData(obj);
  }

  toggleFilter() {
    this.toggFleilter = !this.toggFleilter;
  }

  toggleSearch() {
    this.toggSearch = !this.toggSearch;
  }


  // Get all whatsnew data
  getAllData(data: any) {
    this.audio_ins = [];
    this.MessageService.sendMessage({ 'music_flag': 'yes' });
    this.show_loader = true;
    this.DashboardService.getAllData(data).subscribe(response => {
      this.data = response;
      this.ngxService.stop();
      response['new_uploads'].forEach((ele) => {
        this.audio_ins.push(false);
      });
      this.InitializeSider(this.data['finalist']);
    }, (error) => {
      this.show_loader = false;
    }, () => {
      this.show_loader = false;
    });
  }
  // Play audio
  playAudio(name: any, index: any, data: any) {
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 2 });

  }
  // Stop audio
  stopAudio(index, data: any) {
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 2 });

  }
  // Initialize slider
  InitializeSider(data: any) {
    this.images = [];

    data.forEach(ele => {
      this.images.push({
        'source': ele.image ? this.track_url + ele.image : 'img/default_img.png',
        'alt': '',
        'title': ele.name,
        'name': ele.artist_id['first_name'] + ' ' + ele.artist_id['last_name'],
        'location': ele && ele['state']['name'] ? ele['state']['name'] : '',
        'type': ele.music_type['name'],
        'alias': ele.music_type['alias'],
        'audio': ele.audio,
        'enable': true,
        'artist_id': ele['artist_id'] ? ele['artist_id']['_id'] : null
      });
    });
    this.getAllFollower();
    this.MessageService.sendMessage({ 'music_flag': 'no' });
  }
  // Get All music type  
  getAllMusicType() {
    this.DashboardService.getAllMusicType().subscribe(response => {
      this.music_type_list = response['music'];
    });
  }
  // Fiter
  filter(e: any) {
    // if (e.keyCode == 13) {
    if (this.search_str.trim().length > 0) {
      let data = {
        search: this.search_str.trim(),
        music_type: this.music_type_index !== -1 ? this.music_type_list[this.music_type_index]._id : ''
      };
      this.getAllData(data);
    }
  }
  // get All follower
  getAllFollower() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user['user']) {
      this.DashboardService.getFollower().subscribe(response => {
        this.images.forEach((ele) => {
          if (response['artist'] && response['artist'].indexOf(ele['artist_id']) !== -1) {
            ele['is_followed'] = true;
          } else {
            ele['is_followed'] = false;
          }
        });
      });
    }
  }
}
