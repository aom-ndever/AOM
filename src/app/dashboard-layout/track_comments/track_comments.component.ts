import { Component, OnInit } from '@angular/core';
import { TrackCommentsService } from './track_comments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-track-comments',
  templateUrl: './track_comments.component.html',
  styleUrls: []
})
export class TrackConmmentsComponent implements OnInit {
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
  constructor(
    private TrackCommentsService : TrackCommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.trackcomments = this.route.snapshot.data['comment'].comment;
    this.track = this.route.snapshot.data['track']['track'].track;
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.track);
  }

  ngOnInit() {
    
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
  // Post comment
  postComment() {
    if(this.comment_txt) {
      this.show_spinner = true;
      let data = {
        "track_id": this.track._id,
	      "artist_id": this.artistdata._id,
        "comment" : this.comment_txt
      };
      this.TrackCommentsService.addCommentToTrack(data).subscribe(response => {
        this.comment_txt = '';
        this.getAllTrackComment();
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.show_spinner = false;
        this.toastr.error(error['error'].message, 'Error!');
      }, () => {
        this.show_spinner = false;
      });
    } else {
      this.toastr.error('Comment shouldn\'t be empty.', 'Error!');
    }
  }
  // Get all comment of track
  getAllTrackComment() {
    let data = {
      track_id : this.track._id
    };
    this.TrackCommentsService.getAllTrackComment(data).subscribe(response => {
      this.trackcomments = response['comment'];
    });
  }
}
