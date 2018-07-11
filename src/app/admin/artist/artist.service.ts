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
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  // Get all artist details
  getAllArtist(data : any) {
    return this.http.post(`${this.api_host}/admin/get_artist`, data, {headers : this.headers});
  }
  
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }

  // suspend artist
  suspendArtist(id : any) {
    return this.http.post(`${this.api_host}/admin/flag/artist/${id}`, null, {headers : this.headers});
  }

  // Get artist details
  getArtist(data : any) {
    return this.http.post(`${this.api_host}/get_artist`, data);
  }
  // Get artist track
  getArtistTrack(data : any) {
    return this.http.post(`${this.api_host}/get_track`, data);
  }
  // Get Artist flag details
  getArtistFlagDetails(data : any) {
    return this.http.post(`${this.api_host}/admin/get_flag`, data, {headers : this.headers});
  }
  // Remove track 
  removeArtistTrack(id : any) {
    return this.http.delete(`${this.api_host}/admin/track/${id}`, {headers : this.headers});
  }
  // Mark as featured
  markAsFeatured(data : any) {
    return this.http.put(`${this.api_host}/admin/featured_artist`, data, {headers : this.headers});
  }
}