import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class CommentsService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
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

  // Get all comments by artist id
  getAllCommentsByArtist(sort:-1,data : any) {
    return this.http.post(`${this.api_host}/${sort}/comment`, data);
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