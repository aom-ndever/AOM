import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class MyProfileService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }

  

  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }

  // update artist profile
  updateArtistProfile(data : any) {
    return this.http.put(`${this.api_host}/artist`, data, {headers : this.headers});
  }

  // Update user profile pic
  updateArtistProfileImage(data : any) {
    return this.http.put(`${this.api_host}/artist/update_image`, data, {headers : this.headers});
  }

  // Update user profile pic
  updateCoverImage(data : any) {
    return this.http.put(`${this.api_host}/artist/update_cover_image`, data, {headers : this.headers});
  }

  // update user profile
  updateUserProfile(data : any) {
    return this.http.put(`${this.api_host}/user`, data, {headers : this.headers});
  }

  // update user profile image
  updateUserProfileImage(data : any) {
    return this.http.put(`${this.api_host}/user/update_image`, data, {headers : this.headers});
  }

  // Get Artist by id
  getArtistById() {
    return this.http.get(`${this.api_host}/artist/artist_by_id`, {headers : this.headers});
  }

  // Get User by id
  getUserById() {
    return this.http.get(`${this.api_host}/user`, {headers : this.headers});
  }

  // Remove Artist Image
  deleteArtistImage(id : any) {
    return this.http.delete(`${this.api_host}/artist/image/${id}`, {headers : this.headers});
  }
  // Remove Artist Cover Image
  deleteArtistCoverImage(id : any) {
    return this.http.delete(`${this.api_host}/artist/cover_image/${id}`, {headers : this.headers});
  }
  // Remove User Image
  deleteUserImage(id : any) {
    return this.http.delete(`${this.api_host}/user/image/${id}`, {headers : this.headers});
  }
  // Change artist password
  changeArtistEmail(data : any) {
    this.http.put(`${this.api_host}/artist/settings/email`, data);
  }
  // Change user password
  changeArtistPassword(data : any) {
    this.http.put(`${this.api_host}/artist/settings/password`, data);
  }
}
