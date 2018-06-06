import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MyMusicService } from './my_music.service';
declare var swal: any;
@Component({
  selector: 'app-music',
  templateUrl: './my_music.component.html',
  styleUrls: []
})
export class MyMusicComponent implements OnInit {
  show_filter : boolean = false;
  tab_cnt : Number = 1;
  modal_ref : NgbModalRef;
  audio_file : any = '';
  image_upload : any = '';
  edit_image : any = 'img/profile-img.png';
  trackdata : any = {};
  tracklist : any = [];
  show_spinner : boolean = false;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  userinfo : any = '';
  constructor(
    private modalService: NgbModal,
    private MyMusicService : MyMusicService,
    private toastr: ToastrService
  ) {
    this.userinfo = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
      this.getAllTrack();
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }

  tabChanged(val : Number) {
    this.tab_cnt = val;
  }

  changeAudio(event : any) {
    const file = event.target.files[0];
    console.log('audio file', file);
    const allow_types = ['audio/mpeg', 'audio/x-aiff', 'audio/vnd.wav', "audio/mp3"];
    if(event.target.files.length > 0) {
      if(allow_types.indexOf(file.type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
        return false;
      }
      this.audio_file = file;
      
    }
  }

  changeFile(event : any) {
    let file = event.target.files[0];
    if(event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if(allow_types.indexOf(file.type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
        return false;
      }
      this.image_upload = file;
    }
    
    // const reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     const data = {};
    //       let imageBuffer = e.target.result;
    //       this.image_upload = imageBuffer;
    //   };
    //   reader.readAsDataURL(event.target.files[0]);
      
  }

  changeTrackImage(event : any) {
    let file = event.target.files[0];
    if(event.target.files.length > 0) {
      const allow_types = ['image/png', 'image/jpg', 'image/jpeg'];
      if(allow_types.indexOf(file.type) == -1) {
        this.toastr.error('Invalid file format.','Error!');
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
    this.modal_ref = this.modalService.open(content, { centered: true });
  }

  // open edit track model
  openEditTrackModal(content : any, obj : any) {
    this.trackdata = obj;
    if(obj.image) {
      this.edit_image = environment.API_URL+environment.ARTIST_TRACK+obj.image;
    }
    this.modal_ref = this.modalService.open(content, { centered: true });
  }
  
  addTrack() {
    if(this.trackdata && this.trackdata.name && this.trackdata.price && this.audio_file && this.image_upload) {
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
        this.toastr.success(response['message'],'Success!');
        this.getAllTrack();
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else if(!this.audio_file) {
      this.toastr.error('Please select audio file', 'Error!');
    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
  }
  // Get all track
  getAllTrack() {
    this.MyMusicService.getAllTrack().subscribe(response => {
      console.log(response);
      this.tracklist = response['track'];
    });
  }
  // Remove track by id
  removeTrack(id : any) {
    const thi = this;
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
        thi.MyMusicService.deleteTrackById(id).subscribe(response => {
          thi.getAllTrack();
          thi.toastr.success(response['message'], 'Success!');
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        },);
      }
    });
  }

  // update track
  updateTrack() {
    this.show_spinner = true;
      if(this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.image) {
        let formdata = new FormData();
        formdata.append('name', this.trackdata.name);
        formdata.append('price', this.trackdata.price);
        formdata.append('image', this.trackdata.image);
        formdata.append('description', this.trackdata.description);
        this.MyMusicService.updateTrack(formdata, this.trackdata._id).subscribe(response => {
          this.getAllTrack();
          this.toastr.success(response['message'], 'Success!');
        }, error => {
          this.toastr.error(error['error'].message, 'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
  }
}
