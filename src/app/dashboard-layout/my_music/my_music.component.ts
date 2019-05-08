import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MyMusicService } from './my_music.service';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var FB: any;

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-music',
  templateUrl: './my_music.component.html',
  styleUrls: []
})
export class MyMusicComponent implements OnInit, OnDestroy {
  public contestid;
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  contesttrack_data: any = {};
  standard_data: any = {};
  show_filter: boolean = false;
  tab_cnt: Number = 1;
  modal_ref: NgbModalRef;
  audio_file: any = '';
  image_upload: any = '';
  edit_image: any = 'img/profile-img.png';
  trackdata: any = {};
  tracklist: any = [];
  show_spinner: boolean = false;
  audio_ins: any = [];
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  userinfo: any = '';
  music_type_list: any = [];
  contest_list: any = [];
  // contest_id: any = '';
  add_track_img: any = '';
  add_track_audio: any = '';
  subscription: Subscription;
  private modalRef: NgbModalRef;
  private emailmodalRef: NgbModalRef;
  private phonemodalRef: NgbModalRef;
  share_data: any = {};
  share_form: FormGroup;
  share_form_phone: FormGroup;
  share_form_validation: boolean = false;
  user: any = '';
  track_data: any = {};
  track_row_cnt = 1;
  public contestType;
  public submitContest;
  contesttrack_form: FormGroup;
  standard_form: FormGroup;
  special_form: FormGroup;
  closeResult: string;
  public contestDetail;

  constructor(
    private modalService: NgbModal,
    private MyMusicService: MyMusicService,
    private toastr: ToastrService,
    private MessageService: MessageService,
    private fb: FormBuilder,
    private titleService: Title,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    this.contesttrack_form = this.fb.group({
      contest_id: new FormControl(),
      round1_track: new FormControl(),
      round2_track: new FormControl(),
      round3_track: new FormControl(),
      final_track: new FormControl(),
      semi_final_track: new FormControl(),
    });
    this.standard_form = this.fb.group({
      scontest_id: new FormControl(),
      spreliminary1_track: new FormControl(),
      spreliminary2_track: new FormControl(),
      sround1_track: new FormControl(),
      sround2_track: new FormControl(),
      sround3_track: new FormControl(),
      sfinal_track: new FormControl(),
      ssemi_final_track: new FormControl(),
    });
    this.special_form = this.fb.group({
      special_contest_id: new FormControl(),
      special_round1_track: new FormControl(),
    });
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.userinfo = JSON.parse(localStorage.getItem('user'));
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if (response && response['list'] !== 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
      }
      if (response && response['action'] === 'stop' && response['list'] === 1) {
        this.audio_ins[response['index']] = false;
      }
      if (response && response['action'] === 'start' && response['list'] === 1) {
        this.audio_ins[response['index']] = true;
      }
      if (response && response['list'] === 1 && response['action'] === 'next' || response['action'] === 'prev') {
        if (response['track_action'] && response['track_action'] === 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
          this.audio_ins[response['index']] = true;
        }
      }
      if (response && response['action'] === 'bottom_play' && response['list'] === 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
        this.audio_ins[response['index']] = true;
      }
    });
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching: false,
      ordering: false,
      lengthChange: false,
      responsive: true,
      language: {
        // 'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
        'processing': '',
      },
      ajax: (dataTablesParameters: any, callback) => {
        setTimeout(() => {
          that.audio_ins = [];
          that.MyMusicService.getAllTrack(dataTablesParameters).subscribe(response => {
            console.log('res', response);
            that.tracklist = response['track']['music'];
            that.tracklist.forEach((ele) => { that.audio_ins.push(false); });
            callback({
              recordsTotal: response['track']['recordsTotal'],
              recordsFiltered: response['track']['recordsTotal'],
              data: []
            });
            that.track_row_cnt = (dataTablesParameters['start'] + 1);
          });
        }, 0);

      },
      columns: [
        { data: '' },
        { data: '' },
        { data: '' },
        { data: '' },
        { data: '' },
        { data: '' },
        { data: '' }
      ]
    };
    this.share_form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.share_form_phone = this.fb.group({
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.ngxService.start();
    // this.getAllTrack();
    this.getAllMusicType();
    this.getAllContest();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  openShareTrackModel(content, index: any) {
    this.track_data = this.tracklist[index];
    this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
  }

  openEmailShareTrackModel(content) {
    if (this.userinfo) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via email', 'Information!');
    }
  }

  openPhoneShareTrackModel(content) {
    if (this.userinfo) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via sms', 'Information!');
    }
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }

  tabChanged(val: Number) {
    this.tab_cnt = val;
  }

  changeAudio(event: any) {
    const file = event.target.files[0];
    let flag;
    let res;
    let fr = new FileReader();
    fr.onload = (e: any) => {
      console.log('e', e);
      res = e.target.result;
      const uint = new Uint8Array(res.slice(0, 4));
      const bytes = [];
      uint.forEach((byte) => {
        bytes.push(byte.toString(16));
      });

      const hex = bytes.join('').toUpperCase();
      console.log('hex', hex);
      console.log('type', file.type);

      const allow_types = this.getMimetype(hex);

      if (allow_types.indexOf(file.type) === -1) {
        this.toastr.error('Invalid file format.', 'Error!');
        return false;
        // }
      } else {
        // const file = new Blob([new Uint8Array(res)], { type: binaryFileType });
        this.audio_file = file;
      }

    };
    fr.readAsArrayBuffer(file);
    // const allow_types = ["audio/aiff,audio/mp3,audio/wav,audio/flac"];
  }

  changeFile(event: any) {
    const file = event.target.files[0];
    console.log('change file', file);
    let flag;
    let res;
    let fr = new FileReader();
    fr.onload = (e: any) => {
      console.log('e', e);
      res = e.target.result;
      const uint = new Uint8Array(res.slice(0, 4));
      const bytes = [];
      uint.forEach((byte) => {
        bytes.push(byte.toString(16));
      });

      const hex = bytes.join('').toUpperCase();
      const allow_types = this.getImageMimetype(hex);
      // console.log(binaryFileType + ' ' + hex);
      // if (binaryFileType === 'Unknown filetype') {
      if (allow_types.indexOf(file.type) === -1) {
        console.log('1');
        this.toastr.error('Invalid file format.', 'Error!');
        return false;
        // }
      } else {
        // const file = new Blob([new Uint8Array(res)], { type: binaryFileType });
        this.image_upload = file;
      }

    };
    fr.readAsArrayBuffer(file);
    const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
  }

  changeTrackImage(event: any) {
    let file = event.target.files[0];
    if (event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if (allow_types.indexOf(file.type) === -1) {
        this.toastr.error('Invalid file format.', 'Error!');
        return false;
      }
      this.trackdata.image = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = {};
        let imageBuffer = e.target.result;
        this.edit_image = imageBuffer;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openModal(content) {
    this.trackdata = {};
    this.add_track_img = '';
    this.image_upload = '';
    this.edit_image = '';
    this.add_track_audio = '';
    this.modal_ref = this.modalService.open(content, { centered: true, windowClass: 'add-track-popup', backdrop: 'static' });
  }

  // open edit track model
  openEditTrackModal(content: any, obj: any) {
    this.trackdata = { ...obj };
    console.log(obj);
    if (!obj.description || obj.description === 'undefined') {
      this.trackdata['description'] = '';
    }
    if (obj.image) {
      this.edit_image = environment.API_URL + environment.ARTIST_TRACK + obj.image;
    } else {
      this.edit_image = 'img/profile-img.png';
    }
    this.modal_ref = this.modalService.open(content, { centered: true, backdrop: 'static', windowClass: 'add-track-popup' });
  }

  // Open contest modal
  openContestModal(content: any, obj: any) {
    this.trackdata = obj;
    // this.modal_ref = this.modalService.open(content, { centered: true, windowClass: 'new-add-track-popup', backdrop: 'static' });
    this.submitContest = this.modalService.open(content, { centered: true, windowClass: 'new-add-track-popup', backdrop: 'static' });
  }

  addContestTrack() {
    let Obj;
    if (this.contestType === 'beta') {
      Obj = {
        contest_id: this.contestid,
        round1_track: this.contesttrack_form.value.round1_track,
        round2_track: this.contesttrack_form.value.round2_track,
        round3_track: this.contesttrack_form.value.round3_track,
        semi_final_track: this.contesttrack_form.value.semi_final_track,
        final_track: this.contesttrack_form.value.final_track
      };
    } else if (this.contestType === 'standard') {
      Obj = {
        contest_id: this.contestid,
        preliminary2_track: this.standard_form.value.spreliminary1_track,
        preliminary3_track: this.standard_form.value.spreliminary2_track,
        round1_track: this.standard_form.value.sround1_track,
        round2_track: this.standard_form.value.sround2_track,
        round3_track: this.standard_form.value.sround3_track,
        semi_final_track: this.standard_form.value.ssemi_final_track,
        final_track: this.standard_form.value.sfinal_track
      };
    } else if (this.contestType === 'special') {
      Obj = {
        contest_id: this.contestid,
        round1_track: this.special_form.value.special_round1_track,
      };
    }
    this.show_spinner = true;
    this.MyMusicService.addContestTrack(Obj).subscribe(response => {

      this.toastr.success(response['message'], 'Success!');
      this.show_spinner = false;
      this.contestDetail.close();
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
      this.modal_ref.close();
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
      this.show_spinner = false;
    }, () => {
      this.show_spinner = false;
    });

  }

  addTrack() {
    let isWhitespace;
    let isValid;
    if (this.trackdata && this.trackdata.name) {
      isWhitespace = this.trackdata.name.trim().length === 0;
      isValid = !isWhitespace;
    }
    // if (flag == true) {
    console.log('this.audio_file => ', this.audio_file);
    if (this.trackdata && this.trackdata.name && isValid && this.trackdata.price && this.trackdata.price > 0 &&
      this.trackdata.price.toString().length <= 3 && this.audio_file && this.image_upload) {
      let formdata = new FormData();
      formdata.append('name', this.trackdata.name);
      formdata.append('price', this.trackdata.price);
      formdata.append('audio', this.audio_file);
      formdata.append('image', this.image_upload);
      formdata.append('description', this.trackdata.description);
      this.show_spinner = true;
      this.MyMusicService.addTrack(formdata).subscribe(response => {
        this.trackdata = {};
        this.audio_file = '';
        this.image_upload = '';
        this.add_track_img = '';

        this.toastr.success(response['message'], 'Success!');
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
        this.modal_ref.close();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else if (!this.audio_file) {
      this.toastr.error('Please select audio file', 'Error!');
    } else if (!this.image_upload) {
      this.toastr.error('Please select track image', 'Error!');
    } else if (!this.trackdata.name || !isValid) {
      this.toastr.error('Please enter track name', 'Error!');
    } else if (!this.trackdata.price) {
      this.toastr.error('Please enter track price', 'Error!');
    } else if (this.trackdata.price < 0) {

      this.toastr.error('Track price must be positive value.', 'Error!');
    }
    // else if (this.trackdata.price >= 100) {
    //   this.toastr.error('Track price must be in three digits', 'Error!');
    // }
    else if (this.trackdata.price.toString().length !== 3) {
      console.log(this.trackdata.price.toString().length);
      this.toastr.error('Track price must be in three digits', 'Error!');

    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
    //}

  }

  // Get all track
  getAllTrack() {
    this.audio_ins = [];
    // this.MyMusicService.getAllTrack().subscribe(response => {
    //   this.tracklist = response['track'];
    //   this.tracklist.forEach((ele) => {this.audio_ins.push(false);});
    // });
  }

  // Remove track by id
  removeTrack(id: any) {
    const thi = this;
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((flag) => {
      if (flag.value) {
        thi.MyMusicService.deleteTrackById(id).subscribe(response => {
          thi.toastr.success(response['message'], 'Success!');
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
          });
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
    });
  }

  // update track
  updateTrack() {
    let isWhitespace;
    let isValid;
    if (this.trackdata && this.trackdata.name) {
      isWhitespace = this.trackdata.name.trim().length === 0;
      isValid = !isWhitespace;
    }
    if (this.trackdata && this.trackdata.name && isValid && this.trackdata.price && this.trackdata.price > 0 &&
      this.trackdata.price.toString().length <= 3 && this.trackdata.image) {
      let formdata = new FormData();
      formdata.append('name', this.trackdata.name);
      formdata.append('price', this.trackdata.price);
      formdata.append('image', this.trackdata.image);
      formdata.append('description', this.trackdata.description);
      this.show_spinner = true;
      this.MyMusicService.updateTrack(formdata, this.trackdata._id).subscribe(response => {
        if (!response['track']['image']) {
          this.edit_image = 'img/profile-img.png';
        }
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
        this.toastr.success(response['message'], 'Success!');
        this.modal_ref.close();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else if (!this.trackdata.image) {
      this.toastr.error('Please select track image', 'Error!');
    } else if (!this.trackdata.name || !isValid) {
      this.toastr.error('Please enter track name', 'Error!');
    } else if (!this.trackdata.price) {
      this.toastr.error('Please enter track price', 'Error!');
    } else if (this.trackdata.price < 0) {
      this.toastr.error('Track price must be positive.', 'Error!');
    } else if (this.trackdata.price.toString().length !== 3) {
      this.toastr.error('Track price must be in three digits', 'Error!');

    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
  }

  // Remove track image
  removeTrackImage(id: any) {
    const thi = this;
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (flag) {
      if (flag.value) {
        thi.MyMusicService.deleteTrackImageById(id).subscribe(response => {
          thi.getAllTrack();
          thi.edit_image = 'img/profile-img.png';
          delete this.trackdata['image'];
          thi.toastr.success(response['message'], 'Success!');
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
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

  // Get all music type
  getAllMusicType() {
    this.MyMusicService.getAllMusicType().subscribe(response => {
      console.log('first => ');
      this.music_type_list = response['music'];
    });
  }

  // Get all contest
  getAllContest() {
    this.MyMusicService.getAllContest().subscribe(response => {
      console.log('second => ');
      this.contest_list = response['contest'];
      this.ngxService.stop();
    });
  }

  // Add a track to contest
  // addTrackToContest() {
  //   if (this.contest_id) {
  //     let data = {
  //       contest_id: this.contest_id,
  //       //track_id: this._id,
  //       preliminary1_track: this.preliminary1_track
  //     };
  //     this.show_spinner = true;
  //     this.MyMusicService.addTrackToContest(data).subscribe(response => {
  //       this.contest_id = '';
  //       this.modal_ref.close();
  //       this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.draw();
  //       });
  //       this.toastr.success(response['message'], 'Success!');
  //     }, error => {
  //       this.toastr.error(error['error'].message, 'Error!');
  //       this.show_spinner = false;
  //     }, () => {
  //       this.show_spinner = false;
  //     });
  //   } else {
  //     this.toastr.error('Please select at least one contest', 'Error!');
  //   }
  // }

  // Update download status
  updateTrackDownLoadStatus(id: any) {
    this.MyMusicService.trackDownload(id).subscribe(response => {
      this.toastr.success(response['message'], 'Success!');
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.draw();
      });
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }

  // share on facebook
  shareOnFacebook() {
    let track = this.track_data;
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = 'Track Name: ' + track['name'] + '\nArtist: ' +
      track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
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
    let track = this.track_data;
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = 'Track Name: ' + track['name'] + '\nArtist: ' +
      track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
    var twitterWindow = window.open('https://twitter.com/share?url=' +
      encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
  }

  // share track via email
  share_via_email(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      let track = this.track_data;
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        email: this.share_data['email'],
        track_id: track['_id'],
        url: url
      };
      this.MyMusicService.shareTrackViaEmail(data).subscribe((response) => {
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
      let track = this.track_data;
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        phone_no: this.share_data['phone_no'],
        track_id: track['_id'],
        url: url
      };
      this.MyMusicService.shareTrackViaSms(data).subscribe((response) => {
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
    let track = this.track_data;
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    var textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  getMimetype = (signature) => {
    switch (signature) {
      // case '89504E47':
      //   return 'image/png';
      // case '47494638':
      //   return 'image/gif';
      // case 'FFD8FFDB':
      // case 'FFD8FFE0':
      // case 'FFD8FFE1':
      //   return 'image/jpeg';
      // case '3C3F786D':
      //   return 'image/svg+xml';
      // case '00018':
      // case '0001C':
      // case '00020':
      //   return 'video/mp4';
      // case '1A45DFA3':
      //   return 'video/webm';
      case '4944333':
        return 'audio/mp3';
      case '464F524D':
        return 'audio/aiff';

      case '464F524D':
        return 'audio/x-aiff';

      case '52494646':
        return 'audio/wav';
      case '664C6143':
        return 'audio/flac';
      case 'FFF15080':
        return 'audio/vnd.dlna.adts';
      // case '4944333':
      //   return 'audio/mp3';
      // case '4357539':
      //   return 'application/x-shockwave-flash';
      // case '504B0304':
      // case '504B34':
      //   return 'application/zip';
      // case '25504446':
      //   return 'application/pdf';
      default:
        return 'Unknown filetype';
    }
  }

  getImageMimetype = (signature) => {
    switch (signature) {
      case '89504E47':
        return 'image/png';
      // case '47494638':
      //   return 'image/gif';
      case 'FFD8FFDB':
      case 'FFD8FFE0':
      case 'FFD8FFE1':
        return 'image/jpeg';
      case '3C3F786D':
        return 'image/svg+xml';
      case '00018':
      case '0001C':
      case '00020':
      //   return 'video/mp4';
      // case '1A45DFA3':
      //   return 'video/webm';
      // case '4944333':
      //   return 'audio/mp3';
      // case '4357539':
      //   return 'application/x-shockwave-flash';
      // case '504B0304':
      // case '504B34':
      //   return 'application/zip';
      // case '25504446':
      //   return 'application/pdf';
      default:
        return 'Unknown filetype';
    }
  }

  get round1_track() { return this.contesttrack_form.get('round1_track1'); }
  get round2_track() { return this.contesttrack_form.get('round2_track'); }
  get round3_track() { return this.contesttrack_form.get('round3_track'); }
  get semi_final_track() { return this.contesttrack_form.get('semi_final_track'); }
  get final_track() { return this.contesttrack_form.get(' final_track'); }
  get contest_id() { return this.contesttrack_form.get(' contest_id'); }

  get spreliminary1_track() { return this.standard_form.get('spreliminary1_track'); }
  get spreliminary2_track() { return this.standard_form.get('spreliminary2_track'); }
  get sround1_track() { return this.standard_form.get('sround1_track1'); }
  get sround2_track() { return this.standard_form.get('sround2_track'); }
  get sround3_track() { return this.standard_form.get('sround3_track'); }
  get ssemi_final_track() { return this.standard_form.get('ssemi_final_track'); }
  get sfinal_track() { return this.standard_form.get('sfinal_track'); }
  get scontest_id() { return this.standard_form.get('scontest_id'); }

  get special_round1_track() { return this.special_form.get('sround1_track1'); }

  submit_contest_track(id, contestid, type) {
    this.contestType = type;
    this.contestDetail = this.modalService.open(id, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
    this.contestid = contestid;
    this.contesttrack_data['contest_id'] = contestid;
    this.submitContest.close();
  }

}

