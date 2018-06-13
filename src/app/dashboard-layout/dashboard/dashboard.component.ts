import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images: any = [];
  data : any = {
    finalist : [],
    new_uploads : []
  };
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  music_type_index : any = -1;
  music_type_list : any = [];
  search_str : any = '';
  constructor(
    private DashboardService : DashboardService,
    private toastr: ToastrService
  ) { 
    this.getAllData({});
    this.getAllMusicType();
  }

  ngOnInit() {
      
  }

  onChange(index: any) {
    console.log(this.images[index]);
    if (this.images[index]['enable']) {
      this.images[index]['enable'] = false;
    } else {
      this.images[index]['enable'] = true;
    }
  }

  getDataByMusicType(obj : any, index : any) {
    this.music_type_index = index;
    this.getAllData(obj);
  }
  // Get all whatsnew data
  getAllData(data : any) {
    this.DashboardService.getAllData(data).subscribe(response => {
      this.data = response;
      this.InitializeSider(this.data['finalist']);
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
  // Initialize slider
  InitializeSider(data : any) {
    this.images = [];
    data.forEach(ele => {
      this.images.push({
        "source": ele.image ? this.track_url+ele.image : 'img/finalist1.png',
        "alt": "",
        "title": ele.name,
        "name": ele.artist_id['first_name']+' '+ele.artist_id['last_name'],
        "location": "Title 1",
        "type": ele.music_type['name'],
        "alias" : ele.music_type['alias'],
        "audio" : ele.audio,
        "enable": true
      });
    });
  }
  // Get All music type
  getAllMusicType() {
    this.DashboardService.getAllMusicType().subscribe(response => {
      this.music_type_list = response['music'];
    });
  }
   // Fiter
   filter(e :  any){
    if(e.keyCode == 13)  {
      let data = {
        search : this.search_str,
        music_type : this.music_type_index != -1 ?  this.music_type_list[this.music_type_index]._id : ''
      };
      this.getAllData(data);
    }
  }
}