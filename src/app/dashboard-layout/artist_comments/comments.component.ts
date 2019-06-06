import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../src/environments/environment';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-artist-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class ConmmentsComponent implements OnInit {
  artistdata: any = {};
  artistcomments: any = [];
  user: any;
  artist_img_url: any = environment.API_URL + environment.ARTIST_IMG;
  track_url: any = environment.API_URL + environment.ARTIST_TRACK;
  user_img_url: any = environment.API_URL + environment.USER_IMG;
  constructor(
    private CommentsService: CommentsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.artistdata = this.route.snapshot.data['artist'].artist;
    this.artistcomments = this.route.snapshot.data['comments'].comment;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() { }

  // Get all artist comment
  getAllArtistComment() {
    let data = {
      artist_id: this.artistdata['_id']
    };
    this.CommentsService.getAllCommentsByArtist(-1, data).subscribe((response) => {
      this.artistcomments = response['comment'];
    });
  }
  // upvote commnet
  upVoteComment(id: any) {
    if (this.user && this.user['user']) {
      let data = {
        comment_id: id
      }
      this.CommentsService.upVoteComment(data).subscribe((response) => {
        this.getAllArtistComment();
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
      }
      this.CommentsService.downVoteComment(data).subscribe((response) => {
        this.getAllArtistComment();
        this.toastr.success(response['message'], 'Success!');
      }, (error) => {
        this.toastr.error(error['error'].message, 'Error!');
      });
    } else {
      this.toastr.info('Please signin as listener to downvote comment.', 'Information!');
    }
  }

}
