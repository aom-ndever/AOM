import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class MyMusicService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }

  // Add artist track
  addTrack(data : any) {
    return this.http.post(`${this.api_host}/artist/track`, data, {headers : this.headers});
  }

  // Get All track details
  getAllTrack() {
    return this.http.get(`${this.api_host}/artist/track`, {headers : this.headers});
  }

  // Remove track by id
  deleteTrackById(id : any) {
    return this.http.delete(`${this.api_host}/artist/track/${id}`, {headers : this.headers});
  }
  // Edit track detail
  updateTrack(data : any, id : any) {
    return this.http.put(`${this.api_host}/artist/track/${id}`, data, {headers : this.headers});
  }
  // Remove track image by id
  deleteTrackImageById(id : any) {
    return this.http.delete(`${this.api_host}/artist/track/image/${id}`, {headers : this.headers});
  }
}