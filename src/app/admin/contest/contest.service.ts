import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ContestService {
  private api_host : any = environment.API_URL;
  private user : any = '';
  private headers : any = '';

  constructor(private http: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token' : this.user.token });  
  }
  // Get all artist details
  getAllContest(data : any) {
    return this.http.post(`${this.api_host}/admin/contest`, data, {headers : this.headers});
  }
  // Get Contest participants by contest id
  getContestParticipants(data : any) {
    return this.http.post(`${this.api_host}/admin/get_participants_of_contest`, data, {headers : this.headers});
  }
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }
}