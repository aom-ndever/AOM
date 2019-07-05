import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ArtistTrackCommentsService {
  private api_host: any = environment.API_URL;
  private user: any = '';
  private headers: any = '';

  constructor(private http: HttpClient) {
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });
  }

  // Get Artist and track
  getArtistData(data: any) {
    return this.http.post(`${this.api_host}/whatsnew`, data);
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
  // Post a comment on track
  addCommentToTrack(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/comment`, data, { headers: this.headers });
  }
  // Track comment
  getAllTrackComment(data: any) {
    return this.http.post(`${this.api_host}/get_comment_by_track_id`, data);
  }
  // delete track comment
  removeTrackComment(id: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.delete(`${this.api_host}/artist/delete_comment/${id}`, { headers: this.headers });
  }
  // Block the user
  blockUser(id: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/artist/suspend/user/${id}`, {}, { headers: this.headers });
  }
}
