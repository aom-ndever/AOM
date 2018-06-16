import { Component, OnInit } from '@angular/core';
import { ArtistProfileService } from './artist_profile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import {ActivatedRoute} from "@angular/router";
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
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  artist_media_url : any = environment.API_URL+environment.ARTIST_MEDIA;
  audio_ins : any = [];
  active_tab_index : any = 1;
  media_list : any = [];
  private _albums: any = [];
  constructor(
    private ArtistProfileService : ArtistProfileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private lightbox: Lightbox
  ) {
    // this.getAllData();
  }

  ngOnInit() {
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.artisttrack = this.route.snapshot.data['track'].track;
    this.artistmedia = this.route.snapshot.data['media'].media;
    for(let i=0; i<this.artistmedia.length; i++) {
      if(this.artistmedia[i].image)
        this._albums.push({src : this.artist_media_url+this.artistmedia[i].image});
    }
    console.log(this.artisttrack);
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
  // get All follower
  // getAllFollower() {
  //   let user = JSON.parse(localStorage.getItem('user'));
  //   if(user) {
  //     this.ArtistProfileService.getFollower().subscribe(response => {
  //       let flag = false;
  //       this.artistdata['artist'].forEach(obj => {
  //         response['user'].forEach(data => {
  //           if(obj._id == data['artist_id']._id) {
  //             flag = true;
  //           }
  //         });
  //         if(flag) {
  //           obj['is_followed'] = true;
  //         } else {
  //           obj['is_followed'] = false;
  //         }
  //       });
  //     });
  //   }
  // }
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }
}
