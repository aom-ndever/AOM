import { Component, OnInit } from '@angular/core';
import { MyProfileService } from './myProfile.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private MyProfileService : MyProfileService, private toastr: ToastrService) {
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
    } else {
      this.userdata = {...data['user']};
      this.userdata['type'] = 'user';
      if(this.userdata.dob) {
        let dt =  new Date(this.userdata.dob);
        this.userdata['day'] = dt.getDate();
        this.userdata['month'] = dt.getMonth() + 1;
        this.userdata['year'] = dt.getFullYear();
      }
    }
    this.MyProfileService.getAllMusicType().subscribe(response => {
      this.music_types = response['music'];
    });
  }

  ngOnInit() {
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
        this.MyProfileService.getArtistById().subscribe(res => {
          console.log('artist', res);
          let data = JSON.parse(localStorage.getItem('user'));
          data['artist'] = res['artist'];
          localStorage.setItem('user', JSON.stringify(data));
        });
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
        this.MyProfileService.getUserById().subscribe(res => {
          let data = JSON.parse(localStorage.getItem('user'));
          data['user'] = res['user'];
          localStorage.setItem('user', JSON.stringify(data));
        });
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
    const formData: FormData = new FormData();
    formData.append('image', fileList[0], fileList[0]['name']);
    if(this.userdata.type == 'artist') {
      this.MyProfileService.updateArtistProfileImage(formData).subscribe(response => {
        console.log('uploaded image', response);
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {

      });
    } else {

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
