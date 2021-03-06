import { Component, OnInit } from "@angular/core";
import { ArtistService } from "./artist.service";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../src/environments/environment";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: [],
})
export class ArtistComponent implements OnInit {
  artistdata: any = {
    artist: [],
  };
  show_filter: any = false;
  toggSearch = false;
  show_loader = false;
  user: any = {};
  search_str: any = "";
  adv_filter: any = {};
  region_filter: any = [];
  artistv1: any = {
    chart_toppers: [],
    rising_stars: [],
  };
  music_list: any = [];
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  audio_ins: any = [];
  state_list: any = [];
  my_follower_list: any = [];
  length: any = 10;

  constructor(
    private artistService: ArtistService,
    private toastr: ToastrService,
    private titleService: Title,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    window.scroll(0, 0);
    this.titleService.setTitle(this.route.snapshot.data["title"]);
    this.getAllState();
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.ngxService.start();
    this.getAllData();
    this.getAllArtistV1Data({});
    this.getAllMusicType();
    this.getMyFollower();
  }
  toggleFilter() {
    this.show_filter = !this.show_filter;
  }
  // Get all whatsnew data
  getAllData() {
    const data = {};
    this.artistService.getArtistData(data).subscribe((response) => {
      this.artistdata = response;
      this.getAllFollower();
    });
  }
  // Get all artistv1 data
  getAllArtistV1Data(data) {
    this.show_loader = true;
    this.artistService.getAllArtistv1(data).subscribe((response) => {
      this.ngxService.stop();
      this.artistv1 = response;
      this.show_filter = false;
      this.show_loader = false;
      this.getAllFollower();
    });
  }
  // Play audio
  playAudio(name: any, index: any) {
    const audio = new Audio();
    audio.src = this.track_url + name;
    audio.load();
    audio.play();
    if (!this.audio_ins.hasOwnProperty(index)) {
      this.audio_ins[index] = audio;
    }
  }
  // Stop audio
  stopAudio(index) {
    this.audio_ins[index].pause();
    this.audio_ins[index].currentTime = 0;
    // this.audio_ins[index].stop();
    delete this.audio_ins[index];
  }
  // Follow artist
  followArtist(id: any, index: any) {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data && data.user) {
      const artist_data = {
        artist_id: id,
      };
      // this.artistdata['artist'][index]['is_followed'] = true;
      this.artistService.followArtist(artist_data).subscribe(
        (response) => {
          this.toastr.success(response["message"], "Success!");
          this.getAllFollower();
          this.getMyFollower();
        },
        (error) => {
          // this.artistdata['artist'][index]['is_followed'] = false;
          this.toastr.error(error["error"].message, "Error!");
        }
      );
    } else {
      this.toastr.info(
        "Please signin as listener to follow the artist.",
        "Information!"
      );
    }
  }
  // get All follower
  getAllFollower() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user["user"]) {
      this.artistService.getFollower().subscribe((response) => {
        this.artistv1["rising_stars"].forEach((ele) => {
          if (
            response["artist"] &&
            response["artist"].indexOf(ele["_id"]) !== -1
          ) {
            ele["is_followed"] = true;
          } else {
            ele["is_followed"] = false;
          }
        });
        this.artistv1["chart_toppers"].forEach((ele) => {
          if (
            response["artist"] &&
            response["artist"].indexOf(ele["artist"]["_id"]) !== -1
          ) {
            ele["artist"]["is_followed"] = true;
          } else {
            ele["artist"]["is_followed"] = false;
          }
        });
      });
    }
  }
  // Get all music list
  getAllMusicType() {
    this.artistService.getAllMusicType().subscribe((response) => {
      this.music_list = response["music"];
    });
  }
  // Get my follower
  getMyFollower() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user["user"]) {
      this.artistService.getMyFollower().subscribe((response) => {
        this.my_follower_list = response["user"];
      });
    }
  }
  // filter artistv1
  filterArtistv1(e: any) {
    // if (e.keyCode == 13) {
    if (this.search_str.trim().length > 0) {
      const data = {
        search: this.search_str.trim(),
        start: 0,
        length: this.length,
      };
      this.getAllArtistV1Data(data);
    }
    // }
  }
  // Add region for filtering
  addRegionForFilter(flag: any, val: any) {
    if (flag) {
      this.region_filter.push(val);
    } else {
      const index = this.region_filter.indexOf(val);
      this.region_filter.splice(index, 1);
    }
  }
  // advanceFilter
  advanceFilter() {
    const data = {
      start: 0,
      length: this.length,
      filter: [],
    };
    if (this.adv_filter.music_type && this.adv_filter.music_type !== "") {
      data["music_type"] = this.adv_filter.music_type;
      // data['filter'].push({
      //   'field' : 'music_type', value :  this.adv_filter.music_type
      // });
    }
    if (this.region_filter.length > 0) {
      data["state"] = this.region_filter;
      // data['filter'].push({
      //   'field' : 'state', value :  this.region_filter
      // });
    }
    this.show_filter = false;
    this.show_loader = true;
    this.getAllArtistV1Data(data);
  }

  // get all state
  getAllState() {
    this.artistService.getAllState().subscribe((response) => {
      this.state_list = response["state"];
    });
  }
  toggleSearch() {
    this.toggSearch = !this.toggSearch;
  }
}
