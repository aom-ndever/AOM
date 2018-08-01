import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MyMusicService } from './my_music.service';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableDirective } from 'angular-datatables';
import swal from 'sweetalert2'
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
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  show_filter : boolean = false;
  tab_cnt : Number = 1;
  modal_ref : NgbModalRef;
  audio_file : any = '';
  image_upload : any = '';
  edit_image : any = 'img/profile-img.png';
  trackdata : any = {};
  tracklist : any = [];
  show_spinner : boolean = false;
  audio_ins : any = [];
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  userinfo : any = '';
  music_type_list : any = [];
  contest_list : any = [];
  contest_id : any = '';
  add_track_img : any = '';
  add_track_audio : any = '';
  subscription: Subscription;
  constructor(
    private modalService: NgbModal,
    private MyMusicService : MyMusicService,
    private toastr: ToastrService,
    private MessageService : MessageService
  ) {
    this.userinfo = JSON.parse(localStorage.getItem('user'));
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
    });
    const that = this;
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          setTimeout(() => {
            that.audio_ins = [];
            that.MyMusicService.getAllTrack(dataTablesParameters).subscribe(response => {
              that.tracklist = response['track']['music'];
              that.tracklist.forEach((ele) => {that.audio_ins.push(false);});
              callback({
                recordsTotal: response['track']['recordsTotal'],
                recordsFiltered: response['track']['recordsTotal'],
                data: []
              });
            });
          }, 0)
          
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
  }

  ngOnInit() {
      // this.getAllTrack();
      this.getAllMusicType();
      this.getAllContest();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
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
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = {};
          let imageBuffer = e.target.result;
          this.add_track_img = imageBuffer;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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
    this.trackdata = {};
    this.add_track_img = '';
    this.add_track_audio = '';
    this.modal_ref = this.modalService.open(content, { centered: true, windowClass:'add-track-popup', backdrop : 'static' });
  }

  // open edit track model
  openEditTrackModal(content : any, obj : any) {
    this.trackdata = {...obj};
    console.log(obj);
    if(!obj.description || obj.description == "undefined") {
      this.trackdata['description'] = '';
    }
    if(obj.image) {
      this.edit_image = environment.API_URL+environment.ARTIST_TRACK+obj.image;
    } else {
      this.edit_image = 'img/profile-img.png'
    }
    this.modal_ref = this.modalService.open(content, { centered: true, backdrop : 'static', windowClass:'add-track-popup' });
  }

  // Open contest modal
  openContestModal(content : any, obj : any) {
    this.trackdata = obj;
    this.modal_ref = this.modalService.open(content, { centered: true, windowClass:'new-add-track-popup', backdrop : 'static'});
  }
  
  addTrack() {
    if(this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.price > 0 && this.audio_file && this.image_upload) {
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
    } else if(!this.audio_file) {
      this.toastr.error('Please select audio file', 'Error!');
    } else if(!this.image_upload) {
      this.toastr.error('Please select track image', 'Error!');
    } else if(!this.trackdata.name) {
      this.toastr.error('Please select track name', 'Error!');
    } else if(!this.trackdata.price) {
      this.toastr.error('Please select track price', 'Error!');
    } else if(this.trackdata.price < 0) {
      this.toastr.error('Track price must be positive value.', 'Error!');
    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
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
    }).then((flag) => {
      if(flag.value) {
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
      if(this.trackdata && this.trackdata.name && this.trackdata.price && this.trackdata.price > 0 && this.trackdata.image) {
        let formdata = new FormData();
        formdata.append('name', this.trackdata.name);
        formdata.append('price', this.trackdata.price);
        formdata.append('image', this.trackdata.image);
        formdata.append('description', this.trackdata.description);
        this.MyMusicService.updateTrack(formdata, this.trackdata._id).subscribe(response => {
          if(!response['track']['image']) {
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
    } else if(!this.trackdata.image) {
      this.toastr.error('Please select track image', 'Error!');
    } else if(!this.trackdata.name) {
      this.toastr.error('Please select track name', 'Error!');
    } else if(!this.trackdata.price) {
      this.toastr.error('Please select track price', 'Error!');
    } else if(this.trackdata.price < 0) {
      this.toastr.error('Track price must be positive.', 'Error!');
    } else {
      this.toastr.error('Please provide necessary details', 'Error!');
    }
  }
  // Remove track image
  removeTrackImage(id : any) {
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
      if(flag.value) {
        thi.MyMusicService.deleteTrackImageById(id).subscribe(response => {
          thi.getAllTrack();
          thi.edit_image = 'img/profile-img.png';
          delete this.trackdata['image'];
          thi.toastr.success(response['message'], 'Success!');
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        },);
      }
    });
  }
  // Play audio
  playAudio(name : any, index : any, data : any){
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
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 1});
  }
  // Stop audio
  stopAudio(index, data : any) {
    // console.log(this.audio_ins[index]);
    // this.audio_ins[index].pause();
    // this.audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.audio_ins[index];
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 1});
  }
  // Get all music type
  getAllMusicType() {
    this.MyMusicService.getAllMusicType().subscribe(response => {
      this.music_type_list = response['music'];
    });
  }
  // Get all contest
  getAllContest() {
    this.MyMusicService.getAllContest().subscribe(response => {
      this.contest_list = response['contest'];
    });
  }
  // Add a track to contest
  addTrackToContest() {
    if(this.contest_id) {
      let data = {
        contest_id : this.contest_id,
        track_id : this.trackdata._id
      };
      this.show_spinner = true;
      this.MyMusicService.addTrackToContest(data).subscribe(response => {
        this.contest_id = '';
        this.modal_ref.close();
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
        this.show_spinner = false;
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.toastr.error('Please select at least one contest', 'Error!');
    }
  }
  // Update download status
  updateTrackDownLoadStatus(id : any) {
    this.MyMusicService.trackDownload(id).subscribe(response => {
      this.toastr.success(response['message'], 'Success!');
    }, error => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }
}