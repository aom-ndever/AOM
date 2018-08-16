import { Component, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { ArtistProfileService } from './artist_profile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment' ;
import { DataTableDirective } from 'angular-datatables';
import {ActivatedRoute, Router} from "@angular/router";
import { Lightbox } from 'angular2-lightbox';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
declare var FB : any;

@Component({
  selector: 'app-artist_profile',
  templateUrl: './artist_profile.component.html',
  styleUrls: []
})
export class ArtistProfileComponent implements OnInit, OnDestroy {
  @ViewChildren(DataTableDirective) 
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  artistdata : any = {};
  artisttrack : any = [];
  artistmedia : any = [];
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
  subscription: Subscription;
  sort_by : any = '';
  private modalRef: NgbModalRef;
  private emailmodalRef: NgbModalRef;
  private phonemodalRef: NgbModalRef;
  share_data : any = {};
  share_form : FormGroup;
  share_form_phone : FormGroup;
  share_form_validation : boolean = false;
  user : any = '';
  show_spinner : boolean = false;
  track_data : any = {};
  constructor(
    private ArtistProfileService : ArtistProfileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private lightbox: Lightbox,
    private MessageService : MessageService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    // this.getAllData();
    this.subscription = this.MessageService.getMessage().subscribe((response) => {
      if(response && response['list'] != 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
      }
      if(response && response['list'] != 2) {
        this.rank_audio_ins.forEach((ele, idx) => { this.rank_audio_ins[idx] = false; } );
      }
      if(response && response['action'] == 'stop' && response['list'] == 1) {
        this.audio_ins[response['index']] = false;
      }
      if(response && response['action'] == 'stop' && response['list'] == 2) {
        this.rank_audio_ins[response['index']] = false;
      }
      if(response && response['action'] == 'start' && response['list'] == 1) {
        this.audio_ins[response['index']] = true;
      }
      if(response && response['action'] == 'start' && response['list'] == 2) {
        this.rank_audio_ins[response['index']] = true;
      }
      if(response && response['list'] == 1 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; } );
          this.audio_ins[response['index']] = true;
        }
      }
      if(response && response['list'] == 2 && response['action'] == 'next' || response['action'] == 'prev' ) {
        if(response['track_action'] && response['track_action'] == 'pause') {
          this.rank_audio_ins.forEach((ele, idx) => { this.rank_audio_ins[idx] = false; } );
          this.rank_audio_ins[response['index']] = true;
        }
      }
    });
    this.share_form = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    });
    this.share_form_phone = this.fb.group({
      phone : ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.artistdata = this.route.snapshot.data['artist'].artist;
    // this.artisttrack = this.route.snapshot.data['track'].track;
    this.artistmedia = this.route.snapshot.data['media'].media;
    this.artistfollower = this.route.snapshot.data['follower'].artist;
    this.artistcomments = this.route.snapshot.data['comments'].comment;
    // this.rankingtrack = this.route.snapshot.data['ranking'].track;
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
    const that = this;
    this.route.params.subscribe(params => {
      this.dtOptions[0] = {
        pagingType: 'full_numbers',
        pageLength: 5,
        serverSide: true,
        processing: true,
        searching: false,
        ordering: false,
        lengthChange: false,
        responsive: true,
        // scrollY :'315px',
        // scrollCollapse: true,
        ajax: (dataTablesParameters: any, callback) => {
          console.log(dataTablesParameters);
          setTimeout(() => {
            that.audio_ins = [];
            dataTablesParameters['artist_id'] = params['id'];
            dataTablesParameters['sort'] = this.sort_by;
            that.ArtistProfileService.getAllTrack(dataTablesParameters).subscribe(response => {
              that.artisttrack = response['track']['music'];
              if(that.artisttrack.length > 0) {
                that.artisttrack.forEach((ele) => {that.audio_ins.push(false);});
                // that.artisttrack.forEach((ele) => {ele['is_bookmarked'] = false;});
                if(that.user && that.user['user']) {
                  that.ArtistProfileService.getBookmarkedTrackList().subscribe((response) => {
                    console.log('bookmarked', response);
                    let bookmark_list = response['bookmark'];
                    that.artisttrack.forEach((ele) => {
                      let flag = false;
                      bookmark_list.forEach((bookmark) => {
                        if(bookmark['track_id']['_id'] == ele['_id']) {
                          flag = true;
                          return;
                        }
                      });
                      ele['is_bookmarked'] = flag;
                    });
                  });
                }
                
              }
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
      this.dtOptions[1] = {
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
            dataTablesParameters['artist_id'] = params['id'];
            that.ArtistProfileService.getAllRanking(dataTablesParameters).subscribe(response => {
              that.rankingtrack = response['track']['music'];
              that.rankingtrack.forEach((ele) => {that.audio_ins.push(false);});
              // that.rankingtrack.forEach((ele) => {ele['is_bookmarked'] = false;});
              if(that.user && that.user['user']) {
                that.ArtistProfileService.getBookmarkedTrackList().subscribe((response) => {
                  console.log('bookmarked', response);
                  let bookmark_list = response['bookmark'];
                  that.rankingtrack.forEach((ele) => {
                    let flag = false;
                    bookmark_list.forEach((bookmark) => {
                      if(bookmark['track_id']['_id'] == ele['_id']) {
                        flag = true;
                        return;
                      }
                    });
                    ele['is_bookmarked'] = flag;
                  });
                });
              }
              
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
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  openShareTrackModel(content, index : any, type : any) {
    if(type == 'track') {
      this.track_data = this.artisttrack[index];
    } else {
      this.track_data = this.rankingtrack[index];
    }
    this.modalRef = this.modalService.open(content, { centered: true, windowClass : 'modal-wrapper', backdrop : true });
  }
  openEmailShareTrackModel(content) {
    if(this.user) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop : true });
    } else {
      this.toastr.info('Login first to share track via email', 'Information!');
    }
  }
  openPhoneShareTrackModel(content) {
    if(this.user) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop : true });
    } else {
      this.toastr.info('Login first to share track via sms', 'Information!');
    }
  }

  manageTabChange(index : any) {
    this.active_tab_index = index;
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
  // Play audio
  playRankAudio(name : any, index : any, data : any){
    // let audio = new Audio();
    // audio.src = this.track_url+name;
    // audio.load();
    // audio.play();
    // if(!this.rank_audio_ins.hasOwnProperty(index)) {
    //   this.rank_audio_ins[index] = audio;
    // }
    data.forEach((ele, idx) => {
      this.rank_audio_ins[idx] = false;
    });
    this.rank_audio_ins[index] = true;
    this.MessageService.sendMessage({data : data, index : index, action : 'start', list : 2});
  }
  // Stop audio
  stopRankAudio(index, data : any) {
    // console.log(this.audio_ins[index]);
    // this.rank_audio_ins[index].pause();
    // this.rank_audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.rank_audio_ins[index];
    data.forEach((ele, idx) => {
      this.rank_audio_ins[idx] = false;
    });
    this.MessageService.sendMessage({data : data, index : index, action : 'stop', list : 2});
  }
  // Follow artist
  followArtist(id : any, index : any) {
    let data = JSON.parse(localStorage.getItem('user'));
    if(data) {
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
  sortArtistTrack(idx : any, sortBy : any) {
    // let data = {
    //   "artist_id": artist_id,
	  //   "sort_by" : sortBy
    // };
    // this.ArtistProfileService.getAllTrack(data).subscribe(response => {
    //   this.artisttrack = response['track'];
    // });
    this.sort_by = sortBy;
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if(idx == index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }

  // sortRankingTrack
  sortRankingTrack(idx : any, sortBy : any) {
    // let data = {
    //   "artist_id": artist_id,
	  //   "sort_by" : sortBy
    // };
    // this.ArtistProfileService.getAllRanking(data).subscribe(response => {
    //   this.rankingtrack = response['track'];
    // });
    this.sort_by = sortBy;
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if(idx == index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }
  // Download track
  downloadTrack(id : any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user) {
      this.ArtistProfileService.downloadTrack(id).subscribe(response => {
        console.log(response);
        window.location.href = this.user_img_url+response['filename'];
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

  // Bookmark particular track
  bookMarkTrack(id : any, index : any, type : any) {
    if(this.user && this.user['user']) {
      if(type == 'track') {
        this.artisttrack[index]['is_bookmarked'] = !this.artisttrack[index]['is_bookmarked'];
        let data = {
          track_id : id
        };
        this.ArtistProfileService.bookmarkTrack(data).subscribe((response) => {
          this.toastr.success(response['message'],'Success!');
        }, (error) => {
          this.artisttrack[index]['is_bookmarked'] = !this.artisttrack[index]['is_bookmarked'];
          this.toastr.error(error['error'].message,'Error!');
        });
        
      } else {
        this.rankingtrack[index]['is_bookmarked'] = !this.rankingtrack[index]['is_bookmarked'];
        let data = {
          track_id : id
        };
        this.ArtistProfileService.bookmarkTrack(data).subscribe((response) => {
          this.toastr.success(response['message'],'Success!');
        }, (error) => {
          this.rankingtrack[index]['is_bookmarked'] = !this.rankingtrack[index]['is_bookmarked'];
          this.toastr.error(error['error'].message,'Error!');
        });
      }
    } else {
      this.toastr.info('Please signin as listener to bookmark the track.', 'Information!');
    }
  }

    // share on facebook
    shareOnFacebook() {
      let track = this.track_data;
      console.log(track);
      let url = 'http://'+window.location.host+'/artist_profile/'+track['artist_id']['_id']+'/track/'+track['_id']+'/comments';
      let str = "Track Name: "+track['name']+"\nArtist: "+track['artist_id']['first_name']+' '+track['artist_id']['last_name']+'\nDescription: '+track['description'];
      // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
      // if(facebookWindow.focus) { facebookWindow.focus(); }
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties : JSON.stringify({
          object : {
            'og:url' : url,
            'og:title' : 'AOM',
            'og:description' : str
          }
        })
      }, function(response){});
    }
    // share on twitter
    shareOnTwitter() {
      let track = this.track_data;
      console.log(track);
      let url = 'http://'+window.location.host+'/artist_profile/'+track['artist_id']['_id']+'/track/'+track['_id']+'/comments';
      let str = "Track Name: "+track['name']+"\nArtist: "+track['artist_id']['first_name']+' '+track['artist_id']['last_name']+'\nDescription: '+track['description'];
      var twitterWindow = window.open('https://twitter.com/share?url=' +encodeURIComponent(url)+'&text='+encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
      if(twitterWindow.focus) { twitterWindow.focus(); }
    }
    // share track via email
    share_via_email(flag : boolean) {
      if(flag) {
        this.share_form_validation = !flag;
        this.show_spinner = true;
        let track = this.track_data;
        let url = 'http://'+window.location.host+'/artist_profile/'+track['artist_id']['_id']+'/track/'+track['_id']+'/comments';
        let data = {
          email : this.share_data['email'],
          track_id : track['_id'],
          url : url
        };
        this.ArtistProfileService.shareTrackViaEmail(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          this.emailmodalRef.close();
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      } else {
        this.share_form_validation = !flag;
      }
    }
    // share via sms
    share_via_sms(flag : boolean) {
      if(flag) {
        this.share_form_validation = !flag;
        this.show_spinner = true;
        let track = this.track_data;
        let url = 'http://'+window.location.host+'/artist_profile/'+track['artist_id']['_id']+'/track/'+track['_id']+'/comments';
        let data = {
          phone_no : this.share_data['phone_no'],
          track_id : track['_id'],
          url : url
        };
        this.ArtistProfileService.shareTrackViaSms(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
          this.emailmodalRef.close();
          this.share_data = {};
        }, (error) => {
          this.toastr.error(error['error'].message, 'Error!');
          this.show_spinner = false;
        }, () => {
          this.show_spinner = false;
        });
      } else {
        this.share_form_validation = !flag;
      }
    }
    // copy share track link
    copy_link() {
      let track = this.track_data;
      console.log(track);
      let url = 'http://'+window.location.host+'/artist_profile/'+track['artist_id']['_id']+'/track/'+track['_id']+'/comments';
      var textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
}
