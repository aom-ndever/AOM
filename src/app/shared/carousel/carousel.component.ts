import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { environment } from '../../../environments/environment';
import { MessageService } from '../message.service';

@Component({
  moduleId: module.id,
  selector: 'app-carousel-scroll',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: any[];
  @Input() showFavourit: boolean;
  @Input() carouselType : any;
  public carouselOne: NgxCarousel;
  track_url : any = environment.API_URL+environment.ARTIST_TRACK;
  audio_ins : any = [];
  constructor(
    private MessageService : MessageService
  ) {
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
  }

  // Play audio
  playAudio(name : any, index : any, data : any){
    // let audio = new Audio();
    // audio.src = this.track_url+name;
    // audio.load();
    // audio.play();
    if(!this.audio_ins.hasOwnProperty(index)) {
      this.audio_ins[index] = this.track_url+name;
      // this.audio_ins[index] = audio;
      this.MessageService.sendMessage({data : data, index : index, action : 'start'});
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
}
