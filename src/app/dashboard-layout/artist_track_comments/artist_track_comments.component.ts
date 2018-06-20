import { Component, OnInit } from '@angular/core';
import { ArtistTrackCommentsService } from './artist_track_comments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute} from "@angular/router";
declare var swal: any;
@Component({
  selector: 'app-track-comments',
  templateUrl: './artist_track_comments.component.html',
  styleUrls: []
})
export class ArtistTrackConmmentsComponent implements OnInit {
  artistdata : any = {};
  track : any = {};
  trackcomments : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  user_img_url : any = environment.API_URL+environment.USER_IMG;
  user : any;
  audio_ins : any = [];
  comment_txt : any = '';
  show_spinner : boolean = false;
  track_id : any = '';
  constructor(
    private ArtistTrackCommentsService : ArtistTrackCommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    
    this.route.params.subscribe(params => {
      this.track_id = params['id'];
    });
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.getAllTrackComment({track_id : this.track_id});
  }

   // Play audio
   playAudio(name : any, index : any){
    let audio = new Audio();
    audio.src = this.track_url+name;
    audio.load();
    audio.play();
    if(!this.audio_ins.hasOwnProperty(index)) {
      this.audio_ins[index] = audio;
    }
  }
  // Stop audio
  stopAudio(index) {
    console.log(this.audio_ins[index]);
    this.audio_ins[index].pause();
    this.audio_ins[index].currentTime = 0;
    // this.audio_ins[index].stop();
    delete this.audio_ins[index];
  }
  
  // Get all comment of track
  getAllTrackComment(data) {
    this.ArtistTrackCommentsService.getAllTrackComment(data).subscribe(response => {
      this.trackcomments = response['comment'];
    });
  }
  // Remove comment
  removeComment(id : any) {
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
        thi.ArtistTrackCommentsService.removeTrackComment(id).subscribe(response => {
          thi.toastr.success(response['message'], 'Success!');
          thi.getAllTrackComment(thi.track_id);
        }, error => {
          thi.toastr.error(error['error'].message, 'Error!');
        });
      }
    });
  }
}
