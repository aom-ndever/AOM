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
      });
    }
  }
  // Advance filter
  advanceFilter() {
    this.WhatsNewService.getWhatsnewData(this.advance_filter).subscribe(response => {
      this.whatsnewdata = response;
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
}
