import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { environment } from '../../../environments/environment';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';
import { CarouselService } from './carousel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  moduleId: module.id,
  selector: 'app-carousel-scroll',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() images: any[];
  @Input() showFavourit: boolean;
  @Input() carouselType : any;
  @Input() allData : any;
  public carouselOne: NgxCarousel;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  subscription: Subscription;
  flag : boolean = true;
  constructor(
    private MessageService : MessageService,
    private CarouselService : CarouselService,
    private toastr: ToastrService
  ) {
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
      if(response && response['action'] == 'bottom_play' && response['list'] == 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
        this.audio_ins[response['index']] = true;
      }
      if(response && response['music_flag']) {
        console.log('carousel =>', response['music_flag']);
        this.flag = response['music_flag'] == 'yes' ? true : false;
      }
    });
    
  }
  onChange(index: any) {
    if (this.images[index]['enable']) {
      this.images[index]['enable'] = false;
    } else {
      this.images[index]['enable'] = true;
    }
  }
  ngOnInit() {
    if(this.carouselType == 'normal') {
      this.carouselOne = {
        grid: { xs: 1, sm: 12, md: 3, lg: 4, all: 0 },
        slide: 1,
        speed: 400,
        interval: 2000,
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner',
        point: {
          visible: true
        },
      };
    } else {
      this.carouselOne = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        slide: 1,
        speed: 400,
        interval: 2000,
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner',
        point: {
          visible: true
        },
      };
    }

    this.images.forEach((ele) => {
      this.audio_ins.push(false);
    });
    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.getAllFollower();
  }

  // Play audio
  playAudio(name : any, index : any, data : any){
    // let audio = new Audio();
    // audio.src = this.track_url+name;
    // audio.load();
    // audio.play();
    // if(!this.audio_ins.hasOwnProperty(index)) {
    //   this.audio_ins[index] = this.track_url+name;
      // this.audio_ins[index] = audio;
      data.forEach((ele, idx) => {
        this.audio_ins[idx] = false;
      });
      this.audio_ins[index] = true;
      this.MessageService.sendMessage({data : this.allData, index : index, action : 'start', list : 1});
    // }
  }
  // Stop audio
  stopAudio(index : any, data : any) {
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : this.allData, index : index, action : 'stop', list : 1});
  }
  // Follow artist
  followArtist(id : any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user['user']) {
      let data = {
        'artist_id' : id
      };
      this.CarouselService.followArtist(data).subscribe((response) => {
        this.toastr.success(response['message'], 'Success!');
        this.getAllFollower();
      },(error) => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login first to follow the artist', 'Information!');
    }
    
  }
   // get All follower
   getAllFollower() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user['user']) {
      console.log('dgdfgdfg',this.images);
      this.CarouselService.getFollower().subscribe(response => {
        this.images.forEach((ele) => {
          if(response['artist'] && response['artist'].indexOf(ele['artist_id']) != -1) {
            ele['is_followed'] = true;
          } else {
            ele['is_followed'] = false;
          }
        });
      });
    }
  }
}
