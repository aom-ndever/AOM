import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: []
})
export class VoteComponent implements OnInit {
  show_filter : boolean = false;
  music_list : any = [];
  state_list : any = [];
  toggSearch : boolean = false;
  show_loader : boolean = false;
  search_str : any = '';
  adv_filter : any = {};
  region_filter : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  my_follower_list : any = [];
  participants : any = [];
  start : any = 0;
  length : any = 10;
  constructor(
    private VoteService : VoteService,
    private toastr : ToastrService
  ) {
    this.getAllState();
    this.getAllMusicType();
    let data = {
      start : this.start,
      length : this.length
    };
    this.getAllParticipants(data);
  }

  ngOnInit() {
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  // Get all music list
  getAllMusicType() {
    this.VoteService.getAllMusicType().subscribe(response => {
      this.music_list = response['music'];
    });
  }
  // get all state
  getAllState() {
    this.VoteService.getAllState().subscribe((response) => {
      this.state_list = response['state'];
    });
  }
  // Get all participants
  getAllParticipants(data) {
    this.show_loader = true;
    this.VoteService.getAllParticipants(data).subscribe((response) => {
      this.participants = response['artist'];
      this.show_loader = false;
    });
  }
   // Follow artist
   followArtist(id : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.user) {
      let data = {
        artist_id : id
      };  
      this.VoteService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!'); 
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please signin as listener to follow the artist.', 'Information!');
    }
  }
  // vote to the track
  voteTrack(track_id, artist_id) {

  }
}
