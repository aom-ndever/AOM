import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class HomeService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  // Get artist details who has max vote
  getMaxVoteArtists(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/admin/home_vote`, data, {headers : this.headers});
  }
  // Get artist details who has max likes
  getMaxLikeArtists(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/admin/home_likes`, data, {headers : this.headers});
  }
  // Get artist details who has max comments
  getMaxCommentArtists(data : any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.post(`${this.api_host}/admin/home_comment`, data, {headers : this.headers});
  }
  // Get artist track by id
  getArtistTrackById(data : any) {
    return this.http.post(`${this.api_host}/admin/get_artist_tracks`, data, {headers : this.headers});
  }
  // Get artist follower by id
  getArtistFollowerById(data : any) {
    return this.http.post(`${this.api_host}/admin/get_artist_followers`, data, {headers : this.headers});
  }
  // Get artist vote by id
  getArtistVoteById(data : any) {
    return this.http.post(`${this.api_host}/admin/get_artist_votes`, data, {headers : this.headers});
  }
  // Get artist Comment by id
  getArtistCommentById(data : any) {
    return this.http.post(`${this.api_host}/admin/get_artist_comments`, data, {headers : this.headers});
  }
}