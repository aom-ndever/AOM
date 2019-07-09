import { Component, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { ArtistProfileService } from './artist_profile.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../src/environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var FB: any;
declare let Stripe: any;

@Component({
  selector: 'app-artist_profile',
  templateUrl: './artist_profile.component.html',
  styleUrls: []
})
export class ArtistProfileComponent implements OnInit, OnDestroy {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;
  dtOptions: DataTables.Settings[] = [];
  artistdata: any = {};
  artisttrack: any = [];
  artist_track_row_cnt = 1;
  artistmedia: any = [];
  rankingtrack: any = [];
  ranking_track_row_cnt = 1;
  artistfollower: any = {};
  artistcomments: any = [];
  display_comment: any = [];
  sort_artist_track: any = '';
  sort_ranking_tack: any = '';
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  artist_media_url: any = environment.API_URL + environment.ARTIST_MEDIA;
  user_img_url: any = environment.API_URL + environment.USER_IMG;
  audio_ins: any = [];
  rank_audio_ins: any = [];
  active_tab_index: any = 1;
  media_list: any = [];
  private _albums: any = [];
  subscription: Subscription;
  sort_by: any = '';
  private emailmodalRef: NgbModalRef;
  private phonemodalRef: NgbModalRef;
  share_data: any = {};
  private modalRef: NgbModalRef;
  share_form: FormGroup;
  share_form_phone: FormGroup;
  share_form_validation = false;
  user: any = '';
  show_spinner = false;
  track_data: any = {};
  // Artist following
  artist_following = false;
  card_loader = false;
  show_more_flag = false;
  isFollowed = false;
  style = {
    base: {
      color: '#32325d',
      lineHeight: '18px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  constructor(
    private artistProfileService: ArtistProfileService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private lightbox: Lightbox,
    private messageService: MessageService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private titleService: Title,
    private ngxService: NgxUiLoaderService
  ) {
    // console.log('artist-profile component => ');
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log('this.user => ', this.user);
    this.subscription = this.messageService.getMessage().subscribe((response) => {
      if (response && response['list'] !== 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
      }
      if (response && response['list'] !== 2) {
        this.rank_audio_ins.forEach((ele, idx) => { this.rank_audio_ins[idx] = false; });
      }
      if (response && response['action'] === 'stop' && response['list'] === 1) {
        this.audio_ins[response['index']] = false;
      }
      if (response && response['action'] === 'stop' && response['list'] === 2) {
        this.rank_audio_ins[response['index']] = false;
      }
      if (response && response['action'] === 'start' && response['list'] === 1) {
        this.audio_ins[response['index']] = true;
      }
      if (response && response['action'] === 'start' && response['list'] === 2) {
        this.rank_audio_ins[response['index']] = true;
      }
      if (response && response['list'] === 1 && response['action'] === 'next' || response['action'] === 'prev') {
        if (response['track_action'] && response['track_action'] === 'pause') {
          this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
          this.audio_ins[response['index']] = true;
        }
      }
      if (response && response['list'] === 2 && response['action'] === 'next' || response['action'] === 'prev') {
        if (response['track_action'] && response['track_action'] === 'pause') {
          this.rank_audio_ins.forEach((ele, idx) => { this.rank_audio_ins[idx] = false; });
          this.rank_audio_ins[response['index']] = true;
        }
      }
      if (response && response['action'] === 'bottom_play' && response['list'] === 1) {
        this.audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
        this.audio_ins[response['index']] = true;
      }
      if (response && response['action'] === 'bottom_play' && response['list'] === 2) {
        this.rank_audio_ins.forEach((ele, idx) => { this.audio_ins[idx] = false; });
        this.rank_audio_ins[response['index']] = true;
      }
    });
    this.share_form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.share_form_phone = this.fb.group({
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.ngxService.start();
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.artistmedia = this.route.snapshot.data['media'].media;
    this.artistfollower = this.route.snapshot.data['follower'].artist;
    this.messageService.followList.subscribe(res => {
      this.artistProfileService.getAllFollower({ artist_id: this.route.snapshot.paramMap.get('id') }).subscribe(response => {
        this.artistfollower = response['artist'];
      });
      // this.artistfollower = this.route.snapshot.data['follower'].artist;
    });
    this.artistcomments = this.route.snapshot.data['comments'].comment;
    if (this.artistcomments.length > 3) {
      this.display_comment = this.artistcomments.slice(0, 3).map(i => {
        return i;
      });
    } else {
      this.display_comment = this.artistcomments;
    }
    for (let i = 0; i < this.artistmedia.length; i++) {
      if (this.artistmedia[i].image) {
        this._albums.push({ src: this.artist_media_url + this.artistmedia[i].image });
      }
    }
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
        language: {
          'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
        },
        ajax: (dataTablesParameters: any, callback) => {
          setTimeout(() => {
            that.audio_ins = [];
            dataTablesParameters['artist_id'] = params['id'];
            dataTablesParameters['sort_by'] = this.sort_by;
            that.artistProfileService.getAllTrack(dataTablesParameters).subscribe((response) => {
              this.ngxService.stop();
              that.artisttrack = response['track']['music'];
              if (that.artisttrack.length > 0) {
                that.artisttrack.forEach((ele) => { that.audio_ins.push(false); });
                if (that.user && that.user['user']) {
                  that.artistProfileService.getBookmarkedTrackList().subscribe((resp) => {
                    const bookmark_list = resp['bookmark'];
                    that.artisttrack.forEach((ele) => {
                      let flag = false;
                      bookmark_list.forEach((bookmark) => {
                        if (bookmark['track_id']['_id'] === ele['_id']) {
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
              that.artist_track_row_cnt = (dataTablesParameters['start'] + 1);
            });
          }, 0);
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
        language: {
          'processing': '<i class="fa fa-spinner fa-spin loader"></i>',
        },
        ajax: (dataTablesParameters: any, callback) => {
          setTimeout(() => {
            that.audio_ins = [];
            dataTablesParameters['artist_id'] = params['id'];
            dataTablesParameters['sort_by'] = this.sort_by;
            that.artistProfileService.getAllRanking(dataTablesParameters).subscribe((response) => {
              that.rankingtrack = response['track']['music'];
              that.rankingtrack.forEach((ele) => { that.audio_ins.push(false); });
              // that.rankingtrack.forEach((ele) => {ele['is_bookmarked'] = false;});
              if (that.user && that.user['user']) {
                that.artistProfileService.getBookmarkedTrackList().subscribe((resp) => {
                  const bookmark_list = resp['bookmark'];
                  that.rankingtrack.forEach((ele) => {
                    let flag = false;
                    bookmark_list.forEach((bookmark) => {
                      if (bookmark['track_id']['_id'] === ele['_id']) {
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
              that.ranking_track_row_cnt = (dataTablesParameters['start'] + 1);
            });
          }, 0);

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
      if (this.user && this.user['user']) {
        this.artistProfileService.getUserFollowing().subscribe((response) => {
          if (response['artist'] && response['artist'].indexOf(params['id']) !== -1) {
            this.artist_following = true;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  openShareTrackModel(content, index: any, type: any) {
    if (type === 'track') {
      this.track_data = this.artisttrack[index];
    } else {
      this.track_data = this.rankingtrack[index];
    }
    this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
  }

  openEmailShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via email', 'Information!');
    }
  }

  openPhoneShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via sms', 'Information!');
    }
  }

  manageTabChange(index: any) {
    this.active_tab_index = index;
  }

  // Play audio
  playAudio(name: any, index: any, data: any) {
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
    this.messageService.sendMessage({ data: data, index: index, action: 'start', list: 1 });
  }

  // Stop audio
  stopAudio(index, data: any) {
    // this.audio_ins[index].pause();
    // this.audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.audio_ins[index];
    data.forEach((ele, idx) => {
      this.audio_ins[idx] = false;
    });
    this.messageService.sendMessage({ data: data, index: index, action: 'stop', list: 1 });
  }

  // Play audio
  playRankAudio(name: any, index: any, data: any) {
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
    this.messageService.sendMessage({ data: data, index: index, action: 'start', list: 2 });
  }

  // Stop audio
  stopRankAudio(index, data: any) {
    // this.rank_audio_ins[index].pause();
    // this.rank_audio_ins[index].currentTime = 0;
    // // this.audio_ins[index].stop();
    // delete this.rank_audio_ins[index];
    data.forEach((ele, idx) => {
      this.rank_audio_ins[idx] = false;
    });
    this.messageService.sendMessage({ data: data, index: index, action: 'stop', list: 2 });
  }

  // Follow artist
  followArtist(id: any) {
    // const promise = new Promise((resolve, reject) => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      const artist_data = {
        artist_id: id
      };
      this.artistProfileService.followArtist(artist_data).subscribe(response => {
        this.messageService.changeFollower();
        this.toastr.success(response['message'], 'Success!');
        if (response['flag'] === 'follow') {
          this.artist_following = true;
        } else if (response['flag'] === 'unfollow') {
          this.artist_following = false;
        }
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please Sign in as listener to follow the artist.', 'Info!');
    }
  }



  // Open artist media in lightbox
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._albums, index);
  }

  // Like the track
  likeTrack(track_id: any, index: any) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user) {
      const data = {
        'track_id': track_id,
        'artist_id': this.artistdata._id,
        'status': true
      };
      this.artistProfileService.trackLike(data).subscribe(response => {
        if (response['flag'] === 'liked') {
          this.artisttrack[index].no_of_likes = 1;
        } else if (response['flag'] === 'unliked') {
          this.artisttrack[index].no_of_likes = 0;
        }
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login to like the track.');
    }

  }

  // Like the track
  likeRankTrack(track_id: any, index: any) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user) {
      const data = {
        'track_id': track_id,
        'artist_id': this.artistdata._id,
        'status': true
      };
      this.artistProfileService.trackLike(data).subscribe(response => {
        if (response['flag'] === 'liked') {
          this.rankingtrack[index].no_of_likes = 1;
        } else if (response['flag'] === 'unliked') {
          this.rankingtrack[index].no_of_likes = 0;
        }
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login to like the track.');
    }
  }

  // Vist track comment page
  goToComment(artist_id: any, id: any) {
    this.router.navigate(['artist_profile/' + artist_id + '/track/' + id + '/comments']);
  }

  // sortArtistTrack
  sortArtistTrack(idx: any, sortBy: any) {
    // let data = {
    //   "artist_id": artist_id,
    //   "sort_by" : sortBy
    // };
    // this.ArtistProfileService.getAllTrack(data).subscribe(response => {
    //   this.artisttrack = response['track'];
    // });
    this.sort_by = sortBy;
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (idx === index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }

  // sortRankingTrack
  sortRankingTrack(idx: any, sortBy: any) {
    // let data = {
    //   "artist_id": artist_id,
    //   "sort_by" : sortBy
    // };
    // this.ArtistProfileService.getAllRanking(data).subscribe(response => {
    //   this.rankingtrack = response['track'];
    // });
    this.sort_by = sortBy;
    this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
      if (idx === index) {
        dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.draw();
        });
      }
    });
  }

  // Download track
  downloadTrack(id: any) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user) {
      this.artistProfileService.downloadTrack(id).subscribe(response => {
        window.location.href = this.user_img_url + response['filename'];
      }, error => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else if (user && user.artist) {
      this.toastr.info('Only listenr can download this track.', 'Info!');
    } else {
      this.toastr.info('Please login to download this track.', 'Info!');
    }
  }

  // Bookmark particular track
  bookMarkTrack(id: any, index: any, type: any) {
    if (this.user && this.user['user']) {
      if (type === 'track') {
        this.artisttrack[index]['is_bookmarked'] = !this.artisttrack[index]['is_bookmarked'];
        const data = {
          // is_bookmarked: this.artisttrack[index]['is_bookmarked'],
          track_id: id
        };
        this.artistProfileService.bookmarkTrack(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
        }, (error) => {
          this.artisttrack[index]['is_bookmarked'] = !this.artisttrack[index]['is_bookmarked'];
          this.toastr.error(error['error'].message, 'Error!');
        });
      } else {
        this.rankingtrack[index]['is_bookmarked'] = !this.rankingtrack[index]['is_bookmarked'];
        const data = {
          // is_bookmarked: this.rankingtrack[index]['is_bookmarked'],
          track_id: id
        };
        this.artistProfileService.bookmarkTrack(data).subscribe((response) => {
          this.toastr.success(response['message'], 'Success!');
        }, (error) => {
          this.rankingtrack[index]['is_bookmarked'] = !this.rankingtrack[index]['is_bookmarked'];
          this.toastr.error(error['error'].message, 'Error!');
        });
      }
    } else {
      this.toastr.info('Please signin as listener to bookmark the track.', 'Information!');
    }
  }

  // share on facebook
  shareOnFacebook() {
    const track = this.track_data;
    const url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    const str =
      'Track Name: ' + track['name'] + '\nArtist: ' + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];

    // var facebookWindow = window.open('https://www.facebook.com/sharer.php?s=100&p[summary]='+encodeURIComponent(str)+"&p[url]="+encodeURIComponent(url), 'facebook-popup', 'height=350,width=600');
    // if(facebookWindow.focus) { facebookWindow.focus(); }
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          'og:url': url,
          'og:title': 'AOM',
          'og:description': str
        }
      })
    }, function (response) { });
  }

  // share on twitter
  shareOnTwitter() {
    const track = this.track_data;
    const url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    const str = 'Track Name: ' + track['name'] + '\nArtist: ' + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
    const twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
  }

  // share track via email
  share_via_email(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      const track = this.track_data;
      const url =
        'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      const data = {
        email: this.share_data['email'],
        track_id: track['_id'],
        url: url
      };
      this.artistProfileService.shareTrackViaEmail(data).subscribe((response) => {
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
  share_via_sms(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      const track = this.track_data;
      const url =
        'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      const data = {
        phone_no: this.share_data['phone_no'],
        track_id: track['_id'],
        url: url
      };
      this.artistProfileService.shareTrackViaSms(data).subscribe((response) => {
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
    const track = this.track_data;
    const url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }


  // Stripe Credit-Card implementation
  openCardModel(content, index, type) {
    if (this.user && this.user['user']) {
      this.card_loader = true;
      setTimeout(() => {
        this.setupStripeFrom();
      }, 0);
      if (type === 'track') {
        this.track_data = this.artisttrack[index];
      } else {
        this.track_data = this.rankingtrack[index];
      }
      this.modalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Please sign-in as listener to purchase track.', 'Info!');
    }
  }



  setupStripeFrom() {
    const stripe = Stripe(environment.STRIPE_PUB_KEY);
    const elements = stripe.elements();
    const card = elements.create('card', { style: this.style });
    card.mount('#card-element');
    this.card_loader = false;
    // this.registerElements([card], 'ex');
    card.addEventListener('change', function (event) {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    const form = document.getElementById('payment-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.show_spinner = true;
      stripe.createToken(card).then((result) => {
        if (result.error) {
          // Inform the customer that there was an error.
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
          this.show_spinner = false;
        } else {
          // Send the token to your server.
          const data = {
            track_id: this.track_data['_id'],
            card_id: result['token']['id']
          };
          this.artistProfileService.purchaseTrack(data).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.modalRef.close();
          }, (error) => {
            this.toastr.error(error['error'].message, 'Error!');
            this.show_spinner = false;
          }, () => {
            this.show_spinner = false;
          });
          // this.stripeTokenHandler(result.token);
        }
      });
    });
  }
  // manage show more for artist description

  show_more() {
    this.show_more_flag = !this.show_more_flag;
  }

}
