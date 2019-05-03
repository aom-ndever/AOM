import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class TrackCommentsService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  shareTrackViaEmail(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/share_track_by_mail`, data, { headers: this.headers });
  }
  shareTrackViaSms(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/share_track_by_sms`, data, { headers: this.headers });
  }
  downloadTrack(id: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/track/${id}/download`, { headers: this.headers });
  }
  trackLike(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/like_track`, data, { headers: this.headers });
  }
  
  // Get Artist and track
  getArtistData (data : any) {
    return this.http.post(`${this.api_host}/whatsnew`, data);
  }
  // Follow the artist 
  followArtist(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/user/artist/follow`, data, {headers : this.headers});
  }
  // Get followers
  getFollower() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.get(`${this.api_host}/user/artist/followers`, {headers : this.headers});
  }
  purchaseTrack(data) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/purchase`, data, { headers: this.headers });
  }
  // Post a comment on track
  addCommentToTrack(data :  any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/user/comment`, data, {headers : this.headers});
  }
   // Track comment
   getAllTrackComment(data : any) {
    return this.http.post(`${this.api_host}/get_comment_by_track_id`, data);
  }
  // Flag other user
  flagUser(id : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
    return this.http.post(`${this.api_host}/user/flag/user/${id}`, {}, {headers : this.headers});
  }

  // upvote comment
  upVoteComment(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
    return this.http.post(`${this.api_host}/user/comment/upvote`, data, {headers : this.headers});
  }
  // Downvote comment
  downVoteComment(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
    return this.http.post(`${this.api_host}/user/comment/downvote`, data, {headers : this.headers});
  }

}