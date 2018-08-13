import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { HttpEventType,  HttpResponse} from '@angular/common/http';
import { MyProfileService } from './myProfile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { every } from 'rxjs/operator/every';
import { Lightbox } from 'angular2-lightbox';
import { Chart } from 'angular-highcharts';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { MessageService } from '../../shared/message.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-myProfile',
  templateUrl: './myProfile.component.html',
  styleUrls: []
})
export class MyProfileComponent implements OnInit, OnDestroy {
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

  // Profile form group
  artist_profile : FormGroup;
  artistProfileValidation : boolean = false;
  listener_profile : FormGroup;
  listenerProfileValidation : boolean = false;

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
    this.MyProfileService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
    });
    this.artist_profile = this.fb.group({
      upload : [''],
      cover : [''],
      fname : ['', [Validators.required]],
      lname : ['', [Validators.required]],
      gender : ['', [Validators.required]] ,
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10),Validators.maxLength(10)]],
      music_type : ['', [Validators.required]],
      zipcode : ['', [Validators.required]],
      description : [''],
      share_url_fb : [''],
      share_url_insta : [''],
      share_url_twit : [''],
      share_url_youtube : [''],
      share_url_sound : ['']
    });

    this.listener_profile = this.fb.group({
      upload : [''],
      fname : ['', [Validators.required]],
      lname : ['', [Validators.required]],
      gender : ['', [Validators.required]] ,
      day : ['', [Validators.required]],
      month : ['', [Validators.required]],
      year : ['', [Validators.required]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10),Validators.maxLength(10)]],
      zipcode : ['', [Validators.required]],
      music_type : ['']
    });
  }

  ngOnInit() {
    if(this.userdata['type'] == 'artist') {
      this.getMediaList();
      this.calculateDateFromDays(this.analytics_days);
      
      //this.getAllTrackAnalytic({day : this.analytics_days});
      this.getAllOverviewAnalytic({day : 14});
      this.getAllDownloadAnalytic({day : this.analytics_days});
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
  }

  tabChange(cnt : Number) {
    this.tab_cnt = cnt;
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
        }, () => {

        });
      } else {
        this.MyProfileService.updateUserProfileImage(formData).subscribe(response => {
          console.log('uploaded image', response);
          this.default_profile_img = environment.API_URL+environment.USER_IMG+response['image'];
          this.updateLocalStorage();
          this.MessageService.sendMessage({updateProfile : true});
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
        }, () => {

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
      if(this.change_pwd['new'] && this.change_pwd['repeat'] && this.change_pwd['new'] == this.change_pwd['repeat']) {
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
      this.MyProfileService.uploadMedia(formData).subscribe(event => {
        if (event instanceof HttpResponse) {
          this.video_url = '';
          this.toastr.success( event['body']['message'], 'Success!');
          this.getMediaList();
          this.media_modal_ref.close();
        }
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.error('Please provide video url', 'Error!');
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
}