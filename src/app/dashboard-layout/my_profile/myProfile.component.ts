import { Component, OnInit, OnDestroy, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { HttpEventType,  HttpResponse} from '@angular/common/http';
import { MyProfileService } from './myProfile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { Lightbox } from 'angular2-lightbox';
import { Chart } from 'angular-highcharts';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableDirective } from 'angular-datatables';
import swal from 'sweetalert2';
declare let Stripe: any;
@Component({
  selector: 'app-myProfile',
  templateUrl: './myProfile.component.html',
  styleUrls: []
})
export class MyProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(DataTableDirective) 
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  subscription: Subscription;
  show_spinner : boolean = false;
  tab_cnt : Number = 1;
  userdata : any = {
    day : '',
    month : '',
    year : ''
  };
  public default_profile_img : any = 'img/profile-img.png';
  public default_cover_img : any = 'img/edit-cover.jpg';
  public day : any = [];
  public month : any = [];
  public year : any = [];
  music_types : any = [];
  change_email = {};
  change_pwd = {};
  media_modal_ref : NgbModalRef;
  show_progress : boolean = false;
  progress_cnt : Number = 0;
  media_list : any = [];
  private _albums: any = [];
  artist_media_url : any = environment.API_URL+environment.ARTIST_MEDIA;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  user_img_url : any = environment.API_URL+environment.USER_IMG;
  video_url : any = '';
  analytic_tab : any = 1;
  analytics_days : any = 7;
  follower_analytic_data : any = {};
  overview_analytic_data : any = {};
  download_analytic_data : any = {};
  location_flag : boolean = false;
  chart : any = '';
  location_bar_chart : any = '';
  follower_location_bar_chart : any = '';
  track_location_bar_chart : any = '';
  follower_age_chart : any = '';
  follower_gender_chart : any = '';
  follower_location_chart: AmChart;
  overview_gender_chart : any = '';
  track_gender_chart : any = '';
  track_vote_chart : any = '';
  track_location_chart : AmChart; 
  track_vote_count : any = 0;
  track_male_per  : any = 0;
  track_female_per : any = 0;
  track_analytic : any = '';
  follower_vote_chart : any = '';
  follower_vote_count : any = 0;
  follower_male_per  : any = 0;
  follower_female_per : any = 0;
  overview_vote_chart : any = '';
  overview_vote_count : any = 0;
  overview_location_chart : AmChart;
  overview_male_per : any = 0;
  overview_female_per : any = 0;
  overview_download_total :  any = 0;
  download_chart : any = '';
  download_analytic_count : any = 0;
  show_duration_date : any = '';

  // bookmark track
  bookmark_list : any = [];
  audio_ins : any = [];
  bookmark_track_list : any = [];
  // Profile form group
  artist_profile : FormGroup;
  artistProfileValidation : boolean = false;
  listener_profile : FormGroup;
  listenerProfileValidation : boolean = false;

  // upgrade to artist form group
  upgrade_artist : FormGroup;
  upgrade_artist_validation : boolean = false;
  upgrade_artist_data : any = {
    state : '',
    region : ''
  };
  region_list : any = [];
  state_list : any = [];
  upgrade_artist_img : any = '';

  // playlist
  playlist : any = [];
  playlist_data : any = {};
  playlist_track : any = [];
  serach_track_list : any = [];
  search_track : any = '';
  track_flag : boolean = false;
  playlist_track_list : any = [];
  playlist_fg : FormGroup;
  playlist_validation : boolean = false;
  track_fg : FormGroup;
  track_validation : boolean = false;

  // Bank
  bank_fg :  FormGroup;
  bank_validation : boolean = false;

  // Purchased track
  purchased_track : any = [];
  purchased_track_list : any = [];
  

  // payment tab
  payment_tab_cnt : any = 0;
  transaction_data : any = [];
  payment_chart : any = '';
  payment_count : any = 0;
  proceed_chart : any = '';
  procced_count : any = 0;

  constructor(private MyProfileService : MyProfileService, 
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private lightbox: Lightbox,
    private MessageService : MessageService,
    private AmCharts: AmChartsService,
    private fb: FormBuilder
  ) {
    let data = JSON.parse(localStorage.getItem('user'));
    this.day = [];
    this.month = [];
    this.year = [];
    for(let i = 1; i<= 31; i++ ) {
      this.day.push(i);
    }
    for(let i = 1; i<= 12; i++ ) {
      this.month.push(i);
    }
    for(let i = 1900; i<= (new Date()).getFullYear(); i++ ) {
      this.year.push(i);
    }
    if(data && data.artist) {
      this.userdata = {...data['artist']};
      this.userdata['type'] = 'artist';
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth();
        this.userdata['year'] = dt.getFullYear();
      }
      if(this.userdata.image) {
        this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.image;
      }
      if(this.userdata.cover_image) {
        this.default_cover_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.cover_image;
      }
      if(!this.userdata.social_media) {
        this.userdata['social_media'] = {
          'facebook' : '',
          'instagram' : '',
          'twitter' : '',
          'youtube' : '',
          'sound_cloud' : ''
        };
      }
    } else {
      this.userdata = {...data['user']};
      this.userdata['type'] = 'user';
      let share_url = {
        'share_url' : {
          'facebook' : '',
          'instagram' : '',
          'twitter' : '',
          'youtube' : '',
          'sound_cloud' : ''
        }
      };
      this.upgrade_artist_data = {...this.userdata, share_url};
      this.upgrade_artist_data['music_type'] = '';
      this.upgrade_artist_data['state'] = '';
      delete this.userdata['token'];
      delete this.userdata['token'];
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth();
        this.userdata['year'] = dt.getFullYear();
        this.upgrade_artist_data['day'] = dt.getDate();
        this.upgrade_artist_data['month'] = dt.getMonth();
        this.upgrade_artist_data['year'] = dt.getFullYear();
      }
      if(this.userdata.image) {
        if(this.userdata.provider && this.userdata.provider == 'facebook' && this.userdata['image'].includes('graph.facebook.com') || (this.userdata.provider == "gmail" && this.userdata['image'].includes('lh3.googleusercontent.com'))) {
          this.default_profile_img = this.userdata.image;
          
        } else {
          this.default_profile_img = environment.API_URL+environment.USER_IMG+this.userdata.image;
        }
        this.upgrade_artist_img = this.userdata.image;
      }
      let tmp = [];
      this.userdata['music_type'].forEach((ele) => {
        if(ele)
          tmp.push(ele['_id']);
      });
      this.userdata['music_type'] = tmp;
    }
    this.MyProfileService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
      let tmp = [];
      this.music_types.forEach((ele) => {
        tmp.push({label : ele['name'], value : ele['_id']});
      });
      this.music_types = tmp;
    });
    this.artist_profile = this.fb.group({
      upload : [''],
      cover : [''],
      fname : ['', [Validators.required, this.noWhitespaceValidator]],
      lname : ['', [Validators.required, this.noWhitespaceValidator]],
      gender : ['', [Validators.required]] ,
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10),Validators.maxLength(10), , this.noWhitespaceValidator]],
      music_type : ['', [Validators.required]],
      zipcode : ['', [Validators.required, this.noWhitespaceValidator]],
      description : [''],
      share_url_fb : [''],
      share_url_insta : [''],
      share_url_twit : [''],
      share_url_youtube : [''],
      share_url_sound : ['']
    });

    this.upgrade_artist = this.fb.group({
      upload : [''],
      fname : ['', [Validators.required, this.noWhitespaceValidator]],
      lname : ['', [Validators.required, this.noWhitespaceValidator]],
      gender : ['', [Validators.required]],
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10),Validators.maxLength(10), this.noWhitespaceValidator]],
      music_type : ['', [Validators.required]],
      zipcode : ['', [Validators.required, this.noWhitespaceValidator]],
      region : ['', [Validators.required]],
      state : ['', [Validators.required]],
      description : [''],
      share_url_fb : [''],
      share_url_insta : [''],
      share_url_twit : [''],
      share_url_youtube : [''],
      share_url_sound : ['']
    });

    this.listener_profile = this.fb.group({
      upload : [''],
      fname : ['', [Validators.required, this.noWhitespaceValidator]],
      lname : ['', [Validators.required, this.noWhitespaceValidator]],
      gender : ['', [Validators.required]] ,
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10),Validators.maxLength(10), this.noWhitespaceValidator]],
      zipcode : ['', [Validators.required, this.noWhitespaceValidator]],
      music_type : ['']
    });

    this.bank_fg = this.fb.group({
      bname : ['', [Validators.required, this.noWhitespaceValidator]],
      hname : ['', [Validators.required, this.noWhitespaceValidator]],
      acno : ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16) , this.noWhitespaceValidator]],
      rno : ['', [Validators.required, this.noWhitespaceValidator]]
    });

    this.playlist_fg = this.fb.group({
      name : ['', [Validators.required, this.noWhitespaceValidator]]
    });
    this.track_fg = this.fb.group({
      name : ['', [Validators.required]]
    });

     // this.getAllData();
     this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['list'] != 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
      }
      
      if(response && response['action'] == 'stop' && response['list'] == 1) {
        this.audio_ins[response['index']] = false;
      }
      
      if(response && response['action'] == 'start' && response['list'] == 1) {
        this.audio_ins[response['index']] = true;
      }
      
      if(response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
          this.audio_ins[response['index']] = true;
        }
      }

      if(response && response['loggedin_user']) {
        data = response['loggedin_user'];
        if(data && data.artist) {
          this.userdata = {...data['artist']};
          this.userdata['type'] = 'artist';
          if(this.userdata.dob) {
            let dt =  new Date(this.userdata.dob);
            this.userdata['day'] = dt.getDate();
            this.userdata['month'] = dt.getMonth();
            this.userdata['year'] = dt.getFullYear();
          }
          if(this.userdata.image) {
            this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.image;
          }
          if(this.userdata.cover_image) {
            this.default_cover_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.cover_image;
          }
          if(!this.userdata.social_media) {
            this.userdata['social_media'] = {
              'facebook' : '',
              'instagram' : '',
              'twitter' : '',
              'youtube' : '',
              'sound_cloud' : ''
            };
          }
        } else {
          this.userdata = {...data['user']};
          this.userdata['type'] = 'user';
          delete this.userdata['token'];
          if(this.userdata.dob) {
            let dt =  new Date(this.userdata.dob);
            this.userdata['day'] = dt.getDate();
            this.userdata['month'] = dt.getMonth();
            this.userdata['year'] = dt.getFullYear();
          }
          if(this.userdata.image) {
            if(this.userdata.provider && this.userdata.provider == 'facebook' && this.userdata['image'].includes('graph.facebook.com') || (this.userdata.provider == "gmail" && this.userdata['image'].includes('lh3.googleusercontent.com'))) {
              this.default_profile_img = this.userdata.image;
            } else {
              this.default_profile_img = environment.API_URL+environment.USER_IMG+this.userdata.image;
            }
          }
          let tmp = [];
          this.userdata['music_type'].forEach((ele) => {
            if(ele)
              tmp.push(ele['_id']);
          });
          this.userdata['music_type'] = tmp;
        }
      }
      
    });

    
  }

  ngOnInit() {
    if(this.userdata['type'] == 'artist') {
      this.getMediaList();
      this.calculateDateFromDays(this.analytics_days);
      this.getAllCard();
      //this.getAllTrackAnalytic({day : this.analytics_days});
      this.getAllOverviewAnalytic({day : this.analytics_days});
      this.getAllDownloadAnalytic({day : this.analytics_days});
      this.getAllPayment({day : 30});
      const that = this;
      this.dtOptions[0] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getArtistPlaylist(dataTablesParameters).subscribe((response) => {
            that.playlist = response['playlist'];
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' }
        ]
      };
      this.dtOptions[1] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          that.MyProfileService.getAllTransction(dataTablesParameters).subscribe((response) => {
            that.transaction_data = response['account'];
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' }
        ]
      };
    } else {
      this.getRegionList();
      const that = this;
      this.dtOptions[0] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getBookmarkedTrack(dataTablesParameters).subscribe((response) => {
            that.bookmark_list = response['bookmark'];
            if(that.bookmark_list.length > 0) { 
              this.audio_ins = [];
              this.bookmark_track_list = [];
              this.bookmark_list.forEach((ele) => {this.audio_ins.push(false)});
              this.bookmark_list.forEach((ele) => {this.bookmark_track_list.push(ele['track_id'])});
            }
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' }
        ]
      };
      this.dtOptions[1] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getAllListenerPlaylist(dataTablesParameters).subscribe((response) => {
            that.playlist = response['playlist'];
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' }
        ]
      };
      this.dtOptions[2] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getAllPurchasedTrack(dataTablesParameters).subscribe((response) => {
            that.purchased_track = response['track'];
            this.audio_ins = [];
            this.purchased_track_list = [];
            that.purchased_track.forEach((ele) => {this.audio_ins.push(false)});
            that.purchased_track.forEach((ele) => {this.purchased_track_list.push(ele['track'])});
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          {data : ''}
        ]
      };
     
    }

  }

  ngOnDestroy() {
    if (this.follower_location_chart) {
      this.AmCharts.destroyChart(this.follower_location_chart);
    }
    if (this.track_location_chart) {
      this.AmCharts.destroyChart(this.track_location_chart);
    }
    if (this.overview_location_chart) {
      this.AmCharts.destroyChart(this.overview_location_chart);
    }
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    // stripe card implementation
    // this.setupStripeFrom();
  }

  noWhitespaceValidator(control: FormControl) {
      if(typeof (control.value || '') === 'string' || (control.value || '') instanceof String) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
      }
  }
  
  calculateDateFromDays(days : any) {
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    this.show_duration_date = this.formatDate(last)+' - '+this.formatDate(date);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return  monthNames[monthIndex] + ' '+day+ ', '+ year;
  }

  changeAnalyticsDays() {
    this.calculateDateFromDays(this.analytics_days);
    this.getAllFollowerAnalytics({day : this.analytics_days});
    this.getAllTrackAnalytic({day : this.analytics_days});
    this.getAllOverviewAnalytic({day : this.analytics_days});
    this.getAllDownloadAnalytic({day : this.analytics_days});
    this. getAllProceed({day : this.analytics_days});
  }

  tabChange(cnt : Number) {
    this.tab_cnt = cnt;
    this.track_flag = false;
  }

  // Payment tab change
  paymentTabChange(cnt : Number) {
    this.payment_tab_cnt = cnt;
  }

  togglelocBarChart(flag : boolean) {
    this.location_flag = flag;
  }

  changeAnlyticTab(cnt : Number) {
    this.analytic_tab = cnt;
    this.location_flag = false;
    if(cnt == 1) {
      this.getAllOverviewAnalytic({day : this.analytics_days});
    } else if(cnt == 2) {
      this.getAllFollowerAnalytics({day : this.analytics_days});
    } else if (cnt == 3) {
      this.getAllTrackAnalytic({day : this.analytics_days});
    } else if(cnt == 4) {
      this.getAllDownloadAnalytic({day : this.analytics_days});
      this.getAllProceed({day : this.analytics_days});
    }
  }
  // Update user profile
  update(flag : boolean) {
    if(this.userdata.type == 'artist') {
      if(flag) {
        this.artistProfileValidation = !flag;
        this.show_spinner = true;
        this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
        this.userdata['share_url'] = JSON.stringify(this.userdata['social_media']);
        this.MyProfileService.updateArtistProfile(this.userdata).subscribe(response => {
          console.log(response);
          this.toastr.success(response['message'], 'Success!');
          this.updateLocalStorage();
          this.MessageService.sendMessage({updateProfile : true});
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      } else {
        this.artistProfileValidation = !flag;
      }
      
    } else {
      if(flag) {
        this.listenerProfileValidation = !flag;
        this.show_spinner = true;
        this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
        this.MyProfileService.updateUserProfile(this.userdata).subscribe(response => {
          console.log(response);
          this.toastr.success(response['message'], 'Success!');
          this.updateLocalStorage();
          this.MessageService.sendMessage({updateProfile : true});
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      } else {
        this.listenerProfileValidation = !flag;
      }
    }
  }

  updateProfileImage(event: any) {
    const fileList: FileList = event.target.files;
    if(event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if(allow_types.indexOf(fileList[0].type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
        return false;
      }
      console.log(fileList);
      let formData: FormData = new FormData();
      formData.append('image', fileList[0]);
      console.log(formData);
      if(this.userdata.type == 'artist') {
        this.MyProfileService.updateArtistProfileImage(formData).subscribe(response => {
          console.log('uploaded image', response);
          this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+response['image'];
          this.updateLocalStorage();
          this.MessageService.sendMessage({updateProfile : true});
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      } else {
        this.MyProfileService.updateUserProfileImage(formData).subscribe(response => {
          console.log('uploaded image', response);
          this.default_profile_img = environment.API_URL+environment.USER_IMG+response['image'];
          this.updateLocalStorage();
          this.MessageService.sendMessage({updateProfile : true});
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
      if (fileList.length > 0) {
        const fileExtention = fileList[0].name.split('.');
        const file: File = fileList[0];
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const data = {};
              let imageBuffer = e.target.result;
              this.default_profile_img = imageBuffer;
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
  }
  
  changeUpgradeArtistImage(event : any) {
    const fileList: FileList = event.target.files;
    if(event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if(allow_types.indexOf(fileList[0].type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
        return false;
      }
      console.log(fileList);
      let formData: FormData = new FormData();
      this.upgrade_artist_img = fileList[0]; 
      formData.append('image', fileList[0]);
      if (fileList.length > 0) {
        const fileExtention = fileList[0].name.split('.');
        const file: File = fileList[0];
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const data = {};
              let imageBuffer = e.target.result;
              this.default_profile_img = imageBuffer;
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
  }
  

  updateCoverImage(event : any) {
    const fileList: FileList = event.target.files;
    console.log(fileList);
    if(event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if(allow_types.indexOf(fileList[0].type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
        return false;
      }
      const formData: FormData = new FormData();
      formData.append('cover_image', fileList[0], fileList[0]['name']);
      this.MyProfileService.updateCoverImage(formData).subscribe(response => {
        console.log('uploaded image', response);
        this.updateLocalStorage();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {

      });
      if (fileList.length > 0) {
        const fileExtention = fileList[0].name.split('.');
        const file: File = fileList[0];
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const data = {};
              let imageBuffer = e.target.result;
              this.default_cover_img = imageBuffer;
          };
          reader.readAsDataURL(event.target.files[0]);
        }
    }
  }

  updateLocalStorage() {
    if(this.userdata.type == 'artist') {
      this.userdata = {
        day : '',
        month : '',
        year : ''
      };
      this.MyProfileService.getArtistById().subscribe(res => {
        console.log('artist', res);
        let data = JSON.parse(localStorage.getItem('user'));
        data['artist'] = res['artist'];
        this.userdata = res['artist'];
        this.userdata['type'] = 'artist';
        if(this.userdata.dob) {
          let dt =  new Date(this.userdata.dob);
          this.userdata['day'] = dt.getDate();
          this.userdata['month'] = dt.getMonth();
          this.userdata['year'] = dt.getFullYear();
        }
        if(!this.userdata.social_media) {
          this.userdata['social_media'] = {
            'facebook' : '',
            'instagram' : '',
            'twitter' : '',
            'youtube' : '',
            'sound_cloud' : ''
          };
        }
        if(this.userdata.image) {
          this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.image;
        }
        if(this.userdata.cover_image) {
          this.default_cover_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.cover_image;
        }
        localStorage.setItem('user', JSON.stringify(data));
      });
    } else {
      this.userdata = {
        day : '',
        month : '',
        year : ''
      };
      this.MyProfileService.getUserById().subscribe(res => {
        let data = JSON.parse(localStorage.getItem('user'));
        data['user'] = res['user'];
        this.userdata = res['user'];
        this.userdata['type'] = 'user';
        delete this.userdata['token'];
        if(this.userdata.dob) {
          let dt =  new Date(this.userdata.dob);
          this.userdata['day'] = dt.getDate();
          this.userdata['month'] = dt.getMonth();
          this.userdata['year'] = dt.getFullYear();
        }
        if(this.userdata.image) {
          if(this.userdata.provider && this.userdata.provider == 'facebook' && this.userdata['image'].includes('graph.facebook.com') || (this.userdata.provider == "gmail" && this.userdata['image'].includes('lh3.googleusercontent.com'))) {
            this.default_profile_img = this.userdata.image;
          } else {
            this.default_profile_img = environment.API_URL+environment.USER_IMG+this.userdata.image;
          }
        }
        let tmp = [];
        data['user']['music_type'].forEach((ele) => {
          if(ele)
            tmp.push(ele['_id']);
        });
        this.userdata['music_type'] = tmp;
        localStorage.setItem('user', JSON.stringify(data));
      });
    }
  }
  
  removeArtistImage() {
    let thi = this;
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function(flag) {
        if(flag.value) {
          thi.MyProfileService.deleteArtistImage(thi.userdata._id).subscribe(response => {
            thi.default_profile_img = 'img/profile-img.png';
            thi.updateLocalStorage();
            thi.toastr.success(response['message'], 'Success!');
          }, error => {
            thi.toastr.error(error['error'].message, 'Error!');
          },);
        }
      });
  }
  
  removeArtistCoverImage() {
    let thi = this;
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function(flag) {
        if(flag.value) {
          thi.MyProfileService.deleteArtistCoverImage(thi.userdata._id).subscribe(response => {
            thi.default_cover_img = 'img/edit-cover.jpg';
            thi.updateLocalStorage();
            thi.toastr.success(response['message'], 'Success!');
          }, error => {
            thi.toastr.error(error['error'].message, 'Error!');
          },);
        }
      });
  }
  
  removeUserImage() {
    let thi = this;
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function(flag) {
        if(flag.value) {
          thi.MyProfileService.deleteUserImage(thi.userdata._id).subscribe(response => {
            thi.default_profile_img = 'img/profile-img.png';
            thi.updateLocalStorage();
            thi.toastr.success(response['message'], 'Success!');
          }, error => {
            thi.toastr.error(error['error'].message, 'Error!');
          },);
        }
      });
  }
  
  changeEmail() {
    if(this.change_email['old'] && this.userdata.email == this.change_email['old']) {
      if(this.change_email['new'] && this.change_email['repeat'] && this.change_email['new'] == this.change_email['repeat']) {
        let data = {
          email : this.userdata.email,
          new_email : this.change_email['new']
        };
        this.show_spinner = true;
        if(this.userdata.type == 'artist') {
          this.MyProfileService.changeArtistEmail(data).subscribe(response => {
            this.change_email = {};
            this.updateLocalStorage();
            this.toastr.success(response['resp'], 'Success!');
          }, error => {
            this.toastr.error(error['error'].message, 'Error!');
            this.show_spinner = false;
          }, () => {
            this.show_spinner = false;
          }); 
        } else {
          this.MyProfileService.changeUserEmail(data).subscribe(response => {
            this.change_email = {};
            this.updateLocalStorage();
            this.toastr.success(response['resp'], 'Success!');
          }, error => {
            this.toastr.error(error['error'].message, 'Error!');
            this.show_spinner = false;
          }, () => {
            this.show_spinner = false;
          }); 
        }
      } else if(!this.change_email['new']) {
        this.toastr.error('Please enter valid new email', 'Error!');  
      } else if(!this.change_email['repeat']) {
        this.toastr.error('Please enter valid repeat email', 'Error!');  
      } else {
        this.toastr.error('Please enter new and repeat email value same', 'Error!');  
      }
    } else {
      this.toastr.error('Please enter valid currnet email', 'Error!');
    }
  }

  changePassword() {
    if(this.change_pwd['old']) {
      if(this.change_pwd['new'] && this.change_pwd['repeat'] && this.change_pwd['new'] == this.change_pwd['repeat'] && this.change_pwd['new'].length >= 6 && this.change_pwd['repeat'] >= 6 ) {
        let data = {
          password : this.change_pwd['old'],
          new_password : this.change_pwd['new']
        };
        if(this.userdata.type == 'artist') {
          this.MyProfileService.changeArtistPassword(data).subscribe(response => {
            this.change_pwd = {};
            this.updateLocalStorage();
            this.toastr.success(response['resp'], 'Success!');
          }, error => {
            this.toastr.error(error['error'].message,'Error!');
          });
        } else {
          this.MyProfileService.changeUserPassword(data).subscribe(response => {
            this.change_pwd = {};
            this.updateLocalStorage();
            this.toastr.success(response['resp'], 'Success!');
          }, error => {
            this.toastr.error(error['error'].message,'Error!');
          });
        }
      } else if (!this.change_pwd['new']) {
        this.toastr.error('Please enter new password');
      } else if (!this.change_pwd['repeat']) {
        this.toastr.error('Please enter repeat password');
      } else if(this.change_pwd['new'].length < 6) {
        this.toastr.error('New password must be more than 6 character');
      } else if(this.change_pwd['repeat'].length < 6) {
        this.toastr.error('Repeat password must be more than 6 character');
      } else {
        this.toastr.error('New and repeat password must be same');
      }
    } else {
      this.toastr.error('Please enter old password','Error!');
    }
  }

  openAddMediaModal(content) {
    this.media_modal_ref = this.modalService.open(content, { centered: true });
  }

  uploadImage(event : any) {
    const fileList: FileList = event.target.files;
    console.log(fileList);
    let formData: FormData = new FormData();
    formData.append('image', fileList[0]);
    let allow_types = ['image/png', 'image/jpeg', 'image/jpg'];
    if(allow_types.indexOf(fileList[0].type) == -1) {
      this.toastr.error('Please upload valid file.', 'Error!');
      return false;
    }
    this.show_progress = true;
    this.MyProfileService.uploadMedia(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        this.progress_cnt = percentDone;
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!', event['body']);
        this.getMediaList();
        this.media_modal_ref.close();
        this.toastr.success( event['body']['message'], 'Success!');
      }
    }, error => {
      this.toastr.error(error['error'].message, '');
      this.show_progress = false;
    }, () => {
      this.show_progress = false;
    });
  }

  getMediaList() {
    this._albums = [];
    this.MyProfileService.getAllMedia().subscribe(response => {
      this.media_list = response['media'];
      for(let i=0; i<this.media_list.length; i++) {
        if(this.media_list[i].image)
          this._albums.push({src : this.artist_media_url+this.media_list[i].image});
      }
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }

  addLink() {
    let formData: FormData = new FormData();
    formData.append('link', this.video_url);
    if(this.video_url) {
      this.show_spinner = true;
      this.MyProfileService.uploadMedia(formData).subscribe(event => {
        if (event instanceof HttpResponse) {
          this.video_url = '';
          this.toastr.success( event['body']['message'], 'Success!');
          this.getMediaList();
          this.media_modal_ref.close();
        }
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      });
    } else {
      this.toastr.error('Please add video url or Image.', 'Error!');
      this.show_spinner = false;
    }
  }

  removeMedia(id : any) {
    let thi = this;
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function(flag) {
        if(flag.value) {
          thi.MyProfileService.removeMediaById(id).subscribe(response =>{
            thi.toastr.success(response['message'], 'Success!');
            thi.getMediaList();
          }, error => {
            thi.toastr.error(error['error'].message, 'Error!');
          });
        }
      });
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }
  // Get All follower analytics data
  getAllFollowerAnalytics(data) {
    this.MyProfileService.getAllFollowerAnalytic(data).subscribe(response => {
        this.follower_analytic_data = response;
        this.ageChart(response['age']);
        this.genderChart(response['gender']);
        this.followerVoteChart(response['day']);
        this.followerLocationChart(response['loaction']);
        this.followerLocationBarChart(response['loaction']);
    });
  }
  // Get all track and contest details
  getAllTrackAnalytic(data) {
    this.MyProfileService.getAllTrackContestData(data).subscribe(response => {
        this.track_analytic = response;
        this.trackGenderChart(response['gender']);
        this.trackVoteChart(response['day']);
        this.trackLocationChart(response['location']);
        this.trackLocationBarChart(response['location']);
    });
  }
  // Get all overview analytics data
  getAllOverviewAnalytic(data) {
    this.MyProfileService.getAllOverviewAnalytic(data).subscribe(response => {
        this.overview_analytic_data = response;
        this.overview_download_total = 0;
        if(response['track']) {
          response['track'].forEach(ele => {
            this.overview_download_total += ele['no_of_downloads'];
          });
        }
        this.overviewVoteChart(response['vote']);
        this.overviewGenderChart(response['gender']);
        this.overviewLocationChart(response['location']);
        this.LocationBarChart(response['location']);
        
    });
  }

  // Get all payment details
  getAllPayment(data) {
    this.MyProfileService.getProceedChartData(data).subscribe((response) => {
      this.paymentChart(response['day']);
    });
  }
  // Get all proceed details
  getAllProceed(data) {
    this.MyProfileService.getProceedChartData(data).subscribe((response) => {
      this.proceedChart(response['day']);
    });
  }

  // Get all download analytics data
  getAllDownloadAnalytic(data) {
    this.MyProfileService.getAllDownloadAnalytic(data).subscribe(response => {
      this.download_analytic_data = response;
      this.downloadChart(response['day']);
    });
  }
  // Age chart
  ageChart(data : any) {
    let result = [0,0,0,0,0,0,0];
    data.forEach(ele => {
      if(ele.age >= 13 && ele.age <= 17) {
        result[0] = ele.count;
      } else if(ele.age >= 18 && ele.age <= 24) {
        result[1] = ele.count;
      } else if(ele.age >= 25 && ele.age <= 34) {
        result[2] = ele.count;
      } else if(ele.age >= 35 && ele.age <= 44) {
        result[3] = ele.count;
      } else if(ele.age >= 45 && ele.age <= 54) {
        result[4] = ele.count;
      } else if(ele.age >= 55 && ele.age <= 64) {
        result[5] = ele.count;
      } else {
        result[6] = ele.count;
      }
    });
    console.log(result);
    this.follower_age_chart = new Chart({
      chart: {
        type: 'column',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        categories : ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        labels: {
            enabled: true
        },
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : false
      },
      plotOptions: {
        column : {
          borderWidth: 0,
          borderRadius:5
        }
      },
      series: [
        {
          name : 'Person',
          color : '#9b26b0',
          data: result
        }
      ]
    });

  }
  // Gender chart
  genderChart(data : any) {
    let result = [];
    data.forEach(ele => {
      if(ele['_id'] == 'male') 
        this.follower_male_per = ele['percentage_value'];
      else
        this.follower_female_per = ele['percentage_value'];
      result.push({
        name : ele['_id'],
        y : parseFloat(ele['percentage_value'])
      });
    });
    this.follower_gender_chart = new Chart({
      chart: {
        type: 'pie',
        height: 200
      },
      title: {
        text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [ {
        name: 'New Followers',
        data : result
      }]
    });
  }
  // Followers location chart
  overviewLocationChart(data : any) {
    let final_data = [];
    let min = 0;
    let max = 0;
    if(data.length > 0) {
      max = data[data.length - 1]['value'];
    }
    data.forEach((ele) => {
      final_data.push({id : 'US-'+ele['_id']['name'], value : ele['value']});
    });
    this.overview_location_chart = this.AmCharts.makeChart("overviewLoc", {
      "type": "map",
      "theme": "light",
      "dataProvider": {
        "map": 'usaLow',
        "colorSteps": 10,
        "areas": final_data
        },
        "areasSettings": {
          "autoZoom": true
        },
        "valueLegend": {
          "right": 10,
          "minValue": min,
          "maxValue": max
        }
    });
  }
  // Followers vote chart
  followerVoteChart(data : any) {
    let result = [0,0,0,0,0,0,0];
    this.follower_vote_count = 0;
    data.forEach(ele => {
      result[ele['_id']['days']] = ele.count;
      this.follower_vote_count += ele.count;
    });
    this.follower_vote_chart = new Chart({
      chart: {
        type: 'area',
        height:200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true
      },
      series: [
        {
          name : 'Votes',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }
  // Followers location chart
  followerLocationChart(data : any) {
    let final_data = [];
    let min = 0;
    let max = 0;
    if(data.length > 0) {
      max = data[data.length - 1]['value'];
    }
    data.forEach((ele) => {
      final_data.push({id : 'US-'+ele['_id']['name'], value : ele['value']});
    });
    this.follower_location_chart = this.AmCharts.makeChart("followLoc", {
      "type": "map",
      "theme": "light",
      "dataProvider": {
        "map": 'usaLow',         
        "colorSteps": 10,
        "areas": final_data
        },
        "areasSettings": {
          "autoZoom": true
        },
        "valueLegend": {
          "right": 10,
          "minValue": min,
          "maxValue": max
        }
    });
  }
  // Overview vote chart
  overviewVoteChart(data :  any) {
    let result = [0,0,0,0,0,0,0];
    this.overview_vote_count = 0;
    data.forEach(ele => {
      result[ele['day']] = ele.count;
      this.overview_vote_count += ele.count;
    });
    this.overview_vote_chart = new Chart({
      chart: {
        type: 'area',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true
      },
      series: [
        {
          name : 'Votes',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }

  // payment chart 
  paymentChart(data : any) {
    let result = [];
    let cat = [];
    let dt = new Date();
    for(let i = 1; i<= 30; i++) {
      cat.push(this.month_name(dt)+" "+i);
      result.push(0);
    }
    this.payment_count = 0;
    data.forEach(ele => {
      result[ele['day'] - 1] = ele.amount;
      this.payment_count += ele.amount;
    });
    this.payment_chart = new Chart({
      chart: {
        type: 'area',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true,
        labels : {
          format : '${value}'
        }
      },
      tooltip : {
        formatter : function () {
          return 'Proceeds <b>$'+this.y+'</b>';
        }
      },
      series: [
        {
          name : 'Proceed',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }

  // proceed chart
  proceedChart(data : any) {
    let result = [];
    let cat = [];
    let dt = new Date();
    for(let i = 1; i<= this.analytics_days; i++) {
      cat.push(this.month_name(dt)+" "+i);
      result.push(0);
    }
    this.procced_count = 0;
    data.forEach(ele => {
      result[ele['day'] - 1] = ele.amount;
      this.procced_count += ele.amount;
    });
    this.proceed_chart = new Chart({
      chart: {
        type: 'area',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true,
        labels : {
          format : '${value}'
        }
      },
      tooltip : {
        formatter : function () {
          return 'Proceeds <b>$'+this.y+'</b>';
        }
      },
      series: [
        {
          name : 'Proceed',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }

  // Overview Gender chart
  overviewGenderChart(data : any) {
    let result = [];
    data.forEach(ele => {
      if(ele['_id'] == 'male') 
        this.overview_male_per = ele['percentage_value'];
      else
      this.overview_female_per = ele['percentage_value'];
      result.push({
        name : ele['_id'],
        y : parseFloat(ele['percentage_value'])
      });
    });
    this.overview_gender_chart = new Chart({
      chart: {
        type: 'pie',
        height:200
      },
      title: {
        text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [ {
        name: 'Followers',
        data : result
      }]
    });
  }
  // track vote chart
  trackVoteChart(data :  any) {
    let result = [0,0,0,0,0,0,0];
    this.track_vote_count = 0;
    data.forEach(ele => {
      result[ele['day']] = ele.count;
      this.track_vote_count += ele.count;
    });
    this.track_vote_chart = new Chart({
      chart: {
        type: 'area',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true
      },
      series: [
        {
          name : 'Votes',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }
  // Track Gender chart
  trackGenderChart(data : any) {
    let result = [];
    if(data) {
      data.forEach(ele => {
        if(ele['_id'] == 'male') 
          this.track_male_per = ele['percentage_value'];
        else
        this.track_female_per = ele['percentage_value'];
        result.push({
          name : ele['_id'],
          y : parseFloat(ele['percentage_value'])
        });
      });
    }
    
    this.track_gender_chart = new Chart({
      chart: {
        type: 'pie',
        height:200
      },
      title: {
        text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [ {
        name: 'Followers',
        data : result
      }]
    });
  }
  // Track location chart
  trackLocationChart(data : any) {
    let final_data = [];
    let min = 0;
    let max = 0;
    if(data.length > 0) {
      max = data[data.length - 1]['value'];
    }
    data.forEach((ele) => {
      final_data.push({id : 'US-'+ele['_id']['name'], value : ele['value']});
    });
    this.track_location_chart = this.AmCharts.makeChart("trackLoc", {
      "type": "map",
      "theme": "light",
      "dataProvider": {
        "map": 'usaLow',
        "colorSteps": 10,
        "areas": final_data
        },
        "areasSettings": {
          "autoZoom": true
        },
        "valueLegend": {
          "right": 10,
          "minValue": min,
          "maxValue": max
        }
    });
  }
  month_name(dt){
    let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
   };
  // Download chart
  downloadChart(data :  any) {
    let result = [];
    let cat = [];
    let dt = new Date();
    for(let i = 1; i<= this.analytics_days; i++) {
      cat.push(this.month_name(dt)+" "+i);
      result.push(0);
    }
    this.download_analytic_count = 0;
    data.forEach(ele => {
      result[ele['day'] - 1] = ele.count;
      this.download_analytic_count += ele.count;
    });
    this.download_chart = new Chart({
      chart: {
        type: 'area',
        height : 200
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0
      },
      yAxis : {
        visible : true
      },
      series: [
        {
          name : 'Votes',
          color : '#9b26b0',
          data: result
        }
      ]
    });
  }
  // update notification settings
  updateNotificationSetting(key : any, val : any ) {
    let data = {};
    data[key] = val;
    this.MyProfileService.updateSettings(data).subscribe((response) => {
      this.updateLocalStorage();
      this.toastr.success(response['message'], 'Success!');
    }, (error) => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }
  // Top location bar chart
  LocationBarChart(data : any) {
    let cat = [];
    let final_data = [];
    data.forEach(ele => {
      cat.push(ele['_id']['_id']);
      final_data.push(ele['value']);
    });
    this.location_bar_chart = new Chart({
      chart: {
        type: 'bar',
        height:300
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0,
        minorGridLineWidth: 0
      },
      yAxis : {
        visible : true,
        min: 0,
        labels: {
            overflow: 'justify'
        },
        
        tickLength: 0
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      series: [
        {
          name : 'Top Location',
          color : '#ba67c8',
          data: final_data
        }
      ]
    });
  }
  // Top location bar chart
  trackLocationBarChart(data : any) {
    let cat = [];
    let final_data = [];
    data.forEach(ele => {
      cat.push(ele['_id']['_id']);
      final_data.push(ele['value']);
    });
    this.track_location_bar_chart = new Chart({
      chart: {
        type: 'bar',
        height:300
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0,
        minorGridLineWidth: 0
      },
      yAxis : {
        visible : true,
        min: 0,
        labels: {
            overflow: 'justify'
        },
        
        tickLength: 0
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      series: [
        {
          name : 'Top Location',
          
          data: final_data
        }
      ]
    });
  }
  // Top location bar chart
  followerLocationBarChart(data : any) {
    let cat = [];
    let final_data = [];
    data.forEach(ele => {
      cat.push(ele['_id']['_id']);
      final_data.push(ele['value']);
    });
    this.follower_location_bar_chart = new Chart({
      chart: {
        type: 'bar',
        height:300
      },
      title: {
        text: ''
      },
      xAxis : {
        categories : cat,
        labels: {
            enabled: true
        },
        tickmarkPlacement: 'on',
        minorTickLength: 0,
        tickLength: 0,
        minorGridLineWidth: 0
      },
      yAxis : {
        visible : true,
        min: 0,
        labels: {
            overflow: 'justify'
        },
        
        tickLength: 0
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      series: [
        {
          name : 'Top Location',
          color : '#9b26b0',
          data: final_data
        }
      ]
    });
  }

   // Play audio
   playAudio(name : any, index : any, data : any){
    
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.audio_ins[index] = true;
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 1});
  }
  // Stop audio
  stopAudio(index, data : any) {
    
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 1});
  }

  // playlist related code start here
  // Open add new playlist model
  openAddPlaylistModel(content) {
    this.playlist_data = {};
    this.playlist_validation = false;
    this.media_modal_ref = this.modalService.open(content, { centered: true });
  }
  // open edit playlist model
  openEditPlaylistModel(content, index : any) {
    this.playlist_data = {...this.playlist[index]};
    this.media_modal_ref = this.modalService.open(content, { centered: true });
  }
  // open edit playlist model
  openPlaylistTrackModel(content) {
    this.search_track = '';
    this.media_modal_ref = this.modalService.open(content, { centered: true });
  }
  // add new playlist to db
  addNewPlaylist(flag) {
    if(flag) {
      if(this.userdata && this.userdata['type'] == 'user') {
        if(this.playlist_data && this.playlist_data['name'] && this.playlist_data['name'] != null) {
          this.show_spinner = true;
          this.MyProfileService.addNewListenerPlaylist(this.playlist_data).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Playlist name is required', 'Error!');
        }
      } else {
        if(this.playlist_data && this.playlist_data['name'] && this.playlist_data['name'] != null) {
          this.show_spinner = true;
          this.MyProfileService.createArtistPlaylist(this.playlist_data).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Playlist name is required', 'Error!');
        }
      }
    }
    this.playlist_validation = !flag;
  }
  // edit existing playlist
  editPlaylist(flag) {
    if(flag) {
      if(this.userdata && this.userdata['type'] == 'user') {
        if(this.playlist_data && this.playlist_data['name'] && this.playlist_data['name'] != null) {
          this.show_spinner = true;
          this.MyProfileService.updateListenerPlaylist(this.playlist_data, this.playlist_data['_id']).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Playlist name is required', 'Error!');
        }
      } else {
        if(this.playlist_data && this.playlist_data['name'] && this.playlist_data['name'] != null) {
          this.show_spinner = true;
          this.MyProfileService.updateArtistPlaylist(this.playlist_data, this.playlist_data['_id']).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Playlist name is required', 'Error!');
        }
      }
    }
    this.playlist_validation = !flag;
    
  }
  // Remove existing playlist
  removePlaylist(id : any) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((flag) => {
      if(flag.value) {
        if(this.userdata && this.userdata['type'] == 'user') {
          this.MyProfileService.deleteListenerPlaylistById(id).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
          });
        } else {
          this.MyProfileService.removeArtistPlaylist(id).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
          });
        }
      }
    });
  }
  // Playlist track
  getPlaylistTrack(id, index) {
    const that = this;
    this.track_flag = true;
    this.playlist_data = this.playlist[index];
    if(this.userdata && this.userdata['type'] == 'user') {
      this.dtOptions[2] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getPlaylistTrack(dataTablesParameters, id).subscribe((response) => {
            that.playlist_track = response['playlist'];
            if(that.playlist_track.length > 0) { 
              this.audio_ins = [];
              this.playlist_track_list = [];
              this.playlist_track.forEach((ele) => {this.audio_ins.push(false)});
              this.playlist_track.forEach((ele) => {this.playlist_track_list.push(ele['track'])});
            }
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' }
        ]
      };
    } else {
      this.dtOptions[1] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          that.audio_ins = [];
          that.MyProfileService.getArtistPlaylistTrack(dataTablesParameters, id).subscribe((response) => {
            that.playlist_track = response['playlist'];
            if(that.playlist_track.length > 0) { 
              this.audio_ins = [];
              this.playlist_track_list = [];
              this.playlist_track.forEach((ele) => {this.audio_ins.push(false)});
              this.playlist_track.forEach((ele) => {this.playlist_track_list.push(ele['track'])});
            }
            callback({
              recordsTotal: response['recordsTotal'],
              recordsFiltered: response['recordsTotal'],
              data: []
            });
          });
          
        },
        columns: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' }
        ]
      };
    }
    
  }
  // get track based on search string
  search(event) {
    console.log(event.query);
    let data = {
      search : event.query
    };
    this.MyProfileService.getTrackForPlaylist(data).subscribe((response) => {
      this.serach_track_list = response['track'];
    });
  }
  // Add track to playlist
  addTrackPlaylist(flag) {
    if(flag) {
      if(this.userdata && this.userdata['type'] == 'user') {
        console.log(this.search_track);
        if(this.search_track) {
          let data = {
           track_id : [] 
          }
          this.search_track.forEach((ele) => { data['track_id'].push(ele['_id']) });
          this.show_spinner = true;
          this.MyProfileService.addTrackListenerPlaylist(data, this.playlist_data['_id']).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Track name is required.', 'Error!');
        }
      } else {
        if(this.search_track) {
          let data = {
           track_id : [] 
          }
          this.search_track.forEach((ele) => { data['track_id'].push(ele['_id']) });
          this.show_spinner = true;
          this.MyProfileService.addTrackToArtistPlaylist(data, this.playlist_data['_id']).subscribe((response) => {
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
            this.media_modal_ref.close();
            this.toastr.success(response['message'], 'Success!');
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        } else {
          this.toastr.error('Track name is required.', 'Error!');
        }
      }
    }
    this.track_validation = !flag;
    
  }
  // Remove track from playlist for listener
  removeTrackFromPlaylist(id) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((flag) => {
      if(flag.value) {
        if(this.userdata && this.userdata['type'] == 'user') {
          let data = {
            track_id : id,
            playlist_id : this.playlist_data['_id']
          };
          this.MyProfileService.removeTrackListenerPlaylist(data).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
          });
        } else {
          let data = {
            track_id : id,
            playlist_id : this.playlist_data['_id']
          };
          this.MyProfileService.removeTrackFromArtistPlaylist(data).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                  dtInstance.draw();
                });
            });
          });
        }
      }
    });
  }

  getRegionList() {
    this.MyProfileService.getAllRegion().subscribe((response) => {
      this.region_list = response['Region'];
    });
  }

  getStateByRegion(id : any) {
    if(id && id != "") {
      this.MyProfileService.getStateByRegion({region : id}).subscribe((response) => {
        this.state_list = response['state'];
      });
    }
  }
  // upgrade to artist
  upgradeToArtist(flag, profile_img) {
    if(flag && profile_img != '') {
      this.upgrade_artist_validation = !flag;
      swal({
        title: 'Upgrade to Artist',
        html: "<strong>Your user profile and saved data has been removed.</strong><br>Do you want to continue?",
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, upgrade it!'
      }).then((result) => {
        if (result.value) {
          this.show_spinner = true;
          let formData: FormData = new FormData();
          // formData.append('email', this.upgrade_artist_data['email']);
          // formData.append('password',this.upgrade_artist_data['password']);
          formData.append('first_name',this.upgrade_artist_data['first_name']);
          formData.append('last_name',this.upgrade_artist_data['last_name']);
          formData.append('zipcode',this.upgrade_artist_data['zipcode']);
          formData.append('gender',this.upgrade_artist_data['gender']);
          formData.append('music_type',this.upgrade_artist_data['music_type']);
          formData.append('image', profile_img);
          formData.append('phone_no', this.upgrade_artist_data['phone_no']);
          formData.append('state', this.upgrade_artist_data['state']);
          formData.append('share_url', JSON.stringify(this.upgrade_artist_data['share_url']));
          formData.append('dob', (new Date(this.upgrade_artist_data['year'], this.upgrade_artist_data['month'], this.upgrade_artist_data['day']).toString()));
          this.MyProfileService.upgradeToArtist(formData).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            localStorage.removeItem('user');
            this.MessageService.sendMessage({upgrade_artist : true});
            this.router.navigate(['']);
          }, (error) => {
            this.show_spinner = false;
            this.toastr.error(error['error'].message, 'Error!');
          }, () => {
            this.show_spinner = false;
          });
        }
      })
    } else {
      this.upgrade_artist_validation = !flag;
    }
  }

  // Stripe Credit-Card implementation
  bank_data : any = {};
  openCardModel(content) {
    this.bank_data = {};
    this.media_modal_ref = this.modalService.open(content, { centered: true, backdrop : true });
  }
  // Add new bank
  addBank(flag) {
    if(flag) {
      this.show_spinner = true;
      this.MyProfileService.addNewPaymentMethod(this.bank_data).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!');
        this.getAllCard();
        this.media_modal_ref.close();
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } 
    this.bank_validation = !flag;
  }
  // get all card
  card_list : any = [];
  getAllCard() {
    this.MyProfileService.getAllBank().subscribe((response) => {
      this.card_list = response['bank'];
      this.card_list.forEach((ele) => {
        ele['account_number'] = ele['account_number'].toString().replace(/.(?=.{4})/g, 'X');
      });
    });
  }
  // remove card
  removeCard(id : any) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((flag) => {
      if(flag.value) {
        this.MyProfileService.removeBank(id).subscribe((response)=>{
          this.toastr.success(response['message'], 'Success!');
          this.getAllCard();
        });
      }
    });
    
  }
  
  // Make payment method default
  markAsDefault(id) {
    this.MyProfileService.markAsDefault(id).subscribe((response) => {
      this.toastr.success(response['message'], 'Success!');
    });
  }
  // Download track
  downloadTrack(id : any) {
    this.MyProfileService.downloadTrack(id).subscribe(response => {
      console.log(response);
      window.location.href = this.user_img_url+response['filename'];
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }
}