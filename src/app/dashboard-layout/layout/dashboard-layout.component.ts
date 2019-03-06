import { Component, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../shared/message.service';
import { DashboardLayoutService } from './dashboard-layout.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
declare var FB: any;
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  audio_list: any = [
    this.track_url + "/audio_152939725821967008.mp4",
    this.track_url + "/audio_152940920498523176.mp4",
    this.track_url + "/audio_152940899013172582.mp4"
  ];
  show_spinner: boolean = false;
  user: any = '';
  audio_instance_list: any = [];
  timeline: any = '';
  playhead: any = '';
  pButton: any = '';
  timelineWidth: any = '';
  audio_ins: any = '';
  onplayhead: boolean = false;
  duration: any = '';
  song_cnt: any = 0;
  total_time: any = 0;
  list_no: any = '';
  subscription: Subscription;
  user_img_url: any = environment.API_URL + environment.USER_IMG;
  private modalRef: NgbModalRef;
  private emailmodalRef: NgbModalRef;
  private phonemodalRef: NgbModalRef;
  share_form: FormGroup;
  share_form_phone: FormGroup;
  share_form_validation: boolean = false;
  share_data: any = {};
  constructor(
    private MessageService: MessageService,
    private DashboardLayoutService: DashboardLayoutService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    console.log("dashboard component");
    this.audio_instance_list = [];
    this.audio_list = [];
    console.log('ocalStorage.getIte====>', localStorage.getItem('user'));
    let localuser = localStorage.getItem('user');
    this.user = JSON.parse(localuser);
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      console.log(response);
      if (response['action'] == 'start') {
        this.audio_list = response['data'];
        response['data'].forEach((ele) => {
          let audio = new Audio();
          audio.src = ele['audio'] ? this.track_url + '/' + ele['audio'] : '';
          audio.load();
          this.audio_instance_list.push(audio);
          audio.addEventListener('timeupdate', this.timeUpdate, false);
          audio.addEventListener("canplaythrough", () => {
            this.duration = audio.duration;
            // this.total_time = this.format_seconds(this.duration);
            // this.dur_sec = this.duration - this.dur_min * 60;
          }, false);
        });

      }
      this.list_no = response['list'];
      if (response['action'] == 'start') {
        this.song_cnt = response['index'];
        if (this.audio_ins) {
          this.audio_ins.currentTime = 0;
          this.audio_ins.pause();
          this.total_time = "0:0";
        }
        this.play();
      } else if (response['action'] == 'stop') {
        var pButton = document.getElementById('pButton');
        pButton.className = "";
        pButton.className = "play";
        if (this.audio_ins) {
          this.audio_ins.currentTime = 0;
          this.audio_ins.pause();
        }
      }
    });
    this.share_form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.share_form_phone = this.fb.group({
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
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
    if (this.modalRef) {
      this.modalRef.close();
    }
    if (this.emailmodalRef) {
      this.emailmodalRef.close();
    }
    if (this.phonemodalRef) {
      this.phonemodalRef.close();
    }
  }

  openShareTrackModel(content) {
    this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
  }
  openEmailShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via email', 'Information!');
    }
  }
  openPhoneShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via sms', 'Information!');
    }
  }

  play() {
    try {
      var pButton = document.getElementById('pButton');
      this.audio_ins = this.audio_instance_list[this.song_cnt];
      if (pButton.className == "play") {
        this.MessageService.sendMessage({ index: this.song_cnt, action: 'bottom_play', list: this.list_no });
      }
      if (this.audio_instance_list[this.song_cnt] && this.audio_instance_list[this.song_cnt].paused) {
        let playPromise = this.audio_instance_list[this.song_cnt].play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Automatic playback started!
          }).catch((error) => {
            this.toastr.info('This audio type is not supported in this browser.', 'Information!');
            this.audio_instance_list[this.song_cnt].pause();
            this.MessageService.sendMessage({ index: this.song_cnt, action: 'stop', list: this.list_no });
            pButton.className = "";
            pButton.className = "play";
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
          });
        }
        pButton.className = "";
        pButton.className = "pause";
      } else {
        this.audio_instance_list[this.song_cnt].pause();
        this.MessageService.sendMessage({ index: this.song_cnt, action: 'stop', list: this.list_no });
        pButton.className = "";
        pButton.className = "play";
      }
    } catch (err) {
      console.log(err);
    }

  }

  timeUpdate($event: any) {
    var pButton = document.getElementById('pButton');
    var nprogres = document.getElementById('song_prog');
    var playPercent = (100 * $event.target.currentTime / $event.target.duration);
    nprogres.setAttribute('value', $event.target.currentTime);
    // nprogres['value'] = $event.target.currentTime;
    nprogres.setAttribute('max', $event.target.duration);
    // nprogres['max'] = $event.target.duration;
    var minutes = Math.floor($event.target.currentTime / 60);
    var seconds = $event.target.currentTime - minutes * 60;
    var running_time = document.getElementById('running_time');
    running_time.innerHTML = minutes + ':' + Math.round(seconds);
    minutes = Math.floor($event.target.duration / 60);
    seconds = $event.target.duration - minutes * 60;
    var total_time = document.getElementById('total_time');
    var str = ((isNaN(minutes) ? 0 : minutes) + ':' + (isNaN(seconds) ? 0 : Math.round(seconds)));
    console.log('total_time', str);
    total_time.innerHTML = str.toString();

    if ($event.target.currentTime == $event.target.duration) {
      // this.next();          
      pButton.className = "";
      pButton.className = "play";
    }
  }

  next() {
    if (this.audio_instance_list[this.song_cnt]) {
      this.audio_instance_list[this.song_cnt].pause();
      this.audio_instance_list[this.song_cnt].currentTime = 0;
    }
    let cnt = this.song_cnt + 1;
    if (cnt <= (this.audio_instance_list.length - 1))
      this.song_cnt = cnt;
    else
      this.song_cnt = this.audio_instance_list.length - 1;
    var pButton = document.getElementById('pButton');
    if (pButton.className == 'pause') {
      this.MessageService.sendMessage({ index: this.song_cnt, action: 'next', track_action: 'pause', list: this.list_no });
      this.play();
    }
  }

  prev() {
    if (this.audio_instance_list[this.song_cnt]) {
      this.audio_instance_list[this.song_cnt].pause();
      this.audio_instance_list[this.song_cnt].currentTime = 0;
    }
    let cnt = this.song_cnt - 1;
    if (cnt > 0)
      this.song_cnt = cnt;
    else
      this.song_cnt = 0;
    var pButton = document.getElementById('pButton');
    if (pButton.className == 'pause') {
      this.MessageService.sendMessage({ index: this.song_cnt, action: 'prev', track_action: 'pause', list: this.list_no });
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

  mangeVolumn(e: any) {
    this.audio_ins.volume = e.target.value / 100;
  }

  manageProgress(e: any) {
    this.audio_ins.removeEventListener('timeupdate', this.timeUpdate, false);
    console.log('prog => ', e.target.value);
    var nprogres = document.getElementById('song_prog');
    var minutes = Math.floor(e.target.value / 60);
    var seconds = e.target.value - minutes * 60;
    var running_time = document.getElementById('running_time');
    setTimeout(() => {
      nprogres['value'] = e.target.value;
      this.audio_ins['currentTime'] = e.target.value;
      running_time.innerHTML = minutes + ':' + Math.round(seconds);
    }, 500);
  }

  downloadTrack() {
    console.log(this.audio_list[this.song_cnt]);
    if (this.user) {
      this.DashboardLayoutService.downloadTrack(this.audio_list[this.song_cnt]['_id']).subscribe((response) => {
        if (response['message']) {
          this.toastr.info(response['message'], 'Info!');
        }
        if (response['filename']) {
          window.location.href = this.user_img_url + response['filename'];
        }
      });
    } else {
      this.toastr.info('Login first to download the track.', 'Information!');
    }

  }

  // share on facebook
  shareOnFacebook() {
    let track = this.audio_list[this.song_cnt];
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = "Track Name: " + track.name + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track.description;
    // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
    // if(facebookWindow.focus) { facebookWindow.focus(); }
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          'og:url': url,
          'og:title': 'AOM',
          'og:description': str
        }
      })
    }, function (response) { });
  }
  // share on twitter
  shareOnTwitter() {
    let track = this.audio_list[this.song_cnt];
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = "Track Name: " + track.name + "\nArtist: " + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track.description;
    var twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
  }
  // share track via email
  share_via_email(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      let track = this.audio_list[this.song_cnt];
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        email: this.share_data['email'],
        track_id: track['_id'],
        url: url
      };
      this.DashboardLayoutService.shareTrackViaEmail(data).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!');
        this.emailmodalRef.close();
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.share_form_validation = !flag;
    }
  }
  // share via sms
  share_via_sms(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      let track = this.audio_list[this.song_cnt];
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        phone_no: this.share_data['phone_no'],
        track_id: track['_id'],
        url: url
      };
      this.DashboardLayoutService.shareTrackViaSms(data).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!');
        this.emailmodalRef.close();
        this.share_data = {};
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.share_form_validation = !flag;
    }
  }
  // copy share track link
  copy_link() {
    let track = this.audio_list[this.song_cnt];
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    var textArea = document.createElement("textarea");
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
}
