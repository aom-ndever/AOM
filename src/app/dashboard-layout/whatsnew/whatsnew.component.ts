import { Component, OnInit } from '@angular/core';
import { WhatsNewService } from './whatsnew.service';
import { environment } from '../../../environments/environment' ;

@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: []
})
export class WhatsNewComponent implements OnInit {
  
  images: any = [];
  show_filter : any = false;
  whatsnewdata : any = [];
  artist_img_url : any = environment.API_URL+environment.ARTIST_IMG;
  track_img_url : any = environment.API_URL+environment.ARTIST_TRACK;
  constructor(private WhatsNewService : WhatsNewService) {
    this.images =  [
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 1",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      },
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 2",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      },
      {
        "source": "img/whats-new-bg.png",
        "alt": "Description for Image 3",
        "title": "Quarter Final",
        "name": "Title 1",
        "location": "Title 1",
        "type": "Title 1",
        "description" : "Ut enim ad minim veniam",
        "enable": true
      }];
   }

  ngOnInit() {
    this.getAllData();
  }

  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  
  // Get all whatsnew data
  getAllData() {
    let data = {};
    this.WhatsNewService.getWhatsnewData(data).subscribe(response => {
      this.whatsnewdata = response['whatsnew'];
    });
  }
}
