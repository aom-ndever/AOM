import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { element } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
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
  toggFleilter : boolean = false;
  toggSearch : boolean = false;
  search_str : any = '';
  subscription: Subscription;
  constructor(
    private DashboardService : DashboardService,
    private toastr: ToastrService,
    private MessageService : MessageService
  ) { 
    this.getAllData({});
    this.getAllMusicType();
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['list'] != 2) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
      }
      if(response && response['action'] == 'stop' && response['list'] == 2) {
        this.audio_ins[response['index']] = false;
      }
      if(response && response['action'] == 'start' && response['list'] == 2) {
        this.audio_ins[response['index']] = true;
      }
      if(response && response['list'] == 2 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
          this.audio_ins[response['index']] = true;
        }
      }
    });
  }

  ngOnInit() {
      console.log('Dashboard componenet is running');
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
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

  toggleFilter() {
    this.toggFleilter = !this.toggFleilter;
  }

  toggleSearch() {
    this.toggSearch = !this.toggSearch;
  }


  // Get all whatsnew data
  getAllData(data : any) {
    this.audio_ins = [];
    this.DashboardService.getAllData(data).subscribe(response => {
      this.data = response;
      response['new_uploads'].forEach((ele) => {
        this.audio_ins.push(false);
      });
      this.InitializeSider(this.data['finalist']);
    });
  }
  // Play audio
  playAudio(name : any, index : any, data : any){
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 2});
    
  }
  // Stop audio
  stopAudio(index, data : any) {
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 2});
    
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
        "location": ele && ele['state']['name'] ? ele['state']['name'] : '',
        "type": ele.music_type['name'],
        "alias" : ele.music_type['alias'],
        "audio" : ele.audio,
        "enable": true,
        "artist_id" : ele['artist_id'] ? ele['artist_id']['_id'] : null
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