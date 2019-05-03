import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class ContestService {
  private api_host: any = environment.API_URL;
  private user: any = '';
  private headers: any = '';

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.headers = new HttpHeaders({ 'x-access-token': this.user.token });
  }
  // Get all artist details
  getAllContest(data: any) {
    return this.http.post(`${this.api_host}/admin/contest`, data, { headers: this.headers });
  }
  // Get Contest participants by contest id
  getContestParticipants(data: any) {
    return this.http.post(`${this.api_host}/admin/get_participants_of_contest`, data, { headers: this.headers });
  }
  // get All music type
  getAllMusicType() {
    return this.http.get(`${this.api_host}/music_type`);
  }
  // Get existing contest
  getExistingContest() {
    return this.http.get(`${this.api_host}/admin/get_all_contests_for_vote`, { headers: this.headers });
  }
  // get all region
  getAllRegion() {
    return this.http.get(`${this.api_host}/region`);
  }
  // Get state based on region
  getStateByRegion(data: any) {
    return this.http.post(`${this.api_host}/state_by_region`, data);
  }
  // Add new contest
  addNewContest(data: any) {
    return this.http.post(`${this.api_host}/admin/add_contest`, data, { headers: this.headers });
  }
  // add existing contest
  addExistingContest(data: any) {
    return this.http.post(`${this.api_host}/admin/add_existing_contest`, data, { headers: this.headers });
  }
  // get contest round by contest
  getContestRound(data) {
    return this.http.post(`${this.api_host}/admin/get_round`, data, { headers: this.headers });
  }

}