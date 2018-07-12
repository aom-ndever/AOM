import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { environment } from '../../../environments/environment' ;
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit, AfterViewChecked {
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
  constructor() {
    console.log("dashboard component");
    this.audio_instance_list = [];
    this.audio_list.forEach((ele) => {
      let audio = new Audio();
      audio.src = ele;
      audio.load();
      this.audio_instance_list.push(audio);
      audio.addEventListener('timeupdate', this.timeUpdate, false);
      audio.addEventListener("canplaythrough", () => {
          this.duration = audio.duration;
      }, false);
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
        if(this.audio_ins) {
          this.audio_ins.currentTime = this.duration * this.clickPercent(event);
        }
    }, false);
    this.playhead.addEventListener('mousedown', this.mouseDown, false);
    window.addEventListener('mouseup', this.mouseUp, false);
  }

  ngAfterViewChecked() {
    
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
      var playPercent = timelineWidth * ($event.target.currentTime / $event.target.duration);
      var playhead = document.getElementById('playhead');
      playhead.style.paddingLeft = playPercent + "px";
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
    return (event.clientX - this.getPosition(timeline)) / timelineWidth;
  }
  getPosition(el) {
      return el.getBoundingClientRect().left;
  }
  moveplayhead(event) {
      // var timeline = document.getElementById('timeline');
      // var playhead = document.getElementById('playhead');
      var timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;
      var newMargLeft = event.clientX - this.getPosition(this.timeline);

      if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
          this.playhead.style.paddingLeft = newMargLeft + "px";
      }
      if (newMargLeft < 0) {
          this.playhead.style.paddingLeft = "0px";
      }
      if (newMargLeft > timelineWidth) {
          this.playhead.style.paddingLeft = timelineWidth + "px";
      }
  }
  mouseDown() {
      this.onplayhead = true;
      window.addEventListener('mousemove', this.moveplayhead, true);
      if(this.audio_ins) {
        this.audio_ins.removeEventListener('timeupdate', this.timeUpdate, false);
      }
  }
  mouseUp(event) {
      if (this.onplayhead == true) {
          this.moveplayhead(event);
          window.removeEventListener('mousemove', this.moveplayhead, true);
          // change current time
          this.audio_ins.currentTime = this.duration * this.clickPercent(event);
          this.audio_ins.addEventListener('timeupdate', this.timeUpdate, false);
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
}
