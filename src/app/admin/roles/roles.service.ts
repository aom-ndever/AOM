import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../../src/environments/environment';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable()
export class RolesService {
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
  // Get all administrator
  getAllAdministrator(data) {
    return this.http.post(`${this.api_host}/admin`, data, {headers:this.headers});
  }
  // Add new admin
  addNewAdmin(data : any) {
    return this.http.post(`${this.api_host}/admin/add_admin`, data, {headers : this.headers});
  }
  // Remove admin
  deleteAdmin(id : any) {
    return this.http.delete(`${this.api_host}/admin/delete/${id}`, {headers: this.headers});
  }
   // Remove admin
  suspendAdmin(id : any) {
    return this.http.post(`${this.api_host}/admin/suspend/${id}`, null, {headers: this.headers});
  }
  // Get contest detail
  getAllRequest(data : any) {
    return this.http.post(`${this.api_host}/admin/contest_request`, data, {headers : this.headers});
  }
  // Contest request accepetd
  acceptContestRequest(id : any) {
    return this.http.post(`${this.api_host}/admin/accept/contest_request/${id}`, null, {headers : this.headers});
  }
   // Contest request accepetd
   rejectContestRequest(id : any) {
    return this.http.post(`${this.api_host}/admin/reject/contest_request/${id}`, null, {headers : this.headers});
  }
}