import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ArtistService {
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
    return this.http.get(`${this.api_host}/user/artist/followed`, {headers : this.headers});
  }
  // Get my followers
  getMyFollower() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
    return this.http.get(`${this.api_host}/user/artist/get_followers`, {headers : this.headers});
  }
  // Get All Atrist [Rising Star, chart topper, My Artist]
  getAllArtistv1(data) {
    return this.http.post(`${this.api_host}/artistv1`, data);
  }
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }
  // get all state
  getAllState() {
    return this.http.post(`${this.api_host}/state`, null);
  }
}