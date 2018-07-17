import { Component, OnInit } from '@angular/core';
import { WhatsNewService } from './whatsnew.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: []
})
export class WhatsNewComponent implements OnInit {
  
  images: any = [];
  show_filter : any = false;
  whatsnewdata : any = {
    artist : [],
    track : []
  };
  state_list : any = [];
  region_filter : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  search_str : any = '';
  advance_filter : any = {};
  audio_ins : any = [];
  music_type_list : any = [];
  constructor(private WhatsNewService : WhatsNewService, private toastr: ToastrService) {
    this.images =  [
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 1",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      },
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 2",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      },
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 3",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      }];
    this.getAllState();
  }

  ngOnInit() {
    this.getAllData();
    this.getAllMusicType();
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  
  // Get all whatsnew data
  getAllData() {
    let data = {};
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      this.whatsnewdata = response;
      this.getAllFollower();
    });
  }
  // Play audio
  playAudio(name : any, index : any){
    let audio = new Audio();
    audio.src = this.track_url+name;
    audio.load();
    audio.play();
    if(!this.audio_ins.hasOwnProperty(index)) {
      this.audio_ins[index] = audio;
    }
  }
  // Stop audio
  stopAudio(index) {
    console.log(this.audio_ins[index]);
    this.audio_ins[index].pause();
    this.audio_ins[index].currentTime = 0;
    // this.audio_ins[index].stop();
    delete this.audio_ins[index];
  }
  // Filter result
  filter(e : any) {
    if(e.keyCode == 13) {
      let data = {
        search : this.search_str
      };
      this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
        this.whatsnewdata = response;
        this.getAllFollower();
      });
    }
  }
  // Add region for filtering
  addRegionForFilter(flag : any, val : any) {
    if(flag) {
      this.region_filter.push(val);
    } else {
      let index = this.region_filter.indxOf(val);
      this.region_filter.splice(index, 1);
    }
  }
  // Advance filter
  advanceFilter() {
    let data = {
      "filter" : []
    };
    if(this.advance_filter.music_type && this.advance_filter.music_type != "") {
      data['filter'].push({
        'field' : 'music_type', value :  this.advance_filter.music_type
      });
    }
    
    if(this.region_filter.length > 0) {
      data['filter'].push({
        'field' : 'state', value :  this.region_filter
      });
    }
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      this.whatsnewdata = response;
      this.getAllFollower();
      if(response['artist'].length <= 0)
        this.toastr.success('No result found.', 'Success!');
    }, error => {
      this.toastr.error(error['error'].message,'Error!');
    });
  }
  // Get all music type
  getAllMusicType() {
    this.WhatsNewService.getAllMusicType().subscribe(response => {
      this.music_type_list = response['music'];
    });
  }
  // Follow artist
  followArtist(id : any, index : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.user) {
      let data = {
        artist_id : id
      };
      this.whatsnewdata['artist'][index]['is_followed'] = true;
      this.WhatsNewService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.whatsnewdata['artist'][index]['is_followed'] = false;
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login first to follow the artist.', 'Information!');
    }
  }
  // get All follower
  getAllFollower() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.WhatsNewService.getFollower().subscribe(response => {
        let flag = false;
        this.whatsnewdata['artist'].forEach(obj => {
          response['user'].forEach(data => {
            if(obj._id == data['artist_id']._id) {
              flag = true;
            }
          });
          if(flag) {
            obj['is_followed'] = true;
          } else {
            obj['is_followed'] = false;
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
}
