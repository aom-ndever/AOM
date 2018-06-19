import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: []
})
export class ArtistComponent implements OnInit {
  artistdata : any = {
    artist : []
  };
  show_filter : any = false;
  search_str : any = '';
  adv_filter : any = {};
  artistv1 : any = {
    chart_toppers : [],
    rising_stars : []
  };
  music_list : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  constructor(
    private ArtistService : ArtistService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllData();
    this.getAllArtistV1Data({});
    this.getAllMusicType();
  }
  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  // Get all whatsnew data
  getAllData() {
    let data = {};
    this.ArtistService.getArtistData(data).subscribe(response => {
      this.artistdata = response;
      this.getAllFollower();
    });
  }
  // Get all artistv1 data
  getAllArtistV1Data(data) {
    this.ArtistService.getAllArtistv1(data).subscribe(response => {
      this.artistv1 = response;
      //this.getAllFollower();
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
  // Follow artist
  followArtist(id : any, index : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.user) {
      let data = {
        artist_id : id
      };
      this.artistdata['artist'][index]['is_followed'] = true;
      this.ArtistService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.artistdata['artist'][index]['is_followed'] = false;
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
      this.ArtistService.getFollower().subscribe(response => {
        let flag = false;
        this.artistdata['artist'].forEach(obj => {
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
  // Get all music list
  getAllMusicType() {
    this.ArtistService.getAllMusicType().subscribe(response => {
      this.music_list = response['music'];
    });
  }

  // filter artistv1
  filterArtistv1(e : any) {
    if(e.keyCode == 13) {
      let data = {
        search : this.search_str
      };
      this.getAllArtistV1Data(data);
    }
  }
  // advanceFilter
  advanceFilter() {
    let data = {
      music_type : this.adv_filter.music_type
    };
    this.getAllArtistV1Data(data);
  }
  
}
