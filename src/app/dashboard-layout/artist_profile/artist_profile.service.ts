import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ArtistProfileService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }

  // Get Artist and track
  getArtistData (data : any) {
    return this.http.post(`${this.api_host}/get_artist`, data);
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
  // Get all track of artist
  getAllTrack(data : any) {
    return this.http.post(`${this.api_host}/get_track`, data);
  }
  // Get all media of artist
  getAllMedia(data : any) {
    return this.http.post(`${this.api_host}/get_media`, data);
  }
  // get all follower of artist
  getAllFollower(data : any) {
    return this.http.post(`${this.api_host}/followers`, data);
  }
  // Get all comments of artist
  getAllComments(data : any) {
    return this.http.post(`${this.api_host}/comment`, data);
  }
  // Get all ranking of artist
  getAllRanking(data : any) {
    return this.http.post(`${this.api_host}/get_ranking`, data);
  }
  // Like the track
  trackLike(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/user/track/like_track`, data, {headers : this.headers});
  }
}