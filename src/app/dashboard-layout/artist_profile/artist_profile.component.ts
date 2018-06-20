import { Component, OnInit } from '@angular/core';
import { ArtistProfileService } from './artist_profile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute, Router} from "@angular/router";
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-artist_profile',
  templateUrl: './artist_profile.component.html',
  styleUrls: []
})
export class ArtistProfileComponent implements OnInit {
  artistdata : any = {};
  artisttrack : any = {};
  artistmedia : any = {};
  rankingtrack : any = [];
  artistfollower : any = {};
  artistcomments : any = [];
  display_comment : any = [];
  sort_artist_track : any = '';
  sort_ranking_tack : any = '';
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  artist_media_url : any = environment.API_URL+environment.ARTIST_MEDIA;
  user_img_url : any = environment.API_URL+environment.USER_IMG;
  audio_ins : any = [];
  rank_audio_ins : any = [];
  active_tab_index : any = 1;
  media_list : any = [];
  private _albums: any = [];
  constructor(
    private ArtistProfileService : ArtistProfileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private lightbox: Lightbox
  ) {
    // this.getAllData();
  }

  ngOnInit() {
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.artisttrack = this.route.snapshot.data['track'].track;
    this.artistmedia = this.route.snapshot.data['media'].media;
    this.artistfollower = this.route.snapshot.data['follower'].user;
    this.artistcomments = this.route.snapshot.data['comments'].comment;
    this.rankingtrack = this.route.snapshot.data['ranking'].track;
    if(this.artistcomments.length > 3) {
      this.display_comment = this.artistcomments.slice(0,3).map(i => {
        return i;
      });
    } else {
      this.display_comment = this.artistcomments;
    }
    for(let i=0; i<this.artistmedia.length; i++) {
      if(this.artistmedia[i].image)
        this._albums.push({src : this.artist_media_url+this.artistmedia[i].image});
    }
    console.log(this.artistfollower);
  }

  manageTabChange(index : any) {
    this.active_tab_index = index;
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
  // Play audio
  playRankAudio(name : any, index : any){
    let audio = new Audio();
    audio.src = this.track_url+name;
    audio.load();
    audio.play();
    if(!this.rank_audio_ins.hasOwnProperty(index)) {
      this.rank_audio_ins[index] = audio;
    }
  }
  // Stop audio
  stopRankAudio(index) {
    console.log(this.audio_ins[index]);
    this.rank_audio_ins[index].pause();
    this.rank_audio_ins[index].currentTime = 0;
    // this.audio_ins[index].stop();
    delete this.rank_audio_ins[index];
  }
  // Follow artist
  followArtist(id : any, index : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data && data.user) {
      let data = {
        artist_id : id
      };
      this.ArtistProfileService.followArtist(data).subscribe(response => {
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login first to follow the artist.', 'Information!');
    }
  }
  // Open artist media in lightbox
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }
  // Like the track
  likeTrack(track_id : any, index : any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user) {
      this.artisttrack[index].no_of_likes += 1;
      let data = {
        "track_id": track_id,
        "artist_id" : this.artistdata._id,
        "status" :true
      };
      this.ArtistProfileService.trackLike(data).subscribe(response => {
        if(response['message'] == 'Already liked'){
          this.artisttrack[index].no_of_likes -= 1;
        }
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.artisttrack[index].no_of_likes -= 1;
        this.toastr.error(error['error'].message, 'Error!');
      } );
    } else {
      this.toastr.info('Please login to like the track.');
    }
    
  }
  // Like the track
  likeRankTrack(track_id : any, index : any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user) {
      this.rankingtrack[index].no_of_likes += 1;
      let data = {
        "track_id": track_id,
        "artist_id" : this.artistdata._id,
        "status" :true
      };
      this.ArtistProfileService.trackLike(data).subscribe(response => {
        if(response['message'] == 'Already liked'){
          this.rankingtrack[index].no_of_likes -= 1;
        }
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.rankingtrack[index].no_of_likes -= 1;
        this.toastr.error(error['error'].message, 'Error!');
      } );
    } else {
      this.toastr.info('Please login to like the track.');
    } 
  }
  // Vist track comment page
  goToComment(artist_id : any, id : any) {
    this.router.navigate(['artist_profile/'+artist_id+'/track/'+id+'/comments']);
  }
  // sortArtistTrack
  sortArtistTrack(artist_id : any, sortBy : any) {
    let data = {
      "artist_id": artist_id,
	    "sort_by" : sortBy
    };
    this.ArtistProfileService.getAllTrack(data).subscribe(response => {
      this.artisttrack = response['track'];
    });
  }

  // sortRankingTrack
  sortRankingTrack(artist_id : any, sortBy : any) {
    let data = {
      "artist_id": artist_id,
	    "sort_by" : sortBy
    };
    this.ArtistProfileService.getAllRanking(data).subscribe(response => {
      this.rankingtrack = response['track'];
    });
  }
  // Download track
  downloadTrack(id : any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user) {
      this.ArtistProfileService.downloadTrack(id).subscribe(response => {
        console.log(response);
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else if(user && user.artist) {
      this.toastr.info('Only listenr can download this track.', 'Info!');
    } 
    else {
      this.toastr.info('Please login to download this track.', 'Info!');
    }
  }
}
