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
      this.song_cnt = response['index'];
      this.play();
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.timeline = document.getElementById('timeline');
    this.playhead = document.getElementById('playhead');
    this.pButton = document.getElementById('pButton');
    this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;
    this.timeline.addEventListener("click", (event) => {
        this.moveplayhead(event);
        // if(this.audio_ins) {
        //   this.clickPercent(event);
        //   // this.audio_ins.currentTime = this.duration - this.clickPercent(event);
        // }
    }, false);
    this.playhead.addEventListener('mousedown', this.mouseDown, false);
    window.addEventListener('mouseup', this.mouseUp, false);
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
    // this.audio_instance_list[this.song_cnt].addEventListener('timeupdate', this.timeUpdate, false);
    if(this.audio_instance_list[this.song_cnt] && this.audio_instance_list[this.song_cnt].paused) {
      this.audio_instance_list[this.song_cnt].play();
      pButton.className = "";
      pButton.className = "pause";
    } else {
      this.audio_instance_list[this.song_cnt].pause();
      pButton.className = "";
      pButton.className = "play";
    }
  }

  timeUpdate($event : any) {
      var timeline = document.getElementById('timeline');
      var playhead = document.getElementById('playhead');
      var pButton = document.getElementById('pButton');
      var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
      var playPercent =  (100 * $event.target.currentTime / $event.target.duration);
      // var playPercent = timelineWidth * ($event.target.currentTime / $event.target.duration);

      var minutes = Math.floor($event.target.currentTime / 60);
      var seconds = $event.target.currentTime - minutes * 60;
      var running_time = document.getElementById('running_time');
      running_time.innerHTML = minutes + ':' +Math.round(seconds);
      var playhead = document.getElementById('playhead');
      playhead.style.width = playPercent + "%";
      if ($event.target.currentTime == $event.target.duration) {
          pButton.className = "";
          pButton.className = "play";
      }
  }
  // returns click as decimal (.77) of the total timelineWidth
  clickPercent(event) {
    var timeline = document.getElementById('timeline');
    var playhead = document.getElementById('playhead');
    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
    console.log(this.getPosition(timeline), timeline.offsetWidth, playhead.offsetWidth,  event.clientX, timelineWidth, this.duration);
    return (event.clientX - this.getPosition(timeline)) * 100 / this.duration;
  }
  getPosition(el) {
      return el.getBoundingClientRect().left;
  }
  moveplayhead(event) {
      // var timeline = document.getElementById('timeline');
      // var playhead = document.getElementById('playhead');
      var timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;
      var newMargLeft = (event.clientX - this.getPosition(this.timeline)) * 100 / this.getPosition(this.timeline);
      this.audio_ins.currentTime = (event.clientX - this.getPosition(this.timeline)) * 100 / this.duration;
      this.playhead.style.width = newMargLeft +'%';
      // var newMargLeft = event.clientX - this.getPosition(this.timeline);
      // console.log(event.clientX, this.getPosition(this.timeline));
      // if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
      //     this.playhead.style.width = newMargLeft+'%';
      // }
      // if (newMargLeft < 0) {
      //     this.playhead.style.width = "0";
      // }
      // if (newMargLeft > timelineWidth) {
      //     this.playhead.style.width =  "100%";
      // }
      console.log('xpos => ',newMargLeft, ' progress => ', this.playhead.offsetWidth);
      
      // if (newMargLeft >= 0 && this.playhead.offsetWidth > newMargLeft) {
      //     let progress_var = this.playhead.offsetWidth - newMargLeft;
      //     this.playhead.style.width = this.timeline.offsetWidth - (this.playhead.offsetWidth + newMargLeft )+'%';
      // } 
      // if(this.playhead.offsetWidth < newMargLeft) {
      //   let progress_var = this.playhead.offsetWidth - newMargLeft;
      //   this.playhead.style.width = this.timeline.offsetWidth - (this.playhead.offsetWidth - newMargLeft )+'%';
      // }

      // if(this.playhead.offsetWidth == newMargLeft) {
      //   this.playhead.style.width = '100%';
      // }

      // var tmp = 0;
      
  }
  mouseDown() {
      this.onplayhead = true;
      window.addEventListener('mousemove', this.moveplayhead, true);
      // if(this.audio_ins) {
      //   this.audio_ins.removeEventListener('timeupdate', this.timeUpdate, false);
      // }
  }
  mouseUp(event) {
      if (this.onplayhead == true) {
          this.moveplayhead(event);
          window.removeEventListener('mousemove', this.moveplayhead, true);
          // change current time
          // this.audio_ins.currentTime = this.clickPercent(event);
          // this.audio_ins.addEventListener('timeupdate', this.timeUpdate, false);
      }
      this.onplayhead = false;
  }

  next() {
    if(this.audio_instance_list[this.song_cnt]) {
      this.audio_instance_list[this.song_cnt].pause();
      this.audio_instance_list[this.song_cnt].currentTime = 0;
    }
    let cnt = this.song_cnt + 1;
    console.log(cnt, this.audio_instance_list.length);
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
}
