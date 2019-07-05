import { Component, OnInit } from '@angular/core';
import { TrackCommentsService } from './track_comments.service';
import { ToastrService } from 'ngx-toastr';
import { ArtistProfileService } from '../artist_profile/artist_profile.service';
import { environment } from '../../../../src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Title } from '@angular/platform-browser';
declare var FB: any;
declare let Stripe: any;
import * as socketClient from 'socket.io-client';
import { MyMusicComponent } from '../my_music/my_music.component';

@Component({
  selector: 'app-track-comments',
  templateUrl: './track_comments.component.html',
  styleUrls: []
})
export class TrackConmmentsComponent implements OnInit {
  artistdata: any = {};
  track: any = {};
  trackcomments: any = [];
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  user_img_url: any = environment.API_URL + environment.USER_IMG;
  user: any;
  audio_ins: any = [];
  comment_txt: any = '';
  track_data: any = {};
  artisttrack: any = [];
  rankingtrack: any = [];
  show_spinner: boolean = false;
  private phonemodalRef: NgbModalRef;
  share_data: any = {};
  share_form_phone: FormGroup;
  share_form: FormGroup;
  share_form_validation: boolean = false;
  card_loader: boolean = false;
  private emailmodalRef: NgbModalRef;
  private socket;
  private modalRef: NgbModalRef;
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
    private trackCommentsService: TrackCommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private titleService: Title,
    private artistProfileService: ArtistProfileService,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.trackcomments = this.route.snapshot.data['comment'].comment;
    this.track = this.route.snapshot.data['track'].track;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.share_form_phone = this.fb.group({
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
    this.share_form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }

  ngOnInit() {
    window.scroll(0, 0);
    console.log('track comment component => ');
    // console.log('environment.socketUr', environment.socketUrl);
    this.socket = socketClient(environment.socketUrl);
    // console.log('this.socket => ', this.socket);
  }


  // ****** updated code *******

  // openShareTrackModel(content, index: any, type: any) {
  openShareTrackModel(content, type: any) {
    // if (type === 'track') {
    //   this.track_data = this.artisttrack[index];
    // } else {
    //   this.track_data = this.rankingtrack[index];
    // }
    this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
  }

  // ****** updated code *******


  // share on facebook
  shareOnFacebook() {
    let track = this.track;
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = 'Track Name: ' + track['name'] + '\nArtist: ' + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
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

  // Stripe Credit-Card implementation
  // openCardModel(content, index, type) {
  openCardModel(content, type) {
    if (this.user && this.user['user']) {
      this.card_loader = true;
      setTimeout(() => {
        this.setupStripeFrom();
      }, 0);
      // if (type == 'track') {
      //   this.track= this.artisttrack[index];
      // } else {
      //   this.track= this.rankingtrack[index];
      // }
      this.modalRef = this.modalService.open(content, { centered: true, backdrop: true });
      // this.modalRef = this.modalService.open(content, { centered: true, windowClass: 'modal-wrapper', backdrop: true });
    } else {
      this.toastr.info('Please sign-in as listener to purchase track.', 'Info!');
    }
  }

  setupStripeFrom() {
    var stripe = Stripe(environment.STRIPE_PUB_KEY);
    var elements = stripe.elements();
    var card = elements.create('card', { style: this.style });
    card.mount('#card-element');
    this.card_loader = false;
    // this.registerElements([card], 'ex');
    card.addEventListener('change', function (event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.show_spinner = true;
      stripe.createToken(card).then((result) => {
        if (result.error) {
          // Inform the customer that there was an error.
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
          this.show_spinner = false;
        } else {
          // Send the token to your server.
          let data = {
            // track_id: this.track_data['_id'],
            track_id: this.track._id,
            card_id: result['token']['id']
          };
          this.trackCommentsService.purchaseTrack(data).subscribe((response) => {
            this.toastr.success(response['message'], 'Success!');
            this.modalRef.close();
          }, (error) => {
            this.toastr.error(error['error'].message[0].msg, 'Error!');
            this.show_spinner = false;
          }, () => {
            this.show_spinner = false;
          });
          // this.stripeTokenHandler(result.token);
        }
      });
    });
  }

  openPhoneShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.phonemodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via sms', 'Information!');
    }
  }
  openEmailShareTrackModel(content) {
    if (this.user) {
      this.share_data = {};
      this.emailmodalRef = this.modalService.open(content, { centered: true, backdrop: true });
    } else {
      this.toastr.info('Login first to share track via email', 'Information!');
    }
  }
  shareOnTwitter() {
    let track = this.track;
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    let str = 'Track Name: ' + track['name'] + '\nArtist: ' + track['artist_id']['first_name'] + ' ' + track['artist_id']['last_name'] + '\nDescription: ' + track['description'];
    var twitterWindow = window.open('https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(str), 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
  }
  copy_link() {
    let track = this.track;
    console.log(track);
    let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
    var textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
  // share track via email
  share_via_email(flag: boolean) {
    if (flag) {
      this.share_form_validation = !flag;
      this.show_spinner = true;
      let track = this.track;
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        email: this.share_data['email'],
        track_id: track['_id'],
        url: url
      };
      this.trackCommentsService.shareTrackViaEmail(data).subscribe((response) => {
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
      let track = this.track;
      let url = 'http://' + window.location.host + '/artist_profile/' + track['artist_id']['_id'] + '/track/' + track['_id'] + '/comments';
      let data = {
        phone_no: this.share_data['phone_no'],
        track_id: track['_id'],
        url: url
      };
      this.trackCommentsService.shareTrackViaSms(data).subscribe((response) => {
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


  // Play audio
  playAudio(name: any, index: any) {
    let audio = new Audio();
    audio.src = this.track_url + name;
    audio.load();
    audio.play();
    if (!this.audio_ins.hasOwnProperty(index)) {
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
    let isWhitespace;
    let isValid;
    if (this.comment_txt) {
      isWhitespace = this.comment_txt.trim().length === 0;
      isValid = !isWhitespace;
    }
    if (this.comment_txt && isValid) {
      this.show_spinner = true;
      let data = {
        'track_id': this.track._id,
        'artist_id': this.artistdata._id,
        'comment': this.comment_txt
      };
      console.log(data);
      this.trackCommentsService.addCommentToTrack(data).subscribe(response => {
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
  // Download track
  downloadTrack(id: any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user) {
      this.trackCommentsService.downloadTrack(id).subscribe(response => {
        console.log(response);
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

  // likeTrack(track_id: any, index: any) {
  likeTrack(track_id: any) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.user) {
      console.log('likes counter==> ', this.track);
      // this.track.no_of_likes += 1;
      let data = {
        'track_id': track_id,
        'artist_id': this.artistdata._id,
        'status': true
      };
      this.trackCommentsService.trackLike(data).subscribe(response => {
        if (response['flag'] === 'liked') {
          this.track.no_of_likes = 1;
        } else if (response['flag'] === 'unliked') {
          this.track.no_of_likes = 0;
        }
        // if (response['message'] === 'Already liked') {
        //   this.track.no_of_likes -= 1;
        // }
        this.toastr.success(response['message'], 'Success!');
      }, error => {
        // this.track.no_of_likes -= 1;
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please login to like the track.');
    }

  }
  // Get all comment of track
  getAllTrackComment() {
    let data = {
      track_id: this.track._id
    };
    this.trackCommentsService.getAllTrackComment(data).subscribe(response => {
      this.trackcomments = response['comment'];
      console.log('trackcomments => ', this.trackcomments);
    });
  }
  // Flag other user
  flagUser(id: any) {
    this.trackCommentsService.flagUser(id).subscribe((response) => {
      this.toastr.success(response['message'], 'Success!');
      this.getAllTrackComment();
    }, (error) => {
      this.toastr.error(error['error'].message, 'Error!');
    });
  }

  // upvote commnet
  upVoteComment(id: any) {
    if (this.user && this.user['user']) {
      let data = {
        comment_id: id
      };
      this.trackCommentsService.upVoteComment(data).subscribe((response) => {
        this.getAllTrackComment();
        this.toastr.success(response['message'], 'Success!');
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please signin as listener to upnvote comment.', 'Information!');
    }
  }
  // downvote commnet
  downVoteComment(id: any) {
    if (this.user && this.user['user']) {
      let data = {
        comment_id: id
      };
      this.trackCommentsService.downVoteComment(data).subscribe((response) => {
        this.getAllTrackComment();
        this.toastr.success(response['message'], 'Success!');
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please signin as listener to downvote comment.', 'Information!');
    }
  }
}
