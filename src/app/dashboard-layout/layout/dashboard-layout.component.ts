import { Component, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment' ;
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../shared/message.service';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_list : any = [
    this.track_url+"/audio_152939725821967008.mp4",
    this.track_url+"/audio_152940920498523176.mp4",
    this.track_url+"/audio_152940899013172582.mp4"
  ];
  audio_instance_list : any = [];
  timeline : any = '';
  playhead : any = '';
  pButton : any = '';
  timelineWidth : any = '';
  audio_ins : any = '';
  onplayhead : boolean = false;
  duration : any = '';
  song_cnt : any = 0;
  total_time : any = 0;
  subscription: Subscription;
  constructor(
    private MessageService : MessageService
  ) {
    console.log("dashboard component");
    this.audio_instance_list = [];
    this.audio_list = [];
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      console.log(response);
      if(response['action'] == 'start') {
        this.audio_list = response['data'];
        response['data'].forEach((ele) => {
          let audio = new Audio();
          audio.src = this.track_url+'/'+ele['audio'];
          audio.load();
          this.audio_instance_list.push(audio);
          audio.addEventListener('timeupdate', this.timeUpdate, false);
          audio.addEventListener("canplaythrough", () => {
              this.duration = audio.duration;
              this.total_time = this.format_seconds(this.duration);
              // this.dur_sec = this.duration - this.dur_min * 60;
          }, false);
        });
        
      } 
      if(this.audio_ins) {
        this.audio_ins.currentTime = 0;
        this.audio_ins.pause();
      }
      if(response['action'] == 'start') {
        this.song_cnt = response['index'];
        this.play();
      } else if (response['action'] == 'stop') {
        var pButton = document.getElementById('pButton');
        pButton.className = "";
        pButton.className = "play";
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

  ngAfterViewChecked() {
    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  play(){
    var pButton = document.getElementById('pButton');
    this.audio_ins = this.audio_instance_list[this.song_cnt];
    if(this.audio_instance_list[this.song_cnt] && this.audio_instance_list[this.song_cnt].paused) {
      this.audio_instance_list[this.song_cnt].play();
      pButton.className = "";
      pButton.className = "pause";
    } else {
      this.audio_instance_list[this.song_cnt].pause();
      this.MessageService.sendMessage({index : this.song_cnt, action : 'stop'});
      pButton.className = "";
      pButton.className = "play";
    }
  }

  timeUpdate($event : any) {
      var nprogres = document.getElementById('song_prog');
      var playPercent =  (100 * $event.target.currentTime / $event.target.duration);
      nprogres['value'] = $event.target.currentTime;
      nprogres['max'] = $event.target.duration;
      var minutes = Math.floor($event.target.currentTime / 60);
      var seconds = $event.target.currentTime - minutes * 60;
      var running_time = document.getElementById('running_time');
      running_time.innerHTML = minutes + ':' +Math.round(seconds);
      if ($event.target.currentTime == $event.target.duration) {
        this.next();          
      }
  }

  next() {
    if(this.audio_instance_list[this.song_cnt]) {
      this.audio_instance_list[this.song_cnt].pause();
      this.audio_instance_list[this.song_cnt].currentTime = 0;
    }
    let cnt = this.song_cnt + 1;
    if(cnt <= (this.audio_instance_list.length - 1) )
      this.song_cnt = cnt;
    else
      this.song_cnt = this.audio_instance_list.length - 1;
    if(this.pButton.className == 'pause') {
      this.play();
    } 
    
  }

  prev() {
    if(this.audio_instance_list[this.song_cnt]) {
      this.audio_instance_list[this.song_cnt].pause();
      this.audio_instance_list[this.song_cnt].currentTime = 0;
    }
    let cnt = this.song_cnt - 1;
    if(cnt > 0)
      this.song_cnt = cnt;
    else
      this.song_cnt = 0;
    if(this.pButton.className == 'pause') {
      this.play();
    }
  }

  pad(num, size) {
      var s = num + '';
      while (s.length < size) {
        s = '0' + s;
      }
      return s;
  }

 format_seconds(secs) {
      return Math.floor(secs / 60) + ':' + Math.round((+(this.pad(secs % 60, 2))));
  }

  mangeVolumn(e : any) {
    this.audio_ins.volume = e.target.value / 100;
  }

  manageProgress(e : any) {
    this.audio_ins.removeEventListener('timeupdate', this.timeUpdate, false);
    console.log('prog => ', e.target.value);
    var nprogres = document.getElementById('song_prog');
    var minutes = Math.floor(e.target.value / 60);
    var seconds = e.target.value - minutes * 60;
    var running_time = document.getElementById('running_time');
    setTimeout(() => {
      nprogres['value'] = e.target.value;
      this.audio_ins['currentTime'] = e.target.value;
      running_time.innerHTML = minutes + ':' +Math.round(seconds);
    }, 100);
  }
}
