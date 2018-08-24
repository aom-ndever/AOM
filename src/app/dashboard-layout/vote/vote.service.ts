import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class VoteService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

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
      return this.http.post(`${this.api_host}/get_all_participants`, data);
  }
}