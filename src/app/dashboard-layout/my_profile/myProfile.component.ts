import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { HttpEventType,  HttpResponse} from '@angular/common/http';
import { MyProfileService } from './myProfile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { every } from 'rxjs/operator/every';
import { Lightbox } from 'angular2-lightbox';
declare var swal: any;
@Component({
  selector: 'app-myProfile',
  templateUrl: './myProfile.component.html',
  styleUrls: []
})
export class MyProfileComponent implements OnInit {
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
  video_url : any = '';
  constructor(private MyProfileService : MyProfileService, 
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private lightbox: Lightbox
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
        this.userdata['month'] = dt.getMonth() + 1;
        this.userdata['year'] = dt.getFullYear();
      }
      if(this.userdata.image) {
        this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.image;
      }
      if(this.userdata.cover_image) {
        this.default_cover_img = environment.API_URL+environment.ARTIST_IMG+this.userdata.cover_image;
      }
    } else {
      this.userdata = {...data['user']};
      this.userdata['type'] = 'user';
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth() + 1;
        this.userdata['year'] = dt.getFullYear();
      }
      if(this.userdata.image) {
        this.default_profile_img = environment.API_URL+environment.USER_IMG+this.userdata.image;
      }
    }
    this.MyProfileService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
    });
  }

  ngOnInit() {
    this.getMediaList();
  }

  tabChange(cnt : Number) {
    this.tab_cnt = cnt;
  }

  // Update user profile
  update() {
    if(this.userdata.type == 'artist') {
      this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
      this.userdata['share_url'] = this.userdata['social_media'];
      this.MyProfileService.updateArtistProfile(this.userdata).subscribe(response => {
        console.log(response);
        this.toastr.success(response['message'], 'Success!');
        this.updateLocalStorage();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.show_spinner = true;
      this.userdata['dob'] = new Date(this.userdata['year'], this.userdata['month'] ,this.userdata['day']);
      this.MyProfileService.updateUserProfile(this.userdata).subscribe(response => {
        console.log(response);
        this.toastr.success(response['message'], 'Success!');
        this.updateLocalStorage();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    }
  }

  updateProfileImage(event: any) {
    const fileList: FileList = event.target.files;
    console.log(fileList);
    let formData: FormData = new FormData();
    formData.append('image', fileList[0]);
    if(this.userdata.type == 'artist') {
      this.MyProfileService.updateArtistProfileImage(formData).subscribe(response => {
        console.log('uploaded image', response);
        this.default_profile_img = environment.API_URL+environment.ARTIST_IMG+response['image'];
        this.updateLocalStorage();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {

      });
    } else {
      this.MyProfileService.updateUserProfileImage(formData).subscribe(response => {
        console.log('uploaded image', response);
        this.default_profile_img = environment.API_URL+environment.USER_IMG+response['image'];
        this.updateLocalStorage();
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
  
  updateCoverImage(event : any) {
    const fileList: FileList = event.target.files;
    console.log(fileList);
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
          this.userdata['month'] = dt.getMonth() + 1;
          this.userdata['year'] = dt.getFullYear();
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
        if(this.userdata.dob) {
          let dt =  new Date(this.userdata.dob);
          this.userdata['day'] = dt.getDate();
          this.userdata['month'] = dt.getMonth() + 1;
          this.userdata['year'] = dt.getFullYear();
        }
        if(this.userdata.image) {
          this.default_profile_img = environment.API_URL+environment.USER_IMG+this.userdata.image;
        }
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
        if(flag) {
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
        if(flag) {
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
        if(flag) {
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
        thi.MyProfileService.removeMediaById(id).subscribe(response =>{
          thi.toastr.success(response['message'], 'Success!');
          thi.getMediaList();
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      });
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }
}

