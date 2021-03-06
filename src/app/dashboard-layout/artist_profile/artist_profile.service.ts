import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ArtistProfileService {
  private api_host: any = environment.API_URL;
  private user: any = '';
  private headers: any = '';

  constructor(private http: HttpClient) {
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
  }

  // Get Artist and track
  getArtistData(data: any) {
    return this.http.post(`${this.api_host}/get_artist`, data);
  }
  // Get Artist and track
  getArtistFollowers(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/artist/artist_followers`, data, { headers: this.headers });
  }
  // Follow the artist
  followArtist(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/artist/follow`, data, { headers: this.headers });
  }
  // Get followers
  getFollower() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/artist/followers`, { headers: this.headers });
  }
  // Get all track of artist
  getAllTrack(data: any) {
    return this.http.post(`${this.api_host}/get_track`, data);
  }
  // Get all media of artist
  getAllMedia(data: any) {
    return this.http.post(`${this.api_host}/get_media`, data);
  }
  // get all follower of artist
  getAllFollower(data: any) {
    return this.http.post(`${this.api_host}/followers`, data);
  }
  // Get all comments of artist
  getAllComments(data: any) {
    return this.http.post(`${this.api_host}/comment`, data);
  }
  // Get all ranking of artist
  getAllRanking(data: any) {
    return this.http.post(`${this.api_host}/get_ranking`, data);
  }
  // Like the track
  trackLike(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/like_track`, data, { headers: this.headers });
  }
  // Track comment
  getAllTrackComment(data: any) {
    return this.http.post(`${this.api_host}/get_comment_by_track_id`, data);
  }
  // Get track detail by track id
  getTrackById(id: any) {
    return this.http.get(`${this.api_host}/tracks/${id}`);
  }
  // download the track
  downloadTrack(id: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/track/${id}/download`, { headers: this.headers });
  }
  // share track via email
  shareTrackViaEmail(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/share_track_by_mail`, data, { headers: this.headers });
  }
  // share track via email
  shareTrackViaSms(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/share_track_by_sms`, data, { headers: this.headers });
  }
  // user bookmarked track list
  getBookmarkedTrackList() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/bookmark`, { headers: this.headers });
  }
  // bookmark any track
  bookmarkTrack(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/bookmark/add`, data, { headers: this.headers });
  }
  // purchase track
  purchaseTrack(data) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/purchase`, data, { headers: this.headers });
  }
  // Get user's following
  getUserFollowing() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/artist/followed`, { headers: this.headers });
  }
}
