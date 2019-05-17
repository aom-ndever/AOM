import { Component, OnInit, OnDestroy } from '@angular/core';
import { WhatsNewService } from './whatsnew.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../src/environments/environment';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: []
})
export class WhatsNewComponent implements OnInit, OnDestroy {

  images: any = [];
  show_filter: any = false;
  whatsnewdata: any = {
    artist: [],
    track: []
  };
  state_list: any = [];
  region_filter: any = [];
  show_loader: boolean = false;
  feature_loader: boolean = false;
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  search_str: any = '';
  advance_filter: any = {};
  audio_ins: any = [];
  music_type_list: any = [];
  subscription: Subscription;
  featured_artist: any = [];
  artist_list: any = [];
  track_list: any = [];
  artist_start: any = 0;
  artist_loader: boolean = false;
  track_start: any = 0;
  track_loader: boolean = false;
  length: any = 10;
  constructor(private WhatsNewService: WhatsNewService,
    private toastr: ToastrService,
    private MessageService: MessageService,
    private titleService: Title,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    window.scroll(0, 0);
    this.titleService.setTitle(this.route.snapshot.data['title']);

    this.images = [
      {
        'source': 'img/whats-new-bg.png',
        'alt': 'Description for Image 1',
        'title': 'Quarter Final',
        'name': 'Title 1',
        'location': 'Title 1',
        'type': 'Title 1',
        'description': 'Ut enim ad minim veniam',
        'enable': true
      },
      {
        'source': 'img/whats-new-bg.png',
        'alt': 'Description for Image 2',
        'title': 'Quarter Final',
        'name': 'Title 1',
        'location': 'Title 1',
        'type': 'Title 1',
        'description': 'Ut enim ad minim veniam',
        'enable': true
      },
      {
        'source': 'img/whats-new-bg.png',
        'alt': 'Description for Image 3',
        'title': 'Quarter Final',
        'name': 'Title 1',
        'location': 'Title 1',
        'type': 'Title 1',
        'description': 'Ut enim ad minim veniam',
        'enable': true
      }];
    this.getAllState();
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if (response && response['list'] != 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
      }
      if (response && response['action'] == 'stop' && response['list'] == 1) {
        this.audio_ins[response['index']] = false;
      }
      if (response && response['action'] == 'start' && response['list'] == 1) {
        this.audio_ins[response['index']] = true;
      }
      if (response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev') {
        if (response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
          this.audio_ins[response['index']] = true;
        }
      }
      if (response && response['action'] == 'bottom_play' && response['list'] == 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
        this.audio_ins[response['index']] = true;
      }
    });
  }

  ngOnInit() {
    this.ngxService.start();
    this.getAllData();
    this.getAllMusicType();
    this.getAllFeaturedArtist({});
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }

  // Get all whatsnew data
  getAllData() {
    // let data = {
    //   "filter" : []
    // };

    // data['filter'].push({
    //   'field' : 'music_type', value :  this.advance_filter.music_type ? this.advance_filter.music_type : ''
    // });
    let data = {
      music_type: this.advance_filter.music_type ? this.advance_filter.music_type : '',
      start: 0,
      length: this.length
    };
    // data['music_type'] = this.advance_filter.music_type ? this.advance_filter.music_type : '';

    this.audio_ins = [];
    this.show_loader = true;
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      this.ngxService.stop();
      this.whatsnewdata = response;
      console.log('this.whatsnewdata => ', this.whatsnewdata);
      this.artist_list = response['artist'];
      this.track_list = response['track'];
      console.log('this.track_list => ', this.track_list);
      this.show_loader = false;
      if (this.whatsnewdata['track']) {
        this.whatsnewdata['track'].forEach((ele) => {
          this.audio_ins.push(false);
        });
      }
      this.getAllFollower();
    });

  }
  // Get all featured artist
  getAllFeaturedArtist(data) {
    this.feature_loader = true;
    this.WhatsNewService.getAllFeaturedArtist(data).subscribe((response) => {
      console.log('third => ');
      this.featured_artist = response['artist'];
      console.log(this.featured_artist);
      this.feature_loader = false;
    });
  }
  // Play audio
  playAudio(name: any, index: any, data: any) {
    // let audio = new Audio();
    // audio.src = this.track_url+name;
    // audio.load();
    // audio.play();
    // if(!this.audio_ins.hasOwnProperty(index)) {
    //   this.audio_ins[index] = audio;
    // }
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.MessageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
  }
  // Stop audio
  stopAudio(index, data: any) {
    // console.log(this.audio_ins[index]);
    // this.audio_ins[index].pause();
    // this.audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.audio_ins[index];
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
  }
  // Filter result
  filter(e: any) {
    // if (e.keyCode == 13) {
    if (this.search_str.trim().length > 0) {
      let data = {
        search: this.search_str.trim(),
        start: 0,
        length: this.length
      };
      this.artist_start = 0;
      this.track_start = 0;
      this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
        this.whatsnewdata = response;
        this.artist_list = response['artist'];
        this.track_list = response['track'];
        this.getAllFollower();
      });
      this.getAllFeaturedArtist(data);
    }
  }
  // Add region for filtering
  addRegionForFilter(flag: any, val: any) {
    if (flag) {
      this.region_filter.push(val);
    } else {
      let index = this.region_filter.indexOf(val);
      this.region_filter.splice(index, 1);
    }
  }
  // Advance filter
  advanceFilter() {
    let data = {
      start: 0,
      length: this.length
    };
    this.artist_start = 0;
    this.track_start = 0;

    data['music_type'] = this.advance_filter && this.advance_filter.music_type ? this.advance_filter.music_type : '';

    if (this.region_filter.length > 0) {
      // data['filter'].push({
      //   'field' : 'state', value :  this.region_filter
      // });
      data['state'] = this.region_filter;
    }
    this.show_filter = false;
    this.show_loader = true;
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      this.whatsnewdata = response;
      this.artist_list = response['artist'];
      this.track_list = response['track'];
      this.getAllFollower();
      this.show_loader = false;

    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    });
    this.getAllFeaturedArtist(data);
  }
  // Get all music type
  getAllMusicType() {
    this.WhatsNewService.getAllMusicType().subscribe(response => {
      console.log('second => ');
      this.music_type_list = response['music'];
    });
  }
  // Follow artist
  followArtist(id: any, index: any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if (data && data.user) {
      let data = {
        artist_id: id
      };
      this.WhatsNewService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
        this.getAllFollower();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login first to follow the artist.', 'Information!');
    }
  }
  // get All follower
  getAllFollower() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user['user']) {
      this.WhatsNewService.getFollower().subscribe(response => {

        this.artist_list.forEach((ele) => {
          if (response['artist'] && response['artist'].indexOf(ele['_id']) != -1) {
            ele['is_followed'] = true;
          } else {
            ele['is_followed'] = false;
          }
        });
        this.featured_artist.forEach((ele) => {
          if (response['artist'] && response['artist'].indexOf(ele['_id']) != -1) {
            ele['is_followed'] = true;
          } else {
            ele['is_followed'] = false;
          }
        });
      });
    }
  }
  // get all state
  getAllState() {
    this.WhatsNewService.getAllState().subscribe((response) => {
      this.state_list = response['state'];
    });
  }
  // Load more artist
  loadMoreArtist() {
    this.artist_start = this.artist_start + this.length;
    let data = {
      start: this.artist_start,
      length: this.length
    };
    this.artist_loader = true;
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      // this.whatsnewdata = response;
      this.artist_list = [...this.artist_list, ...response['artist']];
      this.getAllFollower();
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    }, () => {
      this.artist_loader = false;
    });
  }
  // Load more track
  loadMoreTrack() {
    this.track_start = this.track_start + this.length;
    let data = {
      start: this.track_start,
      length: this.length
    };
    this.track_loader = true;
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      // this.whatsnewdata = response;
      this.track_list = [...this.track_list, ...response['track']];
      this.getAllFollower();
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    }, () => {
      this.track_loader = false;
    });
  }
}
