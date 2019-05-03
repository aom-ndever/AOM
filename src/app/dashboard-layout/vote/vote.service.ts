import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class VoteService {
  private api_host: any = environment.API_URL;
  private user: any = '';
  private headers: any = '';

  constructor(private http: HttpClient) {
    // this.user = JSON.parse(localStorage.getItem('user'));
    // this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }
  // get all state
  getAllState() {
    return this.http.post(`${this.api_host}/state`, null);
  }
  // get all participants
  getAllParticipants(data) {
    return this.http.post(`${this.api_host}/get_track_for_current_round`, data);
  }
  // Follow the artist 
  followArtist(data: any) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/artist/follow`, data, { headers: this.headers });
  }
  // vote to artist track
  giveVoteToTrack(data) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.post(`${this.api_host}/user/track/vote_track`, data, { headers: this.headers });
  }
  // Get all contest
  getAllContest(data) {
    return this.http.post(`${this.api_host}/get_contest`, data);
  }
  // get winners data
  getWinnersData(data) {
    return this.http.post(`${this.api_host}/get_track_for_current_round`, data);
  }
  // Get followers
  getFollower() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    return this.http.get(`${this.api_host}/user/artist/followed`, { headers: this.headers });
  }
}