import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { MessageService } from '../../shared/message.service';
@Injectable()
export class MyMusicService {
  private api_host: any = environment.API_URL;
  private user: any = '';
  private headers: any = '';

  constructor(private http: HttpClient, private MessageService: MessageService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
    this.MessageService.getMessage().subscribe((response) => {
      if (response && response['loggedin_user']) {
        this.user = response['loggedin_user'];
        this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
      }
    });
  }

  // Add artist track
  addTrack(data: any) {
    return this.http.post(`${this.api_host}/artist/track`, data, { headers: this.headers });
  }

  addContestTrack(data: any) {
    console.log("inside")
    return this.http.post(`${this.api_host}/artist/submit_tracks`, data, { headers: this.headers });
  }

  // Get All track details
  getAllTrack(data: any) {
    return this.http.post(`${this.api_host}/artist/track/tracks`, data, { headers: this.headers });
  }

  // Remove track by id
  deleteTrackById(id: any) {
    return this.http.delete(`${this.api_host}/artist/track/${id}`, { headers: this.headers });
  }
  // Edit track detail
  updateTrack(data: any, id: any) {
    return this.http.put(`${this.api_host}/artist/track/${id}`, data, { headers: this.headers });
  }
  // Remove track image by id
  deleteTrackImageById(id: any) {
    return this.http.delete(`${this.api_host}/artist/track/image/${id}`, { headers: this.headers });
  }
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }
  // Get All contest details
  getAllContest() {
    return this.http.get(`${this.api_host}/artist/contest`, { headers: this.headers });
  }
  // Add track to contest
  addTrackToContest(data: any) {
    return this.http.post(`${this.api_host}/artist/participate`, data, { headers: this.headers });
  }
  // change status of track download
  trackDownload(id: any) {
    return this.http.post(`${this.api_host}/artist/track/change_status_of_download`, { track_id: id }, { headers: this.headers });
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
}