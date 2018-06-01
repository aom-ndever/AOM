import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class MyProfileService {
  private api_host : any = environment.API_URL;
  private user = JSON.parse(localStorage.getItem('user'));
  constructor(private http: HttpClient) { 
    
  }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token' : this.user.token });

  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }

  // update artist profile
  updateArtistProfile(data : any) {
    return this.http.put(`${this.api_host}/artist`, data, {headers : this.headers});
  }

  // update artist profile
  updateUserProfile(data : any) {
    return this.http.put(`${this.api_host}/user`, data);
  }

  // Get Artist by id
  getArtistById() {
    return this.http.get(`${this.api_host}/artist/artist_by_id`, {headers : this.headers});
  }

  // Get User by id
  getUserById() {
    return this.http.get(`${this.api_host}/artist/artist_by_id`, {headers : this.headers});
  }

}
